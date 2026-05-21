import type { Company } from '@/types/resources/company.type';

const companiesSeed = [
  {
    name: 'Northstar Labs',
    legalName: 'Northstar Labs Inc.',
    description:
      'Builds API tooling and developer platform workflows for frontend teams shipping prototypes fast.',
    industry: 'developer-tools',
    size: '201-500',
    foundedYear: 2016,
    website: 'https://northstarlabs.dev',
    email: 'hello@northstarlabs.dev',
    phone: '+1-415-555-0101',
    verified: true,
    status: 'active',
    location: {
      country: 'United States',
      city: 'San Francisco',
      address: '410 Market Street',
      zipcode: '94105',
      geo: {
        lat: '37.7891',
        lng: '-122.4014',
      },
    },
    socialLinks: {
      twitter: 'https://x.com/northstarlabs',
      linkedin: 'https://linkedin.com/company/northstarlabs',
      github: 'https://github.com/northstarlabs',
    },
    stats: {
      employees: 248,
      followers: 18400,
      products: 30,
      openPositions: 6,
    },
    technologies: ['TypeScript', 'Astro', 'Node.js', 'PostgreSQL'],
    departments: ['Engineering', 'Developer Experience', 'Design'],
    headquarters: {
      timezone: 'America/Los_Angeles',
      language: 'English',
      currency: 'USD',
    },
    owner: {
      name: 'Maya Chen',
      role: 'Founder & CEO',
    },
    seo: {
      metaTitle: 'Northstar Labs | mockapi.run',
      metaDescription: 'Northstar Labs company profile with products, hiring stats and public company details.',
    },
  },
  {
    name: 'Signal Forge',
    legalName: 'Signal Forge LLC',
    description:
      'Creates collaboration infrastructure for design systems, documentation workflows and product teams.',
    industry: 'collaboration-software',
    size: '51-200',
    foundedYear: 2019,
    website: 'https://signalforge.app',
    email: 'team@signalforge.app',
    phone: '+1-206-555-0135',
    verified: true,
    status: 'active',
    location: {
      country: 'United States',
      city: 'Seattle',
      address: '85 Pine Street',
      zipcode: '98101',
      geo: {
        lat: '47.6105',
        lng: '-122.3365',
      },
    },
    socialLinks: {
      twitter: 'https://x.com/signalforge',
      linkedin: 'https://linkedin.com/company/signalforge',
      github: 'https://github.com/signalforge',
    },
    stats: {
      employees: 132,
      followers: 9700,
      products: 30,
      openPositions: 4,
    },
    technologies: ['React', 'TypeScript', 'Storybook', 'Supabase'],
    departments: ['Product', 'Operations', 'Support'],
    headquarters: {
      timezone: 'America/Los_Angeles',
      language: 'English',
      currency: 'USD',
    },
    owner: {
      name: 'Jonas Reed',
      role: 'Managing Director',
    },
    seo: {
      metaTitle: 'Signal Forge | mockapi.run',
      metaDescription: 'Signal Forge company profile showing collaboration software operations and product output.',
    },
  },
  {
    name: 'Atlas Commerce',
    legalName: 'Atlas Commerce Group',
    description:
      'Operates commerce infrastructure for catalog search, pricing workflows and high-volume storefront teams.',
    industry: 'commerce-infrastructure',
    size: '501-1000',
    foundedYear: 2012,
    website: 'https://atlascommerce.io',
    email: 'contact@atlascommerce.io',
    phone: '+44-20-5550-0123',
    verified: true,
    status: 'active',
    location: {
      country: 'United Kingdom',
      city: 'London',
      address: '14 Bishopsgate',
      zipcode: 'EC2N 3AR',
      geo: {
        lat: '51.5155',
        lng: '-0.0821',
      },
    },
    socialLinks: {
      twitter: 'https://x.com/atlascommerce',
      linkedin: 'https://linkedin.com/company/atlascommerce',
      github: 'https://github.com/atlascommerce',
    },
    stats: {
      employees: 620,
      followers: 22600,
      products: 30,
      openPositions: 11,
    },
    technologies: ['Next.js', 'Go', 'Kafka', 'Elasticsearch'],
    departments: ['Platform', 'Revenue', 'Security'],
    headquarters: {
      timezone: 'Europe/London',
      language: 'English',
      currency: 'GBP',
    },
    owner: {
      name: 'Priya Malhotra',
      role: 'Chief Executive Officer',
    },
    seo: {
      metaTitle: 'Atlas Commerce | mockapi.run',
      metaDescription: 'Atlas Commerce company profile covering commerce infrastructure metrics and teams.',
    },
  },
  {
    name: 'Blueport Systems',
    legalName: 'Blueport Systems GmbH',
    description:
      'Develops observability and deployment tooling for distributed systems teams and internal platforms.',
    industry: 'platform-engineering',
    size: '201-500',
    foundedYear: 2014,
    website: 'https://blueport.systems',
    email: 'info@blueport.systems',
    phone: '+49-30-5550-0198',
    verified: true,
    status: 'active',
    location: {
      country: 'Germany',
      city: 'Berlin',
      address: '22 Friedrichstrasse',
      zipcode: '10117',
      geo: {
        lat: '52.5208',
        lng: '13.3878',
      },
    },
    socialLinks: {
      twitter: 'https://x.com/blueportsystems',
      linkedin: 'https://linkedin.com/company/blueportsystems',
      github: 'https://github.com/blueportsystems',
    },
    stats: {
      employees: 356,
      followers: 14300,
      products: 30,
      openPositions: 5,
    },
    technologies: ['Kubernetes', 'OpenTelemetry', 'Rust', 'Terraform'],
    departments: ['Infrastructure', 'Research', 'Customer Success'],
    headquarters: {
      timezone: 'Europe/Berlin',
      language: 'German',
      currency: 'EUR',
    },
    owner: {
      name: 'Lena Hoffmann',
      role: 'Co-Founder',
    },
    seo: {
      metaTitle: 'Blueport Systems | mockapi.run',
      metaDescription: 'Blueport Systems company profile with infrastructure tooling, hiring and public contact data.',
    },
  },
  {
    name: 'Cinder AI',
    legalName: 'Cinder AI Pte. Ltd.',
    description:
      'Ships AI-powered support workflows, structured knowledge tooling and automation systems for SaaS teams.',
    industry: 'ai-automation',
    size: '11-50',
    foundedYear: 2021,
    website: 'https://cinderai.dev',
    email: 'support@cinderai.dev',
    phone: '+65-5550-0117',
    verified: false,
    status: 'growing',
    location: {
      country: 'Singapore',
      city: 'Singapore',
      address: '18 Robinson Road',
      zipcode: '048547',
      geo: {
        lat: '1.2816',
        lng: '103.8507',
      },
    },
    socialLinks: {
      twitter: 'https://x.com/cinderai',
      linkedin: 'https://linkedin.com/company/cinderai',
      github: 'https://github.com/cinderai',
    },
    stats: {
      employees: 42,
      followers: 4100,
      products: 30,
      openPositions: 3,
    },
    technologies: ['Python', 'TypeScript', 'LangChain', 'Postgres'],
    departments: ['Applied AI', 'Growth', 'Customer Education'],
    headquarters: {
      timezone: 'Asia/Singapore',
      language: 'English',
      currency: 'SGD',
    },
    owner: {
      name: 'Adrian Tan',
      role: 'Founder',
    },
    seo: {
      metaTitle: 'Cinder AI | mockapi.run',
      metaDescription: 'Cinder AI company profile with AI automation product metrics and public team details.',
    },
  },
] as const;

function createSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export const companies: Company[] = companiesSeed.map((company, index) => ({
  id: index + 1,
  name: company.name,
  slug: createSlug(company.name),
  legalName: company.legalName,
  description: company.description,
  industry: company.industry,
  size: company.size,
  foundedYear: company.foundedYear,
  website: company.website,
  logo: `https://picsum.photos/seed/company-logo-${index + 1}/320/320`,
  coverImage: `https://picsum.photos/seed/company-cover-${index + 1}/1600/900`,
  email: company.email,
  phone: company.phone,
  verified: company.verified,
  status: company.status,
  location: company.location,
  socialLinks: company.socialLinks,
  stats: company.stats,
  technologies: [...company.technologies],
  departments: company.departments.map((name, departmentIndex) => ({
    id: (index + 1) * 100 + departmentIndex + 1,
    name,
  })),
  headquarters: company.headquarters,
  owner: {
    id: index + 1,
    name: company.owner.name,
    role: company.owner.role,
  },
  seo: company.seo,
  createdAt: `2025-0${Math.min(index + 1, 9)}-15T09:00:00.000Z`,
  updatedAt: `2026-05-1${index}T12:00:00.000Z`,
}));
