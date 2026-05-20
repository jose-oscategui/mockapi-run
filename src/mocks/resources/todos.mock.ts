import type { Todo } from '@/types/resources/todo.type';
import { Faker, base, en } from '@faker-js/faker';
import { comments } from '@/mocks/resources/comments.mock';
import { users } from '@/mocks/resources/users.mock';

const todoFaker = new Faker({
  locale: [en, base],
  seed: 20260522,
});

todoFaker.setDefaultRefDate('2026-05-19T00:00:00.000Z');

const todoStatuses = ['todo', 'in-progress', 'done', 'blocked'] as const;
const todoPriorities = ['low', 'medium', 'high', 'urgent'] as const;
const todoCategories = ['feature', 'bugfix', 'research', 'content', 'maintenance'] as const;
const todoTags = ['api', 'docs', 'frontend', 'backend', 'testing', 'astro', 'ux', 'typescript'] as const;
const totalTodos = 100;

function createTitle(id: number): string {
  const action = todoFaker.helpers.arrayElement(['Prepare', 'Review', 'Ship', 'Refine', 'Document']);
  const subject = todoFaker.helpers.arrayElement(['API mocks', 'comment relations', 'todo flows', 'docs content', 'query filters']);

  return `${action} ${subject} ${id}`;
}

function createTodo(id: number, assignedUser = users[(id - 1) % users.length]): Todo {
  const createdAt = todoFaker.date.past({ years: 1 });
  const updatedAt = todoFaker.date.between({ from: createdAt, to: new Date('2026-05-19T00:00:00.000Z') });
  const completed = todoFaker.datatype.boolean({ probability: 0.35 });
  const completedAt = completed ? todoFaker.date.between({ from: createdAt, to: updatedAt }).toISOString() : null;
  const checklistSize = todoFaker.number.int({ min: 2, max: 5 });
  const checklist = Array.from({ length: checklistSize }, (_, index) => ({
    id: id * 10 + index + 1,
    title: todoFaker.helpers.arrayElement(['Define scope', 'Implement change', 'Write docs', 'Review output', 'Verify data']),
    completed: completed ? true : todoFaker.datatype.boolean({ probability: 0.45 }),
  }));
  const progress = completed
    ? 100
    : Math.min(
        95,
        Math.max(0, Math.round((checklist.filter((item) => item.completed).length / checklist.length) * 100)),
      );

  return {
    id,
    userId: assignedUser.id,
    title: createTitle(id),
    description: todoFaker.lorem.sentences({ min: 2, max: 4 }),
    completed,
    status: completed ? 'done' : todoFaker.helpers.arrayElement(todoStatuses.filter((status) => status !== 'done')),
    priority: todoFaker.helpers.arrayElement(todoPriorities),
    category: todoFaker.helpers.arrayElement(todoCategories),
    tags: todoFaker.helpers.arrayElements(todoTags, { min: 2, max: 4 }),
    dueDate: todoFaker.date.soon({ days: 45, refDate: updatedAt }).toISOString(),
    estimatedHours: todoFaker.number.int({ min: 1, max: 40 }),
    progress,
    assignedTo: {
      id: assignedUser.id,
      name: assignedUser.name,
      username: assignedUser.username,
      avatar: assignedUser.avatar,
    },
    checklist,
    attachments: Array.from({ length: todoFaker.number.int({ min: 0, max: 3 }) }, (_, index) => ({
      id: id * 100 + index + 1,
      name: `${todoFaker.system.fileName().replace(/\.[^.]+$/, '')}.pdf`,
      size: `${todoFaker.number.int({ min: 1, max: 12 })} MB`,
    })),
    stats: {
      comments: comments.filter((comment) => comment.todoId === id).length,
      activityLogs: todoFaker.number.int({ min: 1, max: 30 }),
    },
    relatedTodoIds: [],
    metadata: {
      archived: false,
      pinned: todoFaker.datatype.boolean({ probability: 0.1 }),
    },
    createdAt: createdAt.toISOString(),
    updatedAt: updatedAt.toISOString(),
    completedAt,
  };
}

const guaranteedTodos = users.map((user, index) => createTodo(index + 1, user));

const remainingTodos: Todo[] = Array.from(
  { length: totalTodos - guaranteedTodos.length },
  (_, index) => createTodo(guaranteedTodos.length + index + 1),
);

const baseTodos = [...guaranteedTodos, ...remainingTodos];

export const todos: Todo[] = baseTodos.map((todo) => ({
  ...todo,
  relatedTodoIds: todoFaker.helpers
    .shuffle(baseTodos.map(({ id }) => id).filter((id) => id !== todo.id))
    .slice(0, 3),
}));
