export interface User {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
  avatar: string
  coverImage: string
  bio: string
  role: string
  status: string
  company: Company
  address: Address
  socialLinks: SocialLinks
  preferences: Preferences
  stats: Stats
  tags: string[]
  createdAt: string
  updatedAt: string
}

interface Company {
  name: string
  department: string
  jobTitle: string
}

interface Address {
  street: string
  suite: string
  city: string
  zipcode: string
  country: string
  geo: Geo
}

interface Geo {
  lat: string
  lng: string
}

interface SocialLinks {
  twitter: string
  github: string
  linkedin: string
}

interface Preferences {
  theme: string
  language: string
  notifications: boolean
}

interface Stats {
  posts: number
  comments: number
  todosCompleted: number
  followers: number
  following: number
}
