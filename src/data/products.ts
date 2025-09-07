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
    image: '/images/hero-1.jpg',
    features: ['Premium Cotton', 'Export Quality', 'Custom Designs', 'Bulk Orders'],
    productCount: 12
  },
  {
    id: 'handicrafts',
    name: 'Handicrafts',
    slug: 'handicrafts',
    description: 'Traditional Indian handicrafts showcasing rich cultural heritage and artisan craftsmanship.',
    image: '/images/hero-2.jpg',
    features: ['Handmade', 'Traditional Designs', 'Eco-Friendly', 'Cultural Authentic'],
    productCount: 18
  },
  {
    id: 'spices-food',
    name: 'Spices & Food Products',
    slug: 'spices-food-products',
    description: 'Fresh, aromatic spices and food products sourced directly from Indian farms and producers.',
    image: '/images/hero-3.jpg',
    features: ['Farm Fresh', 'Organic Options', 'Quality Tested', 'Long Shelf Life'],
    productCount: 25
  },
  {
    id: 'furniture',
    name: 'Furniture',
    slug: 'furniture',
    description: 'Elegant wooden and metal furniture combining traditional craftsmanship with modern designs.',
    image: '/images/hero-4.jpg',
    features: ['Solid Wood', 'Custom Designs', 'Durable', 'Export Packaging'],
    productCount: 15
  },
  {
    id: 'electronics',
    name: 'Electronics',
    slug: 'electronics',
    description: 'Quality electronic components and devices meeting international standards.',
    image: '/images/hero-1.jpg',
    features: ['Quality Tested', 'Warranty', 'International Standards', 'Technical Support'],
    productCount: 20
  },
  {
    id: 'machinery',
    name: 'Machinery',
    slug: 'machinery',
    description: 'Industrial machinery and equipment for various sectors with technical support.',
    image: '/images/hero-2.jpg',
    features: ['Heavy Duty', 'Technical Support', 'Installation', 'Maintenance'],
    productCount: 8
  }
];

export const products: Product[] = [
  // Spices & Food Products
  {
    id: 'indian-black-tea',
    name: 'Premium Indian Black Tea',
    category: 'Spices & Food Products',
    categoryId: 'spices-food',
    image: '/images/hero-3.jpg',
    images: ['/images/hero-3.jpg', '/images/hero-1.jpg', '/images/hero-2.jpg'],
    shortDescription: 'Premium quality Indian black tea with rich aroma and authentic taste.',
    description: 'Our Premium Indian Black Tea is sourced from the finest tea gardens of Assam and Darjeeling. Known for its robust flavor, rich color, and invigorating aroma, this tea offers an authentic Indian tea experience. Each leaf is carefully selected and processed to maintain the highest quality standards.',
    price: {
      min: 250,
      max: 500,
      currency: 'USD',
      unit: 'per kg'
    },
    specifications: {
      'Tea Type': 'Black Tea (CTC & Leaf)',
      'Origin': 'Assam, Darjeeling, India',
      'Moisture Content': 'Max 7%',
      'Caffeine Content': '3.5-4.5%',
      'Grade': 'FTGFOP, BOPF, Pekoe',
      'Processing': 'Orthodox & CTC',
    },
    features: [
      'Premium tea garden sourced',
      'Rich malty flavor',
      'High caffeine content',
      'Export grade quality',
      'Vacuum packed freshness',
      'ISO 22000 certified'
    ],
    certifications: ['ISO 22000', 'FSSAI', 'Organic (Available)', 'Rainforest Alliance'],
    moq: '500 kg',
    leadTime: '15-20 days',
    origin: 'Assam & Darjeeling, India',
    packaging: ['Bulk packing in jute bags', '25kg/50kg PP bags', 'Custom retail packaging available'],
    applications: ['Hot tea preparation', 'Iced tea', 'Tea blends', 'Commercial use'],
    nutritionalInfo: {
      'Calories': '2 per cup (240ml)',
      'Carbohydrates': '0.7g',
      'Protein': '0g',
      'Fat': '0g',
      'Antioxidants': 'High (Theaflavins, Catechins)'
    }
  },
  {
    id: 'arabica-coffee-beans',
    name: 'Premium Arabica Coffee Beans',
    category: 'Spices & Food Products',
    categoryId: 'spices-food',
    image: '/images/hero-1.jpg',
    images: ['/images/hero-1.jpg', '/images/hero-3.jpg', '/images/hero-4.jpg'],
    shortDescription: 'High-quality Arabica coffee beans with smooth flavor and rich aroma.',
    description: 'Our Premium Arabica Coffee Beans are cultivated in the high-altitude plantations of Karnataka and Kerala. These beans offer a smooth, less acidic taste with complex flavor notes ranging from fruity to nutty. Perfect for espresso, filter coffee, and specialty brewing methods.',
    price: {
      min: 800,
      max: 1200,
      currency: 'USD',
      unit: 'per kg'
    },
    specifications: {
      'Bean Type': '100% Arabica',
      'Origin': 'Karnataka, Kerala, India',
      'Altitude': '1000-1500m above sea level',
      'Processing': 'Washed & Natural',
      'Moisture Content': '10-12%',
      'Screen Size': '15-18',
    },
    features: [
      'Single origin beans',
      'Smooth & balanced flavor',
      'Low acidity',
      'Freshly roasted',
      'Sustainable farming',
      'Direct trade sourcing'
    ],
    certifications: ['Organic', 'Fair Trade', 'Rainforest Alliance', 'UTZ Certified'],
    moq: '100 kg',
    leadTime: '10-15 days',
    origin: 'Western Ghats, India',
    packaging: ['Jute bags (60kg)', 'Vacuum packed bags', 'Custom roasting available'],
    applications: ['Espresso', 'Filter coffee', 'Cold brew', 'Specialty coffee shops']
  },
  {
    id: 'turmeric-powder',
    name: 'Organic Turmeric Powder',
    category: 'Spices & Food Products',
    categoryId: 'spices-food',
    image: '/images/hero-2.jpg',
    images: ['/images/hero-2.jpg', '/images/hero-4.jpg', '/images/hero-1.jpg'],
    shortDescription: 'Pure organic turmeric powder with high curcumin content and vibrant color.',
    description: 'Our Organic Turmeric Powder is made from premium quality turmeric rhizomes grown in the fertile soils of Tamil Nadu and Andhra Pradesh. Known for its anti-inflammatory properties and vibrant golden color, this turmeric is perfect for culinary and medicinal applications.',
    price: {
      min: 3,
      max: 6,
      currency: 'USD',
      unit: 'per kg'
    },
    specifications: {
      'Curcumin Content': '5-7%',
      'Moisture': 'Max 10%',
      'Color Value': '250-300 ASTA',
      'Mesh Size': '80-120 mesh',
      'Volatile Oil': '5-10%',
      'Processing': 'Steam sterilized',
    },
    features: [
      'High curcumin content',
      'Vibrant golden color',
      'Organic certified',
      'Steam sterilized',
      'Pesticide free',
      'Anti-inflammatory properties'
    ],
    certifications: ['Organic', 'SPICES BOARD', 'ISO 22000', 'HACCP'],
    moq: '1000 kg',
    leadTime: '10-15 days',
    origin: 'Tamil Nadu, Andhra Pradesh, India',
    packaging: ['25kg PP bags', '50kg jute bags', 'Retail packaging available'],
    applications: ['Cooking spice', 'Health supplements', 'Cosmetics', 'Traditional medicine'],
    nutritionalInfo: {
      'Calories': '354 per 100g',
      'Protein': '7.83g',
      'Carbohydrates': '64.93g',
      'Fat': '9.88g',
      'Fiber': '21g'
    }
  },
  {
    id: 'basmati-rice',
    name: 'Premium Basmati Rice',
    category: 'Spices & Food Products',
    categoryId: 'spices-food',
    image: '/images/hero-4.jpg',
    images: ['/images/hero-4.jpg', '/images/hero-2.jpg', '/images/hero-3.jpg'],
    shortDescription: 'Extra long grain basmati rice with distinctive aroma and fluffy texture.',
    description: 'Our Premium Basmati Rice is cultivated in the foothills of the Himalayas, known for producing the world\'s finest basmati. This aromatic rice features extra long grains that elongate further upon cooking, offering a distinctive nutty flavor and fluffy texture.',
    price: {
      min: 1.5,
      max: 3,
      currency: 'USD',
      unit: 'per kg'
    },
    specifications: {
      'Grain Length': '6.5-7.5mm',
      'Elongation Ratio': '1.8-2.2',
      'Moisture': 'Max 14%',
      'Broken Grains': 'Max 2%',
      'Foreign Matter': 'Max 0.1%',
      'Varieties': '1121, Pusa, Traditional',
    },
    features: [
      'Extra long grains',
      'Distinctive aroma',
      'Aged rice available',
      'Low glycemic index',
      'Fluffy texture',
      'Premium quality'
    ],
    certifications: ['APEDA', 'ISO 22000', 'BRC', 'HACCP'],
    moq: '20 MT',
    leadTime: '15-25 days',
    origin: 'Punjab, Haryana, India',
    packaging: ['50kg PP bags', 'Jute bags', 'Retail packing 1-25kg'],
    applications: ['Premium dining', 'Biryani preparation', 'Export markets', 'Retail chains']
  },
  {
    id: 'cardamom-green',
    name: 'Green Cardamom (Small)',
    category: 'Spices & Food Products',
    categoryId: 'spices-food',
    image: '/images/hero-1.jpg',
    images: ['/images/hero-1.jpg', '/images/hero-3.jpg', '/images/hero-2.jpg'],
    shortDescription: 'Premium quality small green cardamom with intense aroma and flavor.',
    description: 'Our Green Cardamom is sourced from the cardamom hills of Kerala and Karnataka, known as the "Queen of Spices". These small green pods contain intensely aromatic seeds that add a unique sweet and spicy flavor to both sweet and savory dishes.',
    price: {
      min: 25,
      max: 35,
      currency: 'USD',
      unit: 'per kg'
    },
    specifications: {
      'Size': '6-8mm',
      'Color': 'Natural green',
      'Moisture': 'Max 12%',
      'Volatile Oil': 'Min 4%',
      'Grade': 'AGEB, AGL',
      'Processing': 'Cured and dried',
    },
    features: [
      'Intense aroma',
      'Premium grade quality',
      'Natural green color',
      'Hand picked',
      'Properly cured',
      'Export grade'
    ],
    certifications: ['Spices Board India', 'ISO 22000', 'Organic (Available)'],
    moq: '100 kg',
    leadTime: '10-15 days',
    origin: 'Kerala, Karnataka, India',
    packaging: ['Cardboard boxes', 'Jute bags', 'Vacuum packing available'],
    applications: ['Spice blends', 'Tea flavoring', 'Desserts', 'Traditional medicine']
  },

  // Textiles & Garments
  {
    id: 'cotton-bed-sheets',
    name: 'Premium Cotton Bed Sheets',
    category: 'Textiles & Garments',
    categoryId: 'textiles',
    image: '/images/hero-1.jpg',
    images: ['/images/hero-1.jpg', '/images/hero-2.jpg', '/images/hero-3.jpg'],
    shortDescription: '100% premium cotton bed sheets with superior comfort and durability.',
    description: 'Our Premium Cotton Bed Sheets are crafted from the finest 100% cotton fibers, offering exceptional softness, breathability, and durability. Available in various sizes and colors, these bed sheets provide ultimate comfort for a perfect night\'s sleep.',
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
      '100% premium cotton',
      'Soft and breathable',
      'Color fast',
      'Easy care',
      'Hypoallergenic',
      'Durable construction'
    ],
    certifications: ['OEKO-TEX Standard 100', 'GOTS (Available)', 'ISO 9001'],
    moq: '500 sets',
    leadTime: '20-30 days',
    origin: 'Tamil Nadu, India',
    packaging: ['PVC bags', 'Gift boxes', 'Custom packaging available'],
    applications: ['Home textiles', 'Hotels', 'Hospitals', 'Retail chains']
  },

  // Handicrafts
  {
    id: 'wooden-decorative-elephant',
    name: 'Handcrafted Wooden Elephant',
    category: 'Handicrafts',
    categoryId: 'handicrafts',
    image: '/images/hero-2.jpg',
    images: ['/images/hero-2.jpg', '/images/hero-4.jpg', '/images/hero-1.jpg'],
    shortDescription: 'Beautiful handcrafted wooden elephant with intricate carvings and traditional designs.',
    description: 'This exquisite handcrafted wooden elephant showcases the finest Indian craftsmanship. Carved from high-quality rosewood by skilled artisans, each piece features intricate traditional designs and patterns that reflect India\'s rich cultural heritage.',
    price: {
      min: 25,
      max: 150,
      currency: 'USD',
      unit: 'per piece'
    },
    specifications: {
      'Material': 'Rosewood/Sheesham',
      'Sizes': '4" to 24" height',
      'Finish': 'Natural wood finish',
      'Carving': 'Hand carved',
      'Weight': '0.5kg to 5kg',
      'Design': 'Traditional Indian motifs',
    },
    features: [
      'Hand carved by artisans',
      'Premium wood quality',
      'Intricate designs',
      'Natural finish',
      'Cultural authenticity',
      'Unique pieces'
    ],
    certifications: ['Handicrafts Export Promotion Council', 'FSC (Available)'],
    moq: '50 pieces',
    leadTime: '25-35 days',
    origin: 'Rajasthan, India',
    packaging: ['Bubble wrap', 'Wooden crates', 'Gift boxes available'],
    applications: ['Home decoration', 'Gift items', 'Corporate gifts', 'Export markets']
  },

  // Furniture
  {
    id: 'teak-dining-table',
    name: 'Solid Teak Dining Table',
    category: 'Furniture',
    categoryId: 'furniture',
    image: '/images/hero-4.jpg',
    images: ['/images/hero-4.jpg', '/images/hero-1.jpg', '/images/hero-3.jpg'],
    shortDescription: 'Premium solid teak dining table with elegant design and superior craftsmanship.',
    description: 'Our Solid Teak Dining Table is crafted from premium quality teak wood, known for its durability, natural water resistance, and beautiful grain patterns. This elegant dining table combines traditional craftsmanship with modern design aesthetics.',
    price: {
      min: 800,
      max: 1500,
      currency: 'USD',
      unit: 'per piece'
    },
    specifications: {
      'Material': '100% Solid Teak Wood',
      'Dimensions': '6ft to 10ft length',
      'Finish': 'Natural teak oil finish',
      'Seating': '6 to 12 persons',
      'Design': 'Modern/Traditional',
      'Thickness': '40mm table top',
    },
    features: [
      'Solid teak construction',
      'Water resistant',
      'Beautiful grain patterns',
      'Durable and long-lasting',
      'Elegant design',
      'Custom sizes available'
    ],
    certifications: ['FSC Certified', 'CARB Compliant', 'Export Quality'],
    moq: '10 pieces',
    leadTime: '45-60 days',
    origin: 'Kerala, India',
    packaging: ['Export quality packing', 'Wooden crates', 'Assembly instructions'],
    applications: ['Residential', 'Commercial', 'Hotels', 'Restaurants']
  },

  // Electronics
  {
    id: 'led-bulbs',
    name: 'Energy Efficient LED Bulbs',
    category: 'Electronics',
    categoryId: 'electronics',
    image: '/images/hero-1.jpg',
    images: ['/images/hero-1.jpg', '/images/hero-2.jpg', '/images/hero-4.jpg'],
    shortDescription: 'High-quality energy efficient LED bulbs with long lifespan and superior brightness.',
    description: 'Our Energy Efficient LED Bulbs offer superior performance with up to 80% energy savings compared to traditional incandescent bulbs. Featuring advanced LED technology, these bulbs provide consistent brightness, long lifespan, and excellent color rendering.',
    price: {
      min: 2,
      max: 8,
      currency: 'USD',
      unit: 'per piece'
    },
    specifications: {
      'Wattage': '3W to 50W',
      'Voltage': '85-265V AC',
      'Color Temperature': '2700K-6500K',
      'Lifespan': '25,000-50,000 hours',
      'Efficiency': '100-120 lm/W',
      'Base Types': 'E27, E14, B22',
    },
    features: [
      'Energy efficient',
      'Long lifespan',
      'Instant on',
      'No UV emission',
      'Mercury free',
      'Wide voltage range'
    ],
    certifications: ['CE', 'RoHS', 'BIS', 'Energy Star'],
    moq: '1000 pieces',
    leadTime: '15-25 days',
    origin: 'Gujarat, India',
    packaging: ['Individual boxes', 'Master cartons', 'Retail packaging'],
    applications: ['Residential lighting', 'Commercial spaces', 'Street lighting', 'Industrial use']
  },

  // Machinery
  {
    id: 'rice-milling-machine',
    name: 'Automatic Rice Milling Machine',
    category: 'Machinery',
    categoryId: 'machinery',
    image: '/images/hero-2.jpg',
    images: ['/images/hero-2.jpg', '/images/hero-3.jpg', '/images/hero-1.jpg'],
    shortDescription: 'High-capacity automatic rice milling machine for efficient rice processing.',
    description: 'Our Automatic Rice Milling Machine is designed for high-efficiency rice processing with minimal broken rice percentage. This machine combines hulling, whitening, and polishing processes in a single unit, making it ideal for commercial rice processing operations.',
    price: {
      min: 25000,
      max: 85000,
      currency: 'USD',
      unit: 'per unit'
    },
    specifications: {
      'Capacity': '1-10 tons per hour',
      'Power': '50-200 HP',
      'Material': 'Mild steel & stainless steel',
      'Broken Rice': 'Less than 5%',
      'Efficiency': '85-90%',
      'Automation': 'Semi/Fully automatic',
    },
    features: [
      'High processing capacity',
      'Low broken rice percentage',
      'Energy efficient',
      'Easy operation',
      'Robust construction',
      'Complete processing line'
    ],
    certifications: ['ISO 9001', 'CE', 'Export Quality'],
    moq: '1 unit',
    leadTime: '60-90 days',
    origin: 'Punjab, India',
    packaging: ['Wooden crates', 'Export packing', 'Installation support'],
    applications: ['Rice mills', 'Food processing', 'Agricultural cooperatives', 'Export processing']
  }
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
