import type { Comment } from '@/types/comment.type';
import { Faker, base, en } from '@faker-js/faker';
import { posts } from '@/mocks/posts.mock';
import { users } from '@/mocks/users.mock';

const commentFaker = new Faker({
  locale: [en, base],
  seed: 20260521,
});

commentFaker.setDefaultRefDate('2026-05-19T00:00:00.000Z');

const commentStatuses = ['approved', 'pending', 'spam'] as const;
const commentTags = ['api', 'helpful', 'bug', 'feedback', 'question', 'typescript', 'astro', 'testing'] as const;
const totalComments = 300;

function createAssignedIds(ids: number[], total: number): number[] {
  const assignedIds = [...ids];

  while (assignedIds.length < total) {
    assignedIds.push(commentFaker.helpers.arrayElement(ids));
  }

  return commentFaker.helpers.shuffle(assignedIds);
}

const assignedPostIds = createAssignedIds(
  posts.map((post) => post.id),
  totalComments,
);

const assignedUserIds = createAssignedIds(
  users.map((user) => user.id),
  totalComments,
);

const assignedTodoIds = createAssignedIds(
  Array.from({ length: 100 }, (_, index) => index + 1),
  totalComments,
);

function createComment(id: number): Comment {
  const postId = assignedPostIds[id - 1];
  const todoId = assignedTodoIds[id - 1];
  const userId = assignedUserIds[id - 1];
  const post = posts.find((item) => item.id === postId)!;
  const user = users.find((item) => item.id === userId)!;
  const createdAt = commentFaker.date.between({ from: new Date(post.createdAt), to: new Date('2026-05-19T00:00:00.000Z') });
  const updatedAt = commentFaker.date.between({ from: createdAt, to: new Date('2026-05-19T00:00:00.000Z') });

  return {
    id,
    postId: post.id,
    todoId,
    userId: user.id,
    body: commentFaker.lorem.sentences({ min: 1, max: 3 }),
    status: commentFaker.helpers.arrayElement(commentStatuses),
    author: {
      id: user.id,
      name: user.name,
      username: user.username,
      avatar: user.avatar,
    },
    post: {
      id: post.id,
      title: post.title,
      slug: post.slug,
    },
    reactions: {
      like: commentFaker.number.int({ min: 0, max: 80 }),
      love: commentFaker.number.int({ min: 0, max: 20 }),
    },
    tags: commentFaker.helpers.arrayElements(commentTags, { min: 1, max: 3 }),
    metadata: {
      edited: commentFaker.datatype.boolean({ probability: 0.2 }),
      pinned: commentFaker.datatype.boolean({ probability: 0.05 }),
      reported: commentFaker.datatype.boolean({ probability: 0.08 }),
    },
    createdAt: createdAt.toISOString(),
    updatedAt: updatedAt.toISOString(),
  };
}

export const comments: Comment[] = Array.from({ length: totalComments }, (_, index) => createComment(index + 1));
