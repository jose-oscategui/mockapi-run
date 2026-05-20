import { posts } from '../mocks/posts.mock';

export const relations = {
  users: {
    posts: {
      collection: posts,
      foreignKey: 'userId',
    },
    // todos: {
    //   collection: todos,
    //   foreignKey: 'userId',
    // },
    // albums: {
    //   collection: albums,
    //   foreignKey: 'userId',
    // },
    // comments: {
    //   collection: comments,
    //   foreignKey: 'userId',
    // },
  },
  // posts: {
  //   comments: {
  //     collection: comments,
  //     foreignKey: 'postId',
  //   },
  // },
} as const;
