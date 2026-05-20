import type { User } from '@/types/user.type';
import { Faker, base, en } from '@faker-js/faker';

const userFaker = new Faker({
  locale: [en, base],
  seed: 20260519,
});

userFaker.setDefaultRefDate('2026-05-19T00:00:00.000Z');

const userRoles = ['admin', 'writer', 'editor'] as const;
const userStatuses = ['active', 'inactive', 'pending'] as const;
const themes = ['dark', 'light'] as const;
const languages = ['en', 'es', 'pt'] as const;
const userTags = ['frontend', 'backend', 'react', 'astro', 'typescript', 'node', 'design', 'testing'] as const;

function createUser(id: number): User {
  const firstName = userFaker.person.firstName();
  const lastName = userFaker.person.lastName();
  const username = userFaker.internet.username({ firstName, lastName }).toLowerCase();
  const createdAt = userFaker.date.past({ years: 2 });
  const updatedAt = userFaker.date.between({ from: createdAt, to: new Date('2026-05-19T00:00:00.000Z') });

  return {
    id,
    name: `${firstName} ${lastName}`,
    username,
    email: userFaker.internet.email({ firstName, lastName }).toLowerCase(),
    phone: userFaker.phone.number(),
    website: userFaker.internet.domainName(),

    avatar: userFaker.image.avatar(),
    coverImage: `https://picsum.photos/1200/400?random=${id}`,

    bio: userFaker.person.bio(),
    role: userFaker.helpers.arrayElement(userRoles),
    status: userFaker.helpers.arrayElement(userStatuses),

    company: {
      name: userFaker.company.name(),
      department: userFaker.commerce.department(),
      jobTitle: userFaker.person.jobTitle(),
    },

    address: {
      street: userFaker.location.streetAddress(),
      suite: userFaker.location.secondaryAddress(),
      city: userFaker.location.city(),
      zipcode: userFaker.location.zipCode(),
      country: userFaker.location.country(),
      geo: {
        lat: String(userFaker.location.latitude()),
        lng: String(userFaker.location.longitude()),
      },
    },

    socialLinks: {
      twitter: `https://twitter.com/${username}`,
      github: `https://github.com/${username}`,
      linkedin: `https://linkedin.com/in/${username}`,
    },

    preferences: {
      theme: userFaker.helpers.arrayElement(themes),
      language: userFaker.helpers.arrayElement(languages),
      notifications: userFaker.datatype.boolean(),
    },

    stats: {
      posts: userFaker.number.int({ min: 1, max: 120 }),
      comments: userFaker.number.int({ min: 0, max: 600 }),
      todosCompleted: userFaker.number.int({ min: 0, max: 200 }),
      followers: userFaker.number.int({ min: 0, max: 15000 }),
      following: userFaker.number.int({ min: 0, max: 3000 }),
    },

    tags: userFaker.helpers.arrayElements(userTags, { min: 2, max: 4 }),
    createdAt: createdAt.toISOString(),
    updatedAt: updatedAt.toISOString(),
  };
}

export const users: User[] = Array.from({ length: 50 }, (_, index) => createUser(index + 1));
