export interface Comment {
  id: number
  postId: number
  userId: number
  body: string
  status: string
  author: Author
  post: Post
  reactions: Reactions
  tags: string[]
  metadata: Metadata
  createdAt: string
  updatedAt: string
}

export interface Author {
  id: number
  name: string
  username: string
  avatar: string
}

export interface Post {
  id: number
  title: string
  slug: string
}

export interface Reactions {
  like: number
  love: number
}

export interface Metadata {
  edited: boolean
  pinned: boolean
  reported: boolean
}
