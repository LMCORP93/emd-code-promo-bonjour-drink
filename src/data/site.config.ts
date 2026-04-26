// ── Types ──────────────────────────────────────────────────────────────

export interface Product {
  rank: number;
  name: string;
  brand: string;
  slug: string;
  image: string;
  brandLogo: string;
  rating: number;
  reviewCount: number;
  promoCode: string;
  promoPercent: number;
  originalPrice: string;
  discountPrice: string;
  affiliateLink: string;
  origin: string;
  availability: string;
  productType: string;
  pros: string[];
  cons: string[];
  description: string;
}

export interface SiteConfig {
  domain: string;
  isIndexable?: boolean;
  siteName: string;
  brand: string;
  product: string;
  productCategory: string;
  productFormat: string;
  tagline: string;
  affiliateLink: string;
  promoCode: string;
  originalPrice: string;
  discountPrice: string;
  rating: number;
  author: { name: string; avatar: string; bio: string; };
  seo: { title: string; description: string; ogImage: string; };
  analyticsMeasurementId?: string;
  breadcrumbs: { label: string; href: string }[];
  quickSummary: { assets: string[]; considerations: string[]; };
  pros: string[];
  cons: string[];
  faq: { question: string; answer: string }[];
  products: Product[];
  tocItems: { id: string; label: string }[];
  pages: { type: 'comparatif' | 'blog'; label: string; slug: string }[];
}

const products: Product[] = [
  {
    rank: 1,
    name: 'Rituel Bonjour Drink',
    brand: 'Bonjour Drink',
    slug: 'bonjour-drink',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68d7c7d22051cb9faf0ade48_bonjour%20drink%202e%CC%80me%20image.avif',
    brandLogo: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/68d666ee3daf1b2e78ab7a9a_logo%20Bonjour%20Drink.svg',
    rating: 9.7,
    reviewCount: 10000,
    promoCode: 'LMC20',
    promoPercent: 20,
    originalPrice: '39,00 €',
    discountPrice: '31,20 €',
    affiliateLink: 'https://taap.it/bonjour-drink-lmc',
    origin: '🇫🇷 France',
    availability: 'En stock',
    productType: 'Boisson fonctionnelle aux champignons adaptogènes',
    pros: [
      'Code LMC20 actif avec -20% sur le site officiel',
      'Marque française avec formules bio et fabrication contrôlée',
      'Alternative au café plus douce, sans nervosité excessive',
      'Plusieurs saveurs pour adapter le rituel au moment de la journée',
    ],
    cons: [
      'Réduction valable uniquement via le lien partenaire',
      'Prix plus intéressant avec code promo qu’au tarif public',
      'Goût végétal qui peut demander quelques jours d’adaptation',
    ],
    description: 'Bonjour Drink est une alternative française au café, formulée avec champignons adaptogènes, plantes et cacao. Le code promo LMC20 permet de réduire le prix directement sur le site officiel.',
  },
];

const config: SiteConfig = {
  domain: 'https://emd-code-promo-bonjour-drink.pages.dev',
  isIndexable: false,
  siteName: 'Code Promo Bonjour Drink',
  brand: products[0].brand,
  product: products[0].name,
  productCategory: 'Café adaptogène et boisson fonctionnelle',
  productFormat: 'Poudre à mélanger',
  tagline: 'Code promo Bonjour Drink vérifié, offre LMC20 et avis rapide avant achat',
  affiliateLink: products[0].affiliateLink,
  promoCode: products[0].promoCode,
  originalPrice: products[0].originalPrice,
  discountPrice: products[0].discountPrice,
  rating: products[0].rating,
  author: {
    name: 'Tim',
    avatar: '/author-avatar.png',
    bio: 'Expert en compléments alimentaires et nutrition fonctionnelle. Testeur et rédacteur depuis 2024.',
  },
  seo: {
    title: 'Code promo Bonjour Drink : -20% avec LMC20',
    description: 'Code promo Bonjour Drink vérifié : utilisez LMC20 pour obtenir -20% sur votre commande. Offre, avis rapide et lien partenaire officiel.',
    ogImage: '/og-image.jpg',
  },
  analyticsMeasurementId: '',
  breadcrumbs: [{ label: 'Code promo Bonjour Drink', href: '/' }],
  quickSummary: {
    assets: ['Code LMC20 vérifié', 'Réduction -20%', 'Lien partenaire officiel', 'Marque française'],
    considerations: ['Offre à vérifier avant paiement', 'Meilleur intérêt via le lien LMC'],
  },
  pros: products[0].pros,
  cons: products[0].cons,
  faq: [
    { question: 'Quel est le code promo Bonjour Drink ?', answer: 'Le code promo Bonjour Drink à utiliser est LMC20. Il permet d’obtenir -20% sur le site officiel via le lien partenaire LMC.' },
    { question: 'Le code LMC20 est-il vérifié ?', answer: 'Oui, le code LMC20 est le code partenaire Bonjour Drink enregistré dans la base LMC. Il faut passer par le lien affilié pour maximiser les chances d’application.' },
    { question: 'Combien coûte Bonjour Drink avec le code promo ?', answer: 'Le prix public indicatif est de 39,00 €. Avec -20%, le prix descend autour de 31,20 €, hors frais de livraison ou offres temporaires.' },
    { question: 'Bonjour Drink remplace-t-il le café ?', answer: 'Bonjour Drink se présente comme une alternative plus douce au café, avec champignons adaptogènes, plantes et cacao. L’objectif est une énergie plus stable, sans le pic de nervosité associé au café classique.' },
  ],
  products,
  tocItems: [
    { id: 'code-promo', label: 'Code promo Bonjour Drink' },
    { id: 'offre', label: 'Offre et prix' },
    { id: 'avis', label: 'Notre avis rapide' },
    { id: 'utilisation', label: 'Comment utiliser LMC20' },
    { id: 'faq', label: 'Questions fréquentes' },
  ],
  pages: [{ type: 'blog', label: 'Code promo', slug: '/' }],
};

export default config;
