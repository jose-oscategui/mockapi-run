import type { Post } from '@/types/resources/post.type';
import { Faker, base, en } from '@faker-js/faker';
import { users } from '@/mocks/resources/users.mock';

const postFaker = new Faker({
  locale: [en, base],
  seed: 20260520,
});

postFaker.setDefaultRefDate('2026-05-19T00:00:00.000Z');

const postCategories = ['backend', 'frontend', 'devops', 'testing', 'design'] as const;
const postTags = ['api', 'rest', 'nodejs', 'typescript', 'astro', 'testing', 'ux', 'performance', 'graphql', 'frontend'] as const;
const postTopics = [
  'REST APIs',
  'Type-safe frontends',
  'Mock APIs',
  'Design systems',
  'Testing strategy',
  'Astro architecture',
  'Developer experience',
  'API versioning',
] as const;

function createSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function createTitle(index: number): string {
  const topic = postFaker.helpers.arrayElement(postTopics);
  const action = postFaker.helpers.arrayElement(['Understanding', 'Designing', 'Scaling', 'Documenting', 'Improving']);

  return `${action} ${topic} ${index}`;
}

function createPost(id: number, author = postFaker.helpers.arrayElement(users)): Post {
  const title = createTitle(id);
  const body = postFaker.lorem.paragraphs({ min: 2, max: 4 }, '\n\n');
  const words = body.split(/\s+/).filter(Boolean).length;
  const createdAt = postFaker.date.past({ years: 1 });
  const updatedAt = postFaker.date.between({ from: createdAt, to: new Date('2026-05-19T00:00:00.000Z') });
  const publishedAt = postFaker.date.between({ from: createdAt, to: updatedAt });
  const likes = postFaker.number.int({ min: 20, max: 2500 });
  const comments = postFaker.number.int({ min: 0, max: 400 });
  const shares = postFaker.number.int({ min: 0, max: 120 });
  const bookmarks = postFaker.number.int({ min: 0, max: 500 });

  return {
    id,
    title,
    slug: createSlug(title),
    body,
    excerpt: postFaker.lorem.sentence({ min: 12, max: 20 }),
    coverImage: `https://picsum.photos/1200/600?random=${id + 100}`,
    published: true,
    featured: id <= 3,
    category: postFaker.helpers.arrayElement(postCategories),
    tags: postFaker.helpers.arrayElements(postTags, { min: 2, max: 4 }),
    userId: author.id,
    author: {
      id: author.id,
      name: author.name,
      username: author.username,
      avatar: author.avatar,
    },
    stats: {
      views: postFaker.number.int({ min: 500, max: 50000 }),
      likes,
      comments,
      shares,
      bookmarks,
    },
    seo: {
      metaTitle: title,
      metaDescription: postFaker.lorem.sentence({ min: 14, max: 22 }),
    },
    reactions: {
      like: likes,
      love: Math.max(0, Math.floor(likes * 0.3)),
      insightful: Math.max(0, Math.floor(comments * 0.4)),
    },
    reading: {
      minutes: Math.max(1, Math.ceil(words / 220)),
      words,
    },
    relatedPostIds: [],
    createdAt: createdAt.toISOString(),
    updatedAt: updatedAt.toISOString(),
    publishedAt: publishedAt.toISOString(),
  };
}

const guaranteedPosts = users.map((author, index) => createPost(index + 1, author));

const remainingPosts: Post[] = Array.from(
  { length: 100 - guaranteedPosts.length },
  (_, index) => createPost(guaranteedPosts.length + index + 1),
);

const basePosts: Post[] = [...guaranteedPosts, ...remainingPosts];

export const posts: Post[] = basePosts.map((post) => {
  const relatedPostIds = postFaker.helpers
    .shuffle(basePosts.map(({ id }) => id).filter((id) => id !== post.id))
    .slice(0, 3);

  return {
    ...post,
    relatedPostIds,
  };
});
