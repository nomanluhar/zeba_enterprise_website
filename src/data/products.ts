export interface Product {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  image: string;
  images: string[];
  description: string;
  shortDescription: string;
  price?: {
    min: number;
    max: number;
    currency: string;
    unit: string;
  };
  specifications: {
    [key: string]: string;
  };
  features: string[];
  certifications: string[];
  moq: string;
  leadTime: string;
  origin: string;
  packaging: string[];
  applications?: string[];
  nutritionalInfo?: {
    [key: string]: string;
  };
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  features: string[];
  productCount: number;
}

export const productCategories: ProductCategory[] = [
  {
    id: 'textiles',
    name: 'Textiles & Garments',
    slug: 'textiles-garments',
    description: 'High-quality fabrics, garments, and textile products manufactured with precision and care.',
    image: '/images/textiles/main-page-1.jpg',
    features: ['Premium Fabrics', 'Export Quality', 'Custom Designs', 'Bulk Orders'],
    productCount: 12
  },
  {
    id: 'leathers',
    name: 'Leather Products',
    slug: 'leather-products',
    description: 'Premium leather products crafted with precision and care.',
    image: '/images/leather/main-page-1.jpg',
    features: ['Genuine Leather', 'Handcrafted', 'Durable', 'Stylish Designs'],
    productCount: 18
  },
  {
    id: 'furniture',
    name: 'Furniture',
    slug: 'furniture',
    description: 'Elegant wooden and metal furniture combining traditional craftsmanship with modern designs.',
    image: '/images/furniture/main-page-1.jpg',
    features: ['Solid Wood', 'Custom Designs', 'Durable', 'Export Packaging'],
    productCount: 15
  },
  {
    id: 'imitation-jewellery',
    name: 'Imitation Jewellery',
    slug: 'imitation-jewellery',
    description: 'Trendy and stylish imitation jewellery crafted with precision and care.',
    image: '/images/imitation-jewellery/main-page-1.jpg',
    features: ['Trendy Designs', 'Lightweight', 'Affordable', 'Durable'],
    productCount: 25
  },
  {
    id: 'handicrafts',
    name: 'Handicrafts',
    slug: 'handicrafts',
    description: 'Traditional Indian handicrafts showcasing rich cultural heritage and artisan craftsmanship.',
    image: '/images/handicrafts/main-page-1.jpg',
    features: ['Handmade', 'Traditional Designs', 'Eco-Friendly', 'Cultural Authentic'],
    productCount: 18
  },
  {
    id: 'copper-brass-items',
    name: 'Copper & Brass Items',
    slug: 'copper-brass-items',
    description: 'Exquisite copper and brass items showcasing traditional craftsmanship.',
    image: '/images/copper-brass-items/main-page-1.jpg',
    features: ['Handcrafted', 'Durable', 'Antique Finish', 'Custom Designs'],
    productCount: 20
  },
  {
    id: 'packaging-products',
    name: 'Packaging Products',
    slug: 'packaging-products',
    description: 'High-quality packaging products designed to meet the needs of various industries.',
    image: '/images/packaging-products/main-page-1.jpg',
    features: ['Durable Materials', 'Custom Sizes', 'Eco-Friendly Options', 'Quality Assurance'],
    productCount: 25
  },
  {
  id: 'spices-food',
  name: 'Spices & Food Products',
  slug: 'spices-food-products',
  description: 'A wide range of Indian groceries, premium spices, aromatic teas & coffees, and natural food flavours — all sourced from trusted farms and producers to ensure authentic taste and quality.',
  image: '/images/spices-food-products/main-page-1.jpg',
  features: [
    'Groceries: Rice, Pulses & Dry Fruits',
    'Authentic Indian Spices',
    'Tea & Coffee Varieties',
    'Natural Food Flavours & Essences',
    'Farm-Sourced & Quality Tested'
  ],
  productCount: 25
}
];

export const products: Product[] = [
  // Spices & Food Products
  {
  id: 'groceries',
  name: 'Groceries',
  category: 'Food Products',
  categoryId: 'spices-food',
  image: '/images/hero-page-sliders/hero-1.jpg',
  images: ['/images/hero-page-sliders/hero-1.jpg', '/images/hero-page-sliders/hero-2.jpg', '/images/hero-page-sliders/hero-3.jpg'],
  shortDescription: 'Premium quality groceries including rice, wheat, pulses, dry fruits, and sweeteners.',
  description: 'Our Groceries collection features carefully sourced essentials such as Basmati rice, wheat flour, protein-rich pulses, and premium dry fruits. We also offer natural sweeteners like sugar and jaggery. These products are hygienically processed, ensuring freshness, taste, and nutritional value for households and businesses alike.',
  price: {
    min: 1,
    max: 100,
    currency: 'USD',
    unit: 'per kg / pack'
  },
  specifications: {
    'Products': 'Basmati Rice, Wheat Flour, Pulses, Dry Fruits, Sugar, Jaggery',
    'Quality': 'Premium grade, hygienically processed',
    'Packaging': 'Moisture-proof, food-safe packaging',
    'Shelf Life': '6–12 months'
  },
  features: [
    'Farm-fresh quality',
    'Nutrient-rich essentials',
    'Hygienically packed',
    'Bulk supply available'
  ],
  moq: '500 kg',
  leadTime: '15-20 days',
  origin: 'India',
  packaging: ['Plastic pouches', 'Jute bags', 'Custom bulk packaging'],
  applications: ['Households', 'Hotels & Restaurants', 'Retail Stores', 'Export supply'],
  certifications: ['FSSAI Certified', 'ISO 22000']
  },
  {
    id: 'spices',
    name: 'Spices',
    category: 'Food Products',
    categoryId: 'spices-food',
    image: '/images/hero-page-sliders/hero-1.jpg',
    images: ['/images/hero-page-sliders/hero-1.jpg', '/images/hero-page-sliders/hero-2.jpg', '/images/hero-page-sliders/hero-3.jpg'],
    shortDescription: 'Aromatic Indian spices including turmeric, chili, pepper, cumin, fennel, and garam masala.',
    description: 'Our Spices collection brings the rich flavors of India to your kitchen. From golden turmeric and fiery chili to aromatic black pepper, cumin, and fennel, every spice is handpicked and quality tested. We also offer blended spices like garam masala, perfect for enhancing traditional and modern recipes.',
    price: {
      min: 2,
      max: 80,
      currency: 'USD',
      unit: 'per kg / pack'
    },
    specifications: {
      'Products': 'Turmeric, Chili, Black Pepper, Cumin, Fennel, Garam Masala',
      'Form': 'Whole & Powdered',
      'Purity': '100% natural, no additives',
      'Shelf Life': '12–18 months'
    },
    features: [
      'Rich aroma & taste',
      '100% natural spices',
      'Quality tested & certified',
      'Export-ready packaging'
    ],
    moq: '200 kg',
    leadTime: '20-25 days',
    origin: 'India',
    packaging: ['Pouches', 'Glass jars', 'Bulk sacks'],
    applications: ['Cooking', 'Food processing', 'Export supply', 'Retail stores'],
    certifications: ['FSSAI Certified', 'ISO 9001', 'Organic Certification (available)']
  },
  {
    id: 'tea-coffee',
    name: 'Tea & Coffee',
    category: 'Food Products',
    categoryId: 'spices-food',
    image: '/images/hero-page-sliders/hero-1.jpg',
    images: ['/images/hero-page-sliders/hero-1.jpg', '/images/hero-page-sliders/hero-2.jpg', '/images/hero-page-sliders/hero-3.jpg'],
    shortDescription: 'Finest Indian teas and aromatic coffees sourced from renowned plantations.',
    description: 'Our Tea & Coffee collection includes Assam and Darjeeling teas, soothing green tea, flavorful masala chai, and instant coffee. Each product is sourced from reputed plantations and processed to preserve its natural aroma and taste. Perfect for both retail and wholesale, our range caters to everyday consumption as well as premium gifting.',
    price: {
      min: 3,
      max: 120,
      currency: 'USD',
      unit: 'per pack'
    },
    specifications: {
      'Products': 'Assam Tea, Darjeeling Tea, Green Tea, Masala Chai, Instant Coffee',
      'Quality': 'Premium plantation-sourced',
      'Packaging': 'Sealed foil pouches, tins, or bulk cartons',
      'Shelf Life': '12–24 months'
    },
    features: [
      'Strong aroma & flavor',
      'Direct from plantations',
      'Variety of blends',
      'Retail & gifting options'
    ],
    moq: '1000 packs',
    leadTime: '20-30 days',
    origin: 'India',
    packaging: ['Foil pouches', 'Tea tins', 'Bulk packaging'],
    applications: ['Retail stores', 'Hotels & Cafes', 'Export markets', 'Gifting'],
    certifications: ['FSSAI Certified', 'ISO 22000']
  },
  {
    id: 'food-flavours',
    name: 'Food Flavours & Essence',
    category: 'Food Products',
    categoryId: 'spices-food',
    image: '/images/hero-page-sliders/hero-1.jpg',
    images: ['/images/hero-page-sliders/hero-1.jpg', '/images/hero-page-sliders/hero-2.jpg', '/images/hero-page-sliders/hero-3.jpg'],
    shortDescription: 'Concentrated food flavors and essences including vanilla, chocolate, fruit, and spice blends.',
    description: 'Our Food Flavours & Essences are crafted to enhance bakery, confectionery, beverages, and culinary creations. The range includes classic vanilla, chocolate, and fruit flavors like pineapple, mango, and strawberry, along with traditional Indian options such as kesar, rose, pan, and elaichi. These high-quality essences are food-grade, long-lasting, and available in customizable packaging.',
    price: {
      min: 1,
      max: 50,
      currency: 'USD',
      unit: 'per bottle'
    },
    specifications: {
      'Products': 'Vanilla, Chocolate, Pineapple, Mango, Kesar, Rose, Strawberry, Pan, Elaichi',
      'Form': 'Liquid essence, concentrated',
      'Quality': 'Food-grade, long shelf life',
      'Shelf Life': '18–24 months'
    },
    features: [
      'Intense aroma & flavor',
      'Wide variety of options',
      'Food-grade quality',
      'Custom packaging available'
    ],
    moq: '500 bottles',
    leadTime: '20-25 days',
    origin: 'India',
    packaging: ['Glass bottles', 'Plastic bottles', 'Bulk drums'],
    applications: ['Bakeries', 'Confectionery', 'Beverages', 'Food processing'],
    certifications: ['FSSAI Certified', 'ISO 22000']
  },

  // Textiles & Garments
  {
    id: 'bed-sheets',
    name: 'Premium Bed Sheets',
    category: 'Textiles & Garments',
    categoryId: 'textiles',
    image: '/images/hero-page-sliders/hero-1.jpg',
    images: ['/images/hero-page-sliders/hero-1.jpg', '/images/hero-page-sliders/hero-2.jpg', '/images/hero-page-sliders/hero-3.jpg'],
    shortDescription: '100% premium bed sheets with superior comfort and durability.',
    description: 'Our Premium Bed Sheets are crafted from the finest 100% cotton fibers, offering exceptional softness, breathability, and durability. Available in various sizes and colors, these bed sheets provide ultimate comfort for a perfect night\'s sleep.',
    price: {
      min: 15,
      max: 35,
      currency: 'USD',
      unit: 'per set'
    },
    specifications: {
      'Material': '100% Cotton',
      'Thread Count': '200-400 TC',
      'Weave': 'Percale/Sateen',
      'Sizes': 'Single, Double, Queen, King',
      'Colors': '20+ color options',
      'Shrinkage': 'Pre-shrunk, Max 3%',
    },
    features: [
      '100% premium',
      'Color fast',
      'Easy care',
      'Hypoallergenic',
      'Durable construction'
    ],
    certifications: ['OEKO-TEX Standard 100', 'GOTS (Available)', 'ISO 9001'],
    moq: '500 sets',
    leadTime: '20-30 days',
    origin: 'India',
    packaging: ['PVC bags', 'Gift boxes', 'Custom packaging available'],
    applications: ['Home textiles', 'Hotels', 'Hospitals', 'Retail chains']
  },
  {
  id: 'towels',
  name: 'Premium Towels',
  category: 'Textiles & Garments',
  categoryId: 'textiles',
  image: '/images/hero-page-sliders/hero-2.jpg',
  images: ['/images/hero-page-sliders/hero-2.jpg', '/images/hero-page-sliders/hero-3.jpg', '/images/hero-page-sliders/hero-1.jpg'],
  shortDescription: 'Soft, absorbent towels for bath, face, hand, gym, and kids.',
  description: 'Our Premium Towels are made from 100% cotton with superior absorbency and softness. Available in bath, hand, face, gym, and kids’ sizes, these towels are durable, quick-drying, and gentle on the skin.',
  price: {
    min: 5,
    max: 20,
    currency: 'USD',
    unit: 'per piece'
  },
  specifications: {
    'Material': '100% Cotton / Blended options',
    'GSM': '350-700 GSM',
    'Sizes': 'Face, Hand, Bath, Gym, Kids',
    'Colors': '30+ color options',
    'Shrinkage': 'Pre-shrunk, Max 3%',
  },
  features: [
    'Highly absorbent',
    'Soft & fluffy texture',
    'Quick-dry',
    'Durable stitching',
    'Skin-friendly'
  ],
  certifications: ['OEKO-TEX Standard 100', 'ISO 9001'],
  moq: '1000 pieces',
  leadTime: '15-25 days',
  origin: 'India',
  packaging: ['Polybags', 'Gift sets', 'Custom packaging available'],
  applications: ['Hotels', 'Gyms', 'Homes', 'Retail chains']
  },
  {
    id: 'ready-made-garments',
    name: 'Ready-Made Garments',
    category: 'Textiles & Garments',
    categoryId: 'textiles',
    image: '/images/hero-page-sliders/hero-3.jpg',
    images: ['/images/hero-page-sliders/hero-3.jpg', '/images/hero-page-sliders/hero-1.jpg', '/images/hero-page-sliders/hero-2.jpg'],
    shortDescription: 'Trendy and comfortable ready-made garments for men and women.',
    description: 'Our collection of Ready-Made Garments includes T-shirts, shirts, jeans, kurtis, pajamas, and hoodies. Designed with style, comfort, and durability in mind, these garments are crafted using high-quality fabrics and modern stitching techniques.',
    price: {
      min: 8,
      max: 40,
      currency: 'USD',
      unit: 'per piece'
    },
    specifications: {
      'Material': 'Cotton, Polyester, Blends, Denim',
      'Sizes': 'XS to XXL',
      'Colors': 'Wide range available',
      'Styles': 'Casual, Formal, Ethnic, Sportswear',
    },
    features: [
      'Trendy designs',
      'Durable fabrics',
      'Comfort fit',
      'Color fast',
      'Machine washable'
    ],
    certifications: ['ISO 9001', 'GOTS (Available)'],
    moq: '1000 pieces',
    leadTime: '20-30 days',
    origin: 'India',
    packaging: ['Polybags', 'Hangers with covers', 'Custom packaging available'],
    applications: ['Retail stores', 'E-commerce brands', 'Corporate uniforms']
  },
  {
    id: 'kids-baby-clothing',
    name: 'Kids & Baby Clothing',
    category: 'Textiles & Garments',
    categoryId: 'textiles',
    image: '/images/hero-page-sliders/hero-1.jpg',
    images: ['/images/hero-page-sliders/hero-1.jpg', '/images/hero-page-sliders/hero-2.jpg', '/images/hero-page-sliders/hero-3.jpg'],
    shortDescription: 'Soft, safe, and stylish clothing for babies and kids.',
    description: 'Our Kids & Baby Clothing range includes baby rompers, frocks, T-shirts, shorts, and uniforms. Crafted from soft, breathable, and skin-friendly fabrics, these clothes ensure maximum comfort and safety for children.',
    price: {
      min: 5,
      max: 25,
      currency: 'USD',
      unit: 'per piece'
    },
    specifications: {
      'Material': '100% Cotton / Organic Cotton',
      'Sizes': 'Newborn to 14 years',
      'Colors': 'Assorted prints and solids',
      'Safety': 'Nickel-free buttons, Non-toxic dyes'
    },
    features: [
      'Soft & breathable fabrics',
      'Skin-friendly',
      'Durable stitching',
      'Trendy prints',
      'Easy care'
    ],
    certifications: ['OEKO-TEX Standard 100', 'GOTS (Available)'],
    moq: '500 pieces',
    leadTime: '15-25 days',
    origin: 'India',
    packaging: ['Polybags', 'Gift sets', 'Custom packaging available'],
    applications: ['Retail chains', 'E-commerce brands', 'Baby stores', 'Schools (uniforms)']
  },
  {
    id: 'gym-sportswear',
    name: 'Gym & Sportswear',
    category: 'Textiles & Garments',
    categoryId: 'textiles',
    image: '/images/hero-page-sliders/hero-2.jpg',
    images: ['/images/hero-page-sliders/hero-2.jpg', '/images/hero-page-sliders/hero-3.jpg', '/images/hero-page-sliders/hero-1.jpg'],
    shortDescription: 'High-performance sportswear for gym, yoga, and outdoor activities.',
    description: 'Our Gym & Sportswear collection includes dry-fit T-shirts, shorts, joggers, leggings, and yoga wear. Designed for comfort, flexibility, and durability, these garments are made with breathable fabrics and moisture-wicking technology.',
    price: {
      min: 10,
      max: 45,
      currency: 'USD',
      unit: 'per piece'
    },
    specifications: {
      'Material': 'Polyester, Spandex, Nylon Blends',
      'Sizes': 'XS to XXL',
      'Colors': 'Custom colors and prints available',
      'Technology': 'Moisture-wicking, Quick-dry, Stretchable'
    },
    features: [
      'Breathable fabric',
      'Flexible & stretchable',
      'Moisture control',
      'Durable construction',
      'Stylish designs'
    ],
    certifications: ['ISO 9001', 'OEKO-TEX Standard 100'],
    moq: '800 pieces',
    leadTime: '20-30 days',
    origin: 'India',
    packaging: ['Polybags', 'Custom packaging available'],
    applications: ['Gyms', 'Sports clubs', 'Retail brands', 'E-commerce stores']
  },

  //Leather Products
  {
    id: 'leather-footwear',
    name: 'Leather Footwear',
    category: 'Leather Products',
    categoryId: 'leathers',
    image: '/images/hero-page-sliders/hero-1.jpg',
    images: ['/images/hero-page-sliders/hero-1.jpg', '/images/hero-page-sliders/hero-2.jpg', '/images/hero-page-sliders/hero-3.jpg'],
    shortDescription: 'Premium leather footwear including formal, casual, sandals, and boots.',
    description: 'Our Leather Footwear collection features handcrafted formal shoes, casual wear, sandals, and boots made from premium leather. Designed for durability, comfort, and timeless style, they cater to diverse fashion and utility needs.',
    price: {
      min: 30,
      max: 120,
      currency: 'USD',
      unit: 'per pair'
    },
    specifications: {
      'Material': 'Genuine Leather / PU Leather (on request)',
      'Types': 'Formal, Casual, Sandals, Boots',
      'Sizes': 'Standard EU/US/UK sizes',
      'Colors': 'Black, Brown, Tan, Custom shades',
      'Finish': 'Matte, Glossy, Textured'
    },
    features: ['Durable sole', 'Comfort fit', 'Handcrafted quality', 'Elegant design'],
    moq: '300 pairs',
    leadTime: '25-35 days',
    origin: 'India',
    packaging: ['Individual shoe boxes', 'Custom packaging available'],
    applications: ['Formal wear', 'Casual wear', 'Outdoor wear'],
    certifications: []
  },
  {
    id: 'leather-accessories',
    name: 'Leather Accessories',
    category: 'Leather Products',
    categoryId: 'leathers',
    image: '/images/hero-page-sliders/hero-1.jpg',
    images: ['/images/hero-page-sliders/hero-1.jpg', '/images/hero-page-sliders/hero-2.jpg', '/images/hero-page-sliders/hero-3.jpg'],
    shortDescription: 'Elegant and durable leather wallets, belts, purses, gloves, and caps.',
    description: 'Our Leather Accessories collection includes finely crafted wallets, purses, belts, gloves, and caps. These accessories combine functionality with style, making them suitable for both daily use and premium gifting.',
    price: {
      min: 10,
      max: 80,
      currency: 'USD',
      unit: 'per piece'
    },
    specifications: {
      'Material': 'Genuine Leather / PU Leather',
      'Products': 'Wallets, Purses, Belts, Gloves, Caps',
      'Colors': 'Classic Black, Brown, Tan',
      'Sizes': 'Standard sizes available'
    },
    features: ['Compact & stylish', 'Durable construction', 'Hand-stitched finish', 'Custom branding available'],
    moq: '500 pieces',
    leadTime: '20-30 days',
    origin: 'India',
    packaging: ['Gift boxes', 'Custom branding'],
    applications: ['Corporate gifting', 'Retail chains', 'Daily essentials'],
    certifications: []
  },
  {
    id: 'leather-apparel',
    name: 'Leather Apparel',
    category: 'Leather Products',
    categoryId: 'leathers',
     image: '/images/hero-page-sliders/hero-1.jpg',
    images: ['/images/hero-page-sliders/hero-1.jpg', '/images/hero-page-sliders/hero-2.jpg', '/images/hero-page-sliders/hero-3.jpg'],
    shortDescription: 'Premium leather jackets for men and women, including biker jackets.',
    description: 'Our Leather Apparel line includes fashionable and durable jackets for men and women, including stylish biker jackets. Made from high-quality leather, these garments combine comfort, protection, and trend-setting design.',
    price: {
      min: 60,
      max: 200,
      currency: 'USD',
      unit: 'per piece'
    },
    specifications: {
      'Material': 'Genuine Leather',
      'Types': 'Men & Women Jackets, Biker Jackets',
      'Sizes': 'S, M, L, XL, Custom',
      'Colors': 'Black, Brown, Tan'
    },
    features: ['Stylish & protective', 'Durable stitching', 'Comfortable fit', 'Timeless design'],
    moq: '200 pieces',
    leadTime: '30-45 days',
    origin: 'India',
    packaging: ['Individual garment covers', 'Custom branding available'],
    applications: ['Fashion retail', 'Winter wear', 'Motorbike gear'],
    certifications: []
  },
  {
    id: 'leather-corporate-gifting',
    name: 'Leather Corporate Gifting',
    category: 'Leather Products',
    categoryId: 'leathers',
    image: '/images/hero-page-sliders/hero-1.jpg',
    images: ['/images/hero-page-sliders/hero-1.jpg', '/images/hero-page-sliders/hero-2.jpg', '/images/hero-page-sliders/hero-3.jpg'],
    shortDescription: 'Elegant leather gifting solutions including diaries, laptop bags, and card holders.',
    description: 'Our Leather Corporate Gifting range offers premium diaries, laptop bags, and card holders crafted from fine leather. Ideal for businesses, events, and corporate giveaways, these items add a touch of class and long-lasting value.',
    price: {
      min: 15,
      max: 100,
      currency: 'USD',
      unit: 'per piece'
    },
    specifications: {
      'Material': 'Genuine Leather / PU Leather',
      'Products': 'Leather Diary, Laptop Bag, Card Holders',
      'Colors': 'Black, Brown, Tan, Custom shades',
      'Sizes': 'Standard & custom sizes available'
    },
    features: ['Premium gifting choice', 'Durable & practical', 'Elegant designs', 'Custom branding available'],
    moq: '500 pieces',
    leadTime: '20-35 days',
    origin: 'India',
    packaging: ['Gift boxes', 'Corporate branding available'],
    applications: ['Corporate gifting', 'Events & conferences', 'Premium giveaways'],
    certifications: []
  },

  // Handicrafts
  {
    id: 'handicrafts-general',
    name: 'Traditional Handicrafts',
    category: 'Handicrafts',
    categoryId: 'handicrafts',
    image: '/images/hero-page-sliders/hero-1.jpg',
    images: ['/images/hero-page-sliders/hero-1.jpg', '/images/hero-page-sliders/hero-2.jpg', '/images/hero-page-sliders/hero-3.jpg'],
    shortDescription: 'Artisan-crafted handicrafts including bamboo bottles, wall hangings, lamps, clocks, vases, and toys.',
    description: 'Our Traditional Handicrafts collection showcases the artistry of skilled Indian craftsmen. The range includes bamboo bottles, wall hangings, decorative lamps, handcrafted clocks, painted vases, and wooden toys. Each piece is uniquely designed, blending cultural heritage with functional use.',
    price: {
      min: 10,
      max: 150,
      currency: 'USD',
      unit: 'per piece'
    },
    specifications: {
      'Material': 'Bamboo, Wood, Clay, Natural Paints',
      'Products': 'Bamboo Bottles, Wall Hangings, Lamps, Clocks, Painted Vases, Wooden Toys',
      'Finish': 'Hand-painted, Natural Polish',
      'Durability': 'Eco-friendly & long-lasting'
    },
    features: [
      'Unique artisan designs',
      'Handcrafted with care',
      'Decorative & functional',
      'Cultural heritage touch'
    ],
    moq: '100 pieces',
    leadTime: '25-40 days',
    origin: 'India',
    packaging: ['Protective wrapping', 'Eco-friendly boxes'],
    applications: ['Home décor', 'Gifting', 'Souvenirs', 'Retail stores'],
    certifications: []
  },
  {
    id: 'handicrafts-eco',
    name: 'Eco-Friendly Handicrafts',
    category: 'Handicrafts',
    categoryId: 'handicrafts',
    image: '/images/hero-page-sliders/hero-2.jpg',
    images: ['/images/hero-page-sliders/hero-1.jpg', '/images/hero-page-sliders/hero-2.jpg', '/images/hero-page-sliders/hero-3.jpg'],
    shortDescription: 'Sustainable handicrafts including jute bags, recycled crafts, and coconut shell bowls.',
    description: 'Our Eco-Friendly Handicrafts collection focuses on sustainable, reusable, and biodegradable products. From jute bags and recycled crafts to coconut shell bowls, each product is designed to reduce environmental impact while offering utility and style.',
    price: {
      min: 5,
      max: 80,
      currency: 'USD',
      unit: 'per piece'
    },
    specifications: {
      'Material': 'Jute, Recycled Materials, Coconut Shells',
      'Products': 'Jute Bags, Recycled Crafts, Coconut Shell Bowls',
      'Finish': 'Natural / Handmade',
      'Durability': 'Reusable & eco-friendly'
    },
    features: [
      'Eco-conscious products',
      'Reusable & biodegradable',
      'Handcrafted by artisans',
      'Stylish & sustainable'
    ],
    moq: '200 pieces',
    leadTime: '20-35 days',
    origin: 'India',
    packaging: ['Eco-friendly packaging', 'Custom branding'],
    applications: ['Eco-stores', 'Retail chains', 'Corporate gifting', 'Daily use'],
    certifications: []
  },


  // Furniture
  {
    id: 'wooden-furniture',
    name: 'Wooden Furniture',
    category: 'Furniture',
    categoryId: 'furniture',
    image: '/images/hero-page-sliders/hero-1.jpg',
    images: ['/images/hero-page-sliders/hero-1.jpg', '/images/hero-page-sliders/hero-2.jpg', '/images/hero-page-sliders/hero-3.jpg'],
    shortDescription: 'Elegant wooden furniture including dining sets, sofa sets, coffee tables, and TV units.',
    description: 'Our Wooden Furniture collection is crafted from high-quality solid wood, combining durability with timeless design. From dining sets and sofa sets to coffee tables and TV units, each piece is built to add warmth and sophistication to your living spaces.',
    price: {
      min: 100,
      max: 800,
      currency: 'USD',
      unit: 'per piece'
    },
    specifications: {
      'Material': 'Solid Wood (Teak, Sheesham, Mango)',
      'Products': 'Dining Sets, Sofa Sets, Coffee Tables, TV Units',
      'Finish': 'Polished / Matte / Custom',
      'Durability': 'Long-lasting, termite-resistant'
    },
    features: ['Premium wood quality', 'Elegant designs', 'Durable construction', 'Custom finishes available'],
    moq: '50 pieces',
    leadTime: '30-45 days',
    origin: 'India',
    packaging: ['Standard export packaging', 'Custom packaging available'],
    applications: ['Homes', 'Hotels', 'Showrooms', 'Retail chains'],
    certifications: []
  },
  {
    id: 'office-furniture',
    name: 'Office Furniture',
    category: 'Furniture',
    categoryId: 'furniture',
    image: '/images/hero-page-sliders/hero-1.jpg',
    images: ['/images/hero-page-sliders/hero-1.jpg', '/images/hero-page-sliders/hero-2.jpg', '/images/hero-page-sliders/hero-3.jpg'],
    shortDescription: 'Modern office furniture including work desks, ergonomic chairs, and conference tables.',
    description: 'Our Office Furniture range is designed to provide comfort, functionality, and a professional look. Featuring ergonomic chairs, spacious work desks, and stylish conference tables, these pieces are perfect for creating productive workspaces.',
    price: {
      min: 80,
      max: 600,
      currency: 'USD',
      unit: 'per piece'
    },
    specifications: {
      'Material': 'Wood, Engineered Wood, Metal, Upholstery',
      'Products': 'Work Desks, Ergonomic Chairs, Conference Tables',
      'Features': 'Ergonomic design, Sturdy build, Space-efficient'
    },
    features: ['Ergonomic comfort', 'Durable construction', 'Stylish designs', 'Custom sizes available'],
    moq: '100 pieces',
    leadTime: '25-40 days',
    origin: 'India',
    packaging: ['Flat-pack cartons', 'Custom packaging available'],
    applications: ['Corporate offices', 'Co-working spaces', 'Conference halls'],
    certifications: []
  },
  {
    id: 'custom-handicraft-furniture',
    name: 'Custom & Handicraft Furniture',
    category: 'Furniture',
    categoryId: 'furniture',
    image: '/images/hero-page-sliders/hero-1.jpg',
    images: ['/images/hero-page-sliders/hero-1.jpg', '/images/hero-page-sliders/hero-2.jpg', '/images/hero-page-sliders/hero-3.jpg'],
    shortDescription: 'Handcrafted furniture including carved tables, ethnic chairs, and bamboo furniture.',
    description: 'Our Custom & Handicraft Furniture collection features unique designs created by skilled artisans. From intricately carved tables and ethnic chairs to eco-friendly bamboo furniture, each piece reflects traditional craftsmanship with a modern touch.',
    price: {
      min: 70,
      max: 500,
      currency: 'USD',
      unit: 'per piece'
    },
    specifications: {
      'Material': 'Solid Wood, Bamboo, Cane',
      'Products': 'Carved Tables, Ethnic Chairs, Bamboo Furniture',
      'Finish': 'Hand-polished, Painted, Natural',
      'Specialty': 'Handcrafted, Customizable'
    },
    features: ['Unique craftsmanship', 'Eco-friendly options', 'Customizable designs', 'Durable quality'],
    moq: '30 pieces',
    leadTime: '35-50 days',
    origin: 'India',
    packaging: ['Protective wrapping', 'Export cartons', 'Custom packaging available'],
    applications: ['Luxury homes', 'Boutiques', 'Hotels & resorts', 'Export markets'],
    certifications: []
  },

  //Imitation Jewellery
  {
    id: 'imitation-jewellery',
    name: 'Imitation Jewellery',
    category: 'Fashion & Lifestyle',
    categoryId: 'imitation-jewellery',
    image: '/images/hero-page-sliders/hero-2.jpg',
    images: ['/images/hero-page-sliders/hero-1.jpg', '/images/hero-page-sliders/hero-2.jpg', '/images/hero-page-sliders/hero-3.jpg'],
    shortDescription: 'Stylish imitation jewellery including necklaces, bangles, rings, earrings, anklets, and bridal sets.',
    description: 'Our Imitation Jewellery collection features a wide range of trendy and traditional designs including necklaces, bangles, rings, earrings, anklets, bridal sets, and antique designs. Crafted with precision, these pieces offer the perfect blend of elegance and affordability, making them ideal for daily wear, parties, and weddings.',
    price: {
      min: 5,
      max: 80,
      currency: 'USD',
      unit: 'per piece / set'
    },
    specifications: {
      'Material': 'Alloy, Brass, Copper with Gold/Silver Plating',
      'Products': 'Necklaces, Bangles, Rings, Earrings, Anklets, Bridal Sets, Antique Designs',
      'Finish': 'Gold Plated, Silver Plated, Antique Polish',
      'Durability': 'Long-lasting with proper care',
      'Occasion': 'Daily wear, Party wear, Bridal wear'
    },
    features: [
      'Trendy & traditional designs',
      'Lightweight & comfortable',
      'Affordable luxury',
      'Skin-friendly materials',
      'Custom designs available'
    ],
    moq: '500 pieces/sets',
    leadTime: '20-30 days',
    origin: 'India',
    packaging: ['Plastic boxes', 'Jewellery pouches', 'Custom gift packaging'],
    applications: ['Retail stores', 'E-commerce', 'Wedding collections', 'Corporate gifting'],
    certifications: []
  },

  //Copper & Brass Items
  {
  id: 'copper-brass-items',
  name: 'Copper & Brass Items',
  category: 'Copper & Brass',
  categoryId: 'copper-brass-items',
  image: '/images/hero-page-sliders/hero-2.jpg',
  images: ['/images/hero-page-sliders/hero-1.jpg', '/images/hero-page-sliders/hero-2.jpg', '/images/hero-page-sliders/hero-3.jpg'],
  shortDescription: 'Handcrafted copper and brass items including water bottles, urli bowls, jugs, pooja thalis, and decorative wall pieces.',
  description: 'Our Copper & Brass collection features traditional and contemporary metalware — water bottles, urli bowls, copper jugs, brass pooja thalis, and decorative wall decor. Crafted from high-quality copper and brass with polished and antique finishes, these pieces blend functionality with timeless aesthetics, suitable for daily use, rituals, gifting, and home décor.',
  price: {
    min: 8,
    max: 120,
    currency: 'USD',
    unit: 'per piece'
  },
  specifications: {
    'Material': 'Copper, Brass',
    'Products': 'Water Bottles, Urli Bowls, Copper Jugs, Brass Pooja Thali, Wall Decor',
    'Finish': 'Polished, Antique, Hand-etched',
    'Food Grade': 'Available for select items',
    'Care': 'Hand wash recommended; dry thoroughly'
  },
  features: [
    'Handcrafted finishes',
    'Traditional & contemporary designs',
    'Durable metal construction',
    'Food-grade options available',
    'Ideal for rituals, gifting & décor'
  ],
  moq: '50 pieces',
  leadTime: '20-35 days',
  origin: 'India',
  packaging: ['Protective wrapping', 'Foam inserts', 'Export cartons', 'Custom branding available'],
  applications: ['Home décor', 'Kitchenware', 'Pooja & rituals', 'Gifting', 'Hospitality & restaurants'],
  certifications: []
  },

  //Packaging Products
  {
  id: 'packaging-products',
  name: 'Packaging Products',
  category: 'Packaging',
  categoryId: 'packaging-products',
  image: '/images/hero-page-sliders/hero-1.jpg',
  images: ['/images/hero-page-sliders/hero-1.jpg', '/images/hero-page-sliders/hero-2.jpg', '/images/hero-page-sliders/hero-3.jpg'],
  shortDescription: 'Durable and eco-friendly packaging products including food containers, corrugated boxes, wrapping rolls, paper bags, and labels.',
  description: 'Our Packaging Products range offers versatile and eco-conscious solutions for businesses. The collection includes food-safe containers, corrugated shipping boxes, protective wrapping rolls, recyclable paper bags, and customizable labels. Designed to ensure product safety and brand visibility, these packaging items are suitable for industries such as food, retail, logistics, and e-commerce.',
  price: {
    min: 0.05,
    max: 50,
    currency: 'USD',
    unit: 'per piece'
  },
  specifications: {
    'Material': 'Paper, Cardboard, Kraft, Plastic (Food Grade), Adhesive',
    'Products': 'Food Containers, Corrugated Boxes, Wrapping Rolls, Paper Bags, Labels',
    'Eco-friendly': 'Available for most products',
    'Customization': 'Brand logo, size, and design customization available'
  },
  features: [
    'Food-safe & durable',
    'Eco-friendly & recyclable options',
    'Customizable branding',
    'Lightweight & cost-effective',
    'Ideal for shipping, retail & food packaging'
  ],
  moq: '1000 pieces (varies by product)',
  leadTime: '15-25 days',
  origin: 'India',
  packaging: ['Bulk cartons', 'Shrink wrap', 'Custom printed packaging available'],
  applications: ['Food & beverage', 'E-commerce & retail', 'Logistics', 'Brand promotions'],
  certifications: ['ISO 9001', 'Food Grade Certification (where applicable)']
  }




  // Electronics
  // {
  //   id: 'led-bulbs',
  //   name: 'Energy Efficient LED Bulbs',
  //   category: 'Electronics',
  //   categoryId: 'electronics',
  //   image: '/images/hero-page-sliders/hero-1.jpg',
  //   images: ['/images/hero-page-sliders/hero-1.jpg', '/images/hero-page-sliders/hero-2.jpg', '/images/hero-page-sliders/hero-4.jpg'],
  //   shortDescription: 'High-quality energy efficient LED bulbs with long lifespan and superior brightness.',
  //   description: 'Our Energy Efficient LED Bulbs offer superior performance with up to 80% energy savings compared to traditional incandescent bulbs. Featuring advanced LED technology, these bulbs provide consistent brightness, long lifespan, and excellent color rendering.',
  //   price: {
  //     min: 2,
  //     max: 8,
  //     currency: 'USD',
  //     unit: 'per piece'
  //   },
  //   specifications: {
  //     'Wattage': '3W to 50W',
  //     'Voltage': '85-265V AC',
  //     'Color Temperature': '2700K-6500K',
  //     'Lifespan': '25,000-50,000 hours',
  //     'Efficiency': '100-120 lm/W',
  //     'Base Types': 'E27, E14, B22',
  //   },
  //   features: [
  //     'Energy efficient',
  //     'Long lifespan',
  //     'Instant on',
  //     'No UV emission',
  //     'Mercury free',
  //     'Wide voltage range'
  //   ],
  //   certifications: ['CE', 'RoHS', 'BIS', 'Energy Star'],
  //   moq: '1000 pieces',
  //   leadTime: '15-25 days',
  //   origin: 'Gujarat, India',
  //   packaging: ['Individual boxes', 'Master cartons', 'Retail packaging'],
  //   applications: ['Residential lighting', 'Commercial spaces', 'Street lighting', 'Industrial use']
  // },

  // // Machinery
  // {
  //   id: 'rice-milling-machine',
  //   name: 'Automatic Rice Milling Machine',
  //   category: 'Machinery',
  //   categoryId: 'machinery',
  //   image: '/images/hero-page-sliders/hero-2.jpg',
  //   images: ['/images/hero-page-sliders/hero-2.jpg', '/images/hero-page-sliders/hero-3.jpg', '/images/hero-page-sliders/hero-1.jpg'],
  //   shortDescription: 'High-capacity automatic rice milling machine for efficient rice processing.',
  //   description: 'Our Automatic Rice Milling Machine is designed for high-efficiency rice processing with minimal broken rice percentage. This machine combines hulling, whitening, and polishing processes in a single unit, making it ideal for commercial rice processing operations.',
  //   price: {
  //     min: 25000,
  //     max: 85000,
  //     currency: 'USD',
  //     unit: 'per unit'
  //   },
  //   specifications: {
  //     'Capacity': '1-10 tons per hour',
  //     'Power': '50-200 HP',
  //     'Material': 'Mild steel & stainless steel',
  //     'Broken Rice': 'Less than 5%',
  //     'Efficiency': '85-90%',
  //     'Automation': 'Semi/Fully automatic',
  //   },
  //   features: [
  //     'High processing capacity',
  //     'Low broken rice percentage',
  //     'Energy efficient',
  //     'Easy operation',
  //     'Robust construction',
  //     'Complete processing line'
  //   ],
  //   certifications: ['ISO 9001', 'CE', 'Export Quality'],
  //   moq: '1 unit',
  //   leadTime: '60-90 days',
  //   origin: 'Punjab, India',
  //   packaging: ['Wooden crates', 'Export packing', 'Installation support'],
  //   applications: ['Rice mills', 'Food processing', 'Agricultural cooperatives', 'Export processing']
  // }
];

// Helper functions
export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.categoryId === categoryId);
};

export const getProductById = (productId: string): Product | undefined => {
  return products.find(product => product.id === productId);
};

export const getCategoryBySlug = (slug: string): ProductCategory | undefined => {
  return productCategories.find(category => category.slug === slug);
};

export const getRelatedProducts = (productId: string, limit: number = 4): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter(p => p.categoryId === product.categoryId && p.id !== productId)
    .slice(0, limit);
};
