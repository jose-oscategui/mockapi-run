export interface Post {
  id: number
  title: string
  slug: string
  body: string
  excerpt: string
  coverImage: string
  published: boolean
  featured: boolean
  category: string
  tags: string[]
  userId: number
  author: Author
  stats: Stats
  seo: Seo
  reactions: Reactions
  reading: Reading
  relatedPostIds: number[]
  createdAt: string
  updatedAt: string
  publishedAt: string
}

interface Author {
  id: number
  name: string
  username: string
  avatar: string
}

interface Stats {
  views: number
  likes: number
  comments: number
  shares: number
  bookmarks: number
}

interface Seo {
  metaTitle: string
  metaDescription: string
}

interface Reactions {
  like: number
  love: number
  insightful: number
}

interface Reading {
  minutes: number
  words: number
}
