export interface Company {
  id: number
  name: string
  slug: string
  legalName: string
  description: string
  industry: string
  size: string
  foundedYear: number
  website: string
  logo: string
  coverImage: string
  email: string
  phone: string
  verified: boolean
  status: string
  location: Location
  socialLinks: SocialLinks
  stats: Stats
  technologies: string[]
  departments: Department[]
  headquarters: Headquarters
  owner: Owner
  seo: Seo
  createdAt: string
  updatedAt: string
}

interface Location {
  country: string
  city: string
  address: string
  zipcode: string
  geo: Geo
}

interface Geo {
  lat: string
  lng: string
}

interface SocialLinks {
  twitter: string
  linkedin: string
  github: string
}

interface Stats {
  employees: number
  followers: number
  products: number
  openPositions: number
}

interface Department {
  id: number
  name: string
}

interface Headquarters {
  timezone: string
  language: string
  currency: string
}

interface Owner {
  id: number
  name: string
  role: string
}

interface Seo {
  metaTitle: string
  metaDescription: string
}
