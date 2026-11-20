export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Studio Headphones',
    category: 'Audio',
    price: 89.99,
    description: 'Rich, balanced sound and a comfortable fit for long listening sessions.',
    image: '/headphones.jpg',
  },
  {
    id: 2,
    name: 'Portable Speaker',
    category: 'Audio',
    price: 59.5,
    description: 'A compact wireless speaker made for music at home or on the go.',
    image: '/speaker.jpg',
  },
  {
    id: 3,
    name: 'Everyday Backpack',
    category: 'Accessories',
    price: 74,
    description: 'A durable, thoughtfully organized backpack for work and weekends.',
    image: '/backpack.jpg',
  },
  {
    id: 4,
    name: 'Ceramic Desk Lamp',
    category: 'Home',
    price: 42.99,
    description: 'Warm, adjustable light with a simple ceramic finish for your desk.',
    image: '/lamp.jpg',
  },
  {
    id: 5,
    name: 'Insulated Bottle',
    category: 'Accessories',
    price: 28,
    description: 'Keep your drink at the right temperature throughout the day.',
    image: '/bottle.jpg',
  },
  {
    id: 6,
    name: 'Linen Throw',
    category: 'Home',
    price: 65,
    description: 'A soft, breathable throw that brings a relaxed feel to any room.',
    image: '/throw.jpg',
  },
  {
    id: 7,
    name: 'Wireless Keyboard',
    category: 'Tech',
    price: 99,
    description: 'A slim wireless keyboard with a satisfying, quiet typing feel.',
    image: '/keyboard.jpg',
  },
  {
    id: 8,
    name: 'Smart Watch',
    category: 'Tech',
    price: 149.99,
    description: 'A versatile everyday watch for activity tracking and notifications.',
    image: '/watch.jpg',
  },
];
