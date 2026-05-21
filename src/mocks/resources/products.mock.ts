import { companies } from '@/mocks/resources/companies.mock';
import type { Product } from '@/types/resources/product.type';
import { Faker, base, en } from '@faker-js/faker';

const productFaker = new Faker({
  locale: [en, base],
  seed: 20260523,
});

productFaker.setDefaultRefDate('2026-05-19T00:00:00.000Z');

const totalProducts = 150;
const productBrands = ['Keychron', 'NuPhy', 'Logitech', 'Corsair', 'Akko', 'Razer'] as const;
const productCategories = ['mechanical-keyboards', 'wireless-keyboards', 'gaming-keyboards', 'compact-keyboards'] as const;
const productStatuses = ['active', 'low-stock', 'out-of-stock'] as const;
const productTags = ['keyboard', 'wireless', 'hot-swappable', 'rgb', 'productivity', 'gaming', 'usb-c', 'bluetooth'] as const;
const productSeries = ['Studio', 'Air', 'Pro', 'Max', 'Lite', 'Edge'] as const;
const switchTypes = ['Red', 'Brown', 'Blue', 'Silver'] as const;
const colors = ['Black', 'White', 'Navy', 'Forest'] as const;
const connectivityOptions = ['Bluetooth 5.1, USB-C', '2.4GHz wireless, USB-C', 'Bluetooth 5.0, wired USB-C'] as const;
const layoutOptions = ['60%', '65%', '75%', 'TKL', 'Full size'] as const;
const batteryOptions = ['4,000 mAh', '5,000 mAh', '6,000 mAh', '7,200 mAh'] as const;
const sellerNames = ['Northwind Devices', 'Signal Boards', 'Pilot Input Co.', 'Summit Peripherals'] as const;

function createSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function createProduct(id: number): Product {
  const company = companies[(id - 1) % companies.length];
  const brand = productBrands[(id - 1) % productBrands.length];
  const series = productSeries[(id - 1) % productSeries.length];
  const category = productCategories[(id - 1) % productCategories.length];
  const layout = layoutOptions[(id - 1) % layoutOptions.length];
  const title = `${brand} ${series} ${layout} Keyboard ${id}`;
  const price = productFaker.number.float({ min: 79, max: 249, fractionDigits: 2 });
  const originalPrice = Number((price + productFaker.number.float({ min: 10, max: 70, fractionDigits: 2 })).toFixed(2));
  const stock = productFaker.number.int({ min: 0, max: 240 });
  const createdAt = productFaker.date.past({ years: 1 });
  const updatedAt = productFaker.date.between({ from: createdAt, to: new Date('2026-05-19T00:00:00.000Z') });
  const reviewCount = productFaker.number.int({ min: 12, max: 980 });
  const sellerId = ((id - 1) % sellerNames.length) + 1;

  return {
    id,
    companyId: company.id,
    title,
    slug: createSlug(title),
    description: productFaker.lorem.paragraphs({ min: 2, max: 3 }, '\n\n'),
    shortDescription: productFaker.lorem.sentence({ min: 10, max: 16 }),
    sku: `KB-${String(id).padStart(4, '0')}`,
    brand,
    category,
    tags: productFaker.helpers.arrayElements(productTags, { min: 3, max: 5 }),
    price,
    originalPrice,
    currency: 'USD',
    stock,
    status: stock === 0 ? 'out-of-stock' : stock < 20 ? 'low-stock' : productStatuses[0],
    featured: id <= 8,
    rating: {
      average: productFaker.number.float({ min: 3.8, max: 5, fractionDigits: 1 }),
      reviews: reviewCount,
    },
    images: Array.from({ length: 3 }, (_, imageIndex) => `https://picsum.photos/1200/900?random=${id + 300 + imageIndex}`),
    thumbnail: `https://picsum.photos/600/600?random=${id + 900}`,
    specifications: {
      connectivity: productFaker.helpers.arrayElement(connectivityOptions),
      layout,
      battery: productFaker.helpers.arrayElement(batteryOptions),
      weight: `${productFaker.number.int({ min: 580, max: 1180 })} g`,
    },
    dimensions: {
      width: `${productFaker.number.int({ min: 28, max: 44 })} cm`,
      height: `${productFaker.number.float({ min: 2.8, max: 4.8, fractionDigits: 1 })} cm`,
      depth: `${productFaker.number.int({ min: 11, max: 16 })} cm`,
    },
    shipping: {
      freeShipping: productFaker.datatype.boolean({ probability: 0.7 }),
      estimatedDays: productFaker.number.int({ min: 2, max: 9 }),
    },
    seller: {
      id: sellerId,
      name: sellerNames[sellerId - 1],
      verified: productFaker.datatype.boolean({ probability: 0.85 }),
    },
    variants: colors.map((color, variantIndex) => ({
      id: id * 10 + variantIndex + 1,
      color,
      switches: switchTypes[(id + variantIndex - 1) % switchTypes.length],
      stock: productFaker.number.int({ min: 0, max: 80 }),
    })),
    stats: {
      sales: productFaker.number.int({ min: 80, max: 12000 }),
      views: productFaker.number.int({ min: 1200, max: 95000 }),
      wishlist: productFaker.number.int({ min: 10, max: 3200 }),
    },
    seo: {
      metaTitle: `${title} | mockapi.run`,
      metaDescription: productFaker.lorem.sentence({ min: 14, max: 20 }),
    },
    relatedProductIds: [],
    createdAt: createdAt.toISOString(),
    updatedAt: updatedAt.toISOString(),
  };
}

const baseProducts: Product[] = Array.from({ length: totalProducts }, (_, index) => createProduct(index + 1));

export const products: Product[] = baseProducts.map((product) => ({
  ...product,
  relatedProductIds: productFaker.helpers
    .shuffle(baseProducts.map(({ id }) => id).filter((id) => id !== product.id))
    .slice(0, 4),
}));
