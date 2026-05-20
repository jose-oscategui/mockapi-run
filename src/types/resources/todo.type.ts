export interface Todo {
  id: number
  userId: number
  title: string
  description: string
  completed: boolean
  status: string
  priority: string
  category: string
  tags: string[]
  dueDate: string
  estimatedHours: number
  progress: number
  assignedTo: AssignedTo
  checklist: Checklist[]
  attachments: Attachment[]
  stats: Stats
  relatedTodoIds: number[]
  metadata: Metadata
  createdAt: string
  updatedAt: string
  completedAt: any
}

interface AssignedTo {
  id: number
  name: string
  username: string
  avatar: string
}

interface Checklist {
  id: number
  title: string
  completed: boolean
}

interface Attachment {
  id: number
  name: string
  size: string
}

interface Stats {
  comments: number
  activityLogs: number
}

interface Metadata {
  archived: boolean
  pinned: boolean
}
