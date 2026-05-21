export interface Comment {
  id: number
  postId: number
  todoId: number | null
  productId: number | null
  companyId: number | null
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

interface Author {
  id: number
  name: string
  username: string
  avatar: string
}

interface Post {
  id: number
  title: string
  slug: string
}

interface Reactions {
  like: number
  love: number
}

interface Metadata {
  edited: boolean
  pinned: boolean
  reported: boolean
}
