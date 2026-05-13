export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'non-coffee' | 'pastry' | 'signature';
  price: string;
  rating: number;
  description: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  size: 'small' | 'medium' | 'large';
}

export const MENU_ITEMS: MenuItem[] = [
  // Coffee
  {
    id: 'c1',
    name: 'Aetheria Reserve Geisha',
    category: 'coffee',
    price: 'Rp 85.000',
    rating: 4.9,
    description: 'Panama Geisha pour-over with notes of jasmine, bergamot, and white peach. Hand-brewed with precision.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
    tags: ['Single Origin', 'Manual Brew', 'Light Roast']
  },
  {
    id: 'c2',
    name: 'Kinetic Espresso Velvet',
    category: 'coffee',
    price: 'Rp 48.000',
    rating: 4.8,
    description: 'Double ristretto shot infused with silky Madagascar vanilla bean crema and edible 24k gold flakes.',
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=800&auto=format&fit=crop',
    tags: ['Signature', 'Espresso', 'Creamy']
  },
  {
    id: 'c3',
    name: 'Smoked Butterscotch Latte',
    category: 'coffee',
    price: 'Rp 55.000',
    rating: 4.9,
    description: 'Artisan espresso combined with house-smoked butterscotch, steamed oat milk, and a pinch of Himalayan pink salt.',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop',
    tags: ['Best Seller', 'Sweet', 'Warm']
  },
  {
    id: 'c4',
    name: 'Tokyo Cold Drip Cloud',
    category: 'coffee',
    price: 'Rp 52.000',
    rating: 4.7,
    description: '14-hour Kyoto style slow drip single origin Ethiopia, topped with fluffy salted caramel cold foam.',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop',
    tags: ['Cold Brew', 'Refreshing', 'Intense']
  },

  // Non-Coffee
  {
    id: 'nc1',
    name: 'Uji Ceremonial Matcha Mousse',
    category: 'non-coffee',
    price: 'Rp 62.000',
    rating: 5.0,
    description: 'Whisked ceremonial grade Uji matcha layered with velvety steamed almond milk and pure acacia honey.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=800&auto=format&fit=crop',
    tags: ['Matcha', 'Japanese', 'Organic']
  },
  {
    id: 'nc2',
    name: 'Valrhona Dark Truffle Cocoa',
    category: 'non-coffee',
    price: 'Rp 58.000',
    rating: 4.8,
    description: 'Luxurious 72% Valrhona dark chocolate melted into organic whole milk, torched marshmallow meringue.',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop',
    tags: ['Chocolate', 'Indulgent', 'Rich']
  },
  {
    id: 'nc3',
    name: 'Hojicha Roasted Latte',
    category: 'non-coffee',
    price: 'Rp 50.000',
    rating: 4.7,
    description: 'Earthy Japanese roasted green tea latte with a soothing, comforting aroma and subtle nutty undertones.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop',
    tags: ['Hojicha', 'Low Caffeine', 'Comfort']
  },

  // Pastry
  {
    id: 'p1',
    name: 'Truffle Butter Croissant',
    category: 'pastry',
    price: 'Rp 42.000',
    rating: 4.9,
    description: 'Flaky French butter croissant injected with black truffle cream and dusted with savory pecorino crust.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop',
    tags: ['Savory', 'Fresh Baked', 'Premium']
  },
  {
    id: 'p2',
    name: 'Basque Burnt Cheesecake',
    category: 'pastry',
    price: 'Rp 55.000',
    rating: 4.9,
    description: 'Caramelized dark outer crust giving way to an ultra-creamy, molten vanilla and Madagascar cheese interior.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop',
    tags: ['Dessert', 'Creamy', 'Signature']
  },
  {
    id: 'p3',
    name: 'Raspberry Pistacho Tart',
    category: 'pastry',
    price: 'Rp 48.000',
    rating: 4.8,
    description: 'Buttery almond sablé tart shell filled with Sicilian pistachio ganache and topped with fresh organic raspberries.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop',
    tags: ['Fruity', 'Tart', 'Elegant']
  },

  // Signature
  {
    id: 's1',
    name: 'Cascara Sunset Fizz',
    category: 'signature',
    price: 'Rp 56.000',
    rating: 4.8,
    description: 'Coffee cherry infusion shaken with blood orange zest, rosemary syrup, and sparkling tonic water.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop',
    tags: ['Mocktail', 'Sparkling', 'Exotic']
  },
  {
    id: 's2',
    name: 'Botanical Cold Brew Tonic',
    category: 'signature',
    price: 'Rp 54.000',
    rating: 4.9,
    description: 'Ethiopian cold brew concentrate layered over elderflower artisanal tonic and garnished with dehydrated grapefruit.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop',
    tags: ['Mocktail', 'Bitter-Sweet', 'Citrus']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'The Slow Bar Roastery',
    category: 'Interior',
    image: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=1200&auto=format&fit=crop',
    size: 'large'
  },
  {
    id: 'g2',
    title: 'Precision Pour Over',
    category: 'Brewing',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop',
    size: 'medium'
  },
  {
    id: 'g3',
    title: 'Artisan Latte Art',
    category: 'Coffee',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop',
    size: 'small'
  },
  {
    id: 'g4',
    title: 'Minimalist Scandinavian Seating',
    category: 'Ambience',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop',
    size: 'large'
  },
  {
    id: 'g5',
    title: 'Freshly Baked Croissants',
    category: 'Pastry',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop',
    size: 'small'
  },
  {
    id: 'g6',
    title: 'Sunset at the Coffee Bar',
    category: 'Ambience',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1000&auto=format&fit=crop',
    size: 'medium'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Natasha Wilona',
    role: 'Food & Lifestyle Influencer',
    comment: 'Tempat paling aesthetic di kota! Vibe ala Tokyo minimalist tapi hangat banget. Geisha pour-over nya juara dan pastrynya lumer di mulut. Totally viral-worthy!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    date: '2 hari lalu'
  },
  {
    id: 't2',
    name: 'Kevin Sanjaya',
    role: 'Tech Startup Founder',
    comment: 'Sangat cocok untuk WFC atau meeting santai bareng investor. Musik ambiancenya calming, kopinya strong dan premium. Pelayanan ramah banget.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    date: '1 minggu lalu'
  },
  {
    id: 't3',
    name: 'Amanda Rawles',
    role: 'Fashion Designer',
    comment: 'Interior designnya beneran level internasional. Spot fotonya banyak banget dan lightingnya bikin muka glowing di kamera. Will definitely come back for the Truffle Croissant!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop',
    date: '3 minggu lalu'
  }
];
