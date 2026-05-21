export interface Product {
  id: number
  companyId: number
  title: string
  slug: string
  description: string
  shortDescription: string
  sku: string
  brand: string
  category: string
  tags: string[]
  price: number
  originalPrice: number
  currency: string
  stock: number
  status: string
  featured: boolean
  rating: Rating
  images: string[]
  thumbnail: string
  specifications: Specifications
  dimensions: Dimensions
  shipping: Shipping
  seller: Seller
  variants: Variant[]
  stats: Stats
  seo: Seo
  relatedProductIds: number[]
  createdAt: string
  updatedAt: string
}

interface Rating {
  average: number
  reviews: number
}

interface Specifications {
  connectivity: string
  layout: string
  battery: string
  weight: string
}

interface Dimensions {
  width: string
  height: string
  depth: string
}

interface Shipping {
  freeShipping: boolean
  estimatedDays: number
}

interface Seller {
  id: number
  name: string
  verified: boolean
}

interface Variant {
  id: number
  color: string
  switches: string
  stock: number
}

interface Stats {
  sales: number
  views: number
  wishlist: number
}

interface Seo {
  metaTitle: string
  metaDescription: string
}
