import { Service, Testimonial, FAQItem, ValueItem } from './types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'regular-clean',
    name: 'Regular House Cleaning',
    shortDescription: 'Maintain a pristine, comfortable, and healthy refuge with our signature recurring cleaning service.',
    fullDescription: 'Our signature regular cleaning matches your busy schedule to keep your home continuously spotless. Designed as a recurring maintenance or one-time touch-up, it covers dusting, premium vacuuming, floor sanitization, kitchen counter resets, and bathroom polishing with royal dedication.',
    basePrice: 120,
    pricingDetail: 'Starting at $120',
    iconName: 'Sparkles',
    features: [
      'Dusting all open surfaces, furniture, & trims',
      'Vacuuming rugs, carpets, & mopping hard floors',
      'Complete bathroom cleaning (sink, toilet, tub, shower)',
      'Kitchen exterior wipe-down (counters, stove, sink, appliances)',
      'Emptying trash bins & replacing liners'
    ]
  },
  {
    id: 'deep-clean',
    name: 'Deep Cleaning',
    shortDescription: 'Our custom detailed deep scrub targeting built-up grime, heavy dust, and neglected corners.',
    fullDescription: 'Perfect for homes that have gone a few weeks without cleaning or need that extra sparkle. We dedicate the necessary time to scrub baseboards, deep-dust light fixtures, polish cabinet exteriors, thoroughly clean range hood surfaces, behind accessible appliances, and power through bathroom grout.',
    basePrice: 180,
    pricingDetail: 'Starting at $180',
    iconName: 'Sparkles', // We can use Sparkles or Brush via lookup
    features: [
      'Hand-washing all baseboards & door frames',
      'Detailed grout scrubbing & soap scum breakdown',
      'Deep dusting of blinds, ceiling fans, and vents',
      'Sanitizing high-touch surfaces & switch plates',
      'Kitchen cabinet exterior deep-cleaning & polishing'
    ]
  },
  {
    id: 'apartment-condo',
    name: 'Apartment & Condo Cleaning',
    shortDescription: 'Tailored solutions specifically designed for the efficient layout and needs of smaller modern units.',
    fullDescription: 'We specialize in professional cleaning for Phoenix modern apartments, luxury high-rises, and dynamic urban condos. Our family-managed teams respect building regulations, parking, elevator rules, and perform quick, high-impact cleaning tailored to compact spaces.',
    basePrice: 100,
    pricingDetail: 'Starting at $100',
    iconName: 'Building',
    features: [
      'Balcony interior sweep & glass door spot cleaning',
      'Living area optimization & pet fur vacuuming',
      'Sanitizing compact kitchens & efficient laundry spaces',
      'Shower glass water-spot treatments',
      'Flexible scheduling suited for busy professionals'
    ]
  },
  {
    id: 'move-in-out',
    name: 'Move-In / Move-Out Cleaning',
    shortDescription: 'The ultimate detailed cleaning to ensure a fresh start or secure your security deposit return.',
    fullDescription: 'Transitioning between homes is stressful. Let us handle the pressure with our comprehensive moving clean. This highly exhaustive package includes every regular & deep cleaning task plus cleaning inside all refrigerators, ovens, empty kitchen cabinets, pantries, and closets.',
    basePrice: 240,
    pricingDetail: 'Starting at $240',
    iconName: 'Home',
    features: [
      'Inside-out cleaning of empty wood cabinets & drawers',
      'Deep cleaning inside the oven, stovetop, and warmer drawer',
      'Defrosting and sanitizing the refrigerator & freezer interior',
      'Polishing and cleaning inside pantries, linen and storage closets',
      'Ensuring the entire space smells fresh and is ready for walk-through'
    ]
  },
  {
    id: 'office-clean',
    name: 'Office & Light Commercial Cleaning',
    shortDescription: 'Sanitized, professional workspaces that elevate morale and impress prospective clients.',
    fullDescription: 'A clean workplace boosts productivity and health. We serve small local offices, medical suites, and boutique retail storefronts in the Phoenix area. We work after-hours or during scheduled times to ensure absolute discretion and superb workspace hygiene.',
    basePrice: 220,
    pricingDetail: 'Starting at $220',
    iconName: 'Briefcase',
    features: [
      'Sanitizing office desks, keyboards, and conference tables',
      'Lunchroom, pantry, and breakroom sanitizations',
      'Restroom deep cleaning & supply restocking assistance',
      'High-traffic area carpet vacuuming & hard floor scrubbing',
      'Safe shredder/trash basket management'
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    name: 'Sarah M.',
    location: 'Scottsdale, AZ',
    rating: 5,
    date: 'May 2026',
    comment: 'The absolute best cleaning service in the valley! They are a beautiful family business, incredibly respectful, and did a phenomenal deep clean before my in-laws visited. Spotless and smells clean without heavy chemical odors!',
    serviceType: 'Deep Cleaning'
  },
  {
    id: 't-2',
    name: 'David K.',
    location: 'Phoenix (Downtown), AZ',
    rating: 5,
    date: 'April 2026',
    comment: 'I use Royal House Cleaning twice a month for my condo. Being family-managed makes a massive difference in quality and trustworthiness. I highly recommend them to anyone who values high-quality and honest work.',
    serviceType: 'Apartment & Condo Cleaning'
  },
  {
    id: 't-3',
    name: 'The Rodriguez Family',
    location: 'Tempe, AZ',
    rating: 5,
    date: 'June 2026',
    comment: 'Moving is exhausting, but their Move-Out cleaning made our house look better than when we first bought it! Our landlord returned our full deposit with zero complaints. The Royal Team was friendly, professional, and worked so hard.',
    serviceType: 'Move-In / Move-Out Cleaning'
  },
  {
    id: 't-4',
    name: 'Elena G.',
    location: 'Phoenix, AZ',
    rating: 5,
    date: 'March 2026',
    comment: 'They have been cleaning my office and residential home since 2016. Having a trustworthy family group you can leave your keys with is priceless. They are reliable, warm, and highly professional.',
    serviceType: 'Regular House Cleaning'
  }
];

export const VALUES_DATA: ValueItem[] = [
  {
    title: 'Honesty Above All',
    description: 'We build relationships based on absolute trust. Our word is our bond, and we treat your home and belongings with maximum respect and care.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Family Pride & Dedication',
    description: 'As a family-managed business, every job is a personal reflection of our family name. We clean with the exact same level of thoroughness we would use in our own homes.',
    iconName: 'Heart'
  },
  {
    title: 'Experience Since 2009',
    description: 'With over a decade of serving homeowners in the Phoenix Valley, we have mastered effective cleaning checklists and safe treatment for luxury surfaces.',
    iconName: 'Award'
  },
  {
    title: 'Quality Execution',
    description: 'We do not cut corners. We clean inside, around, and under. If something is not up to our royal standard, we make it right immediately.',
    iconName: 'Crown'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Do you bring your own cleaning supplies and equipment?',
    answer: 'Yes, absolutely! We bring our own premium, eco-friendly cleaning supplies and commercial-grade vacuums (equipped with HEPA filters to protect your air quality). However, if you have specialized surfaces or a preferred cleaner you would like us to use, simply leave it out and specify in your instructions!'
  },
  {
    id: 'faq-2',
    question: 'Are you officially registered and fully insured?',
    answer: 'Yes. Royal House Cleaning Arizona LLC is a formally registered, family-managed LLC in the state of Arizona. We carry comprehensive liability insurance, so your home, keys, and valuables are fully protected.'
  },
  {
    id: 'faq-3',
    question: 'What is your reschedule or cancellation policy?',
    answer: 'We understand that plans can change! We request a 24-hour notice to reschedule or cancel your appointment for free, allowing us to allocate our dedicated family crew to another client in need.'
  },
  {
    id: 'faq-4',
    question: 'What areas in Arizona do you serve?',
    answer: 'We proudly serve the entire Phoenix Valley, including Phoenix, Scottsdale, Tempe, Mesa, Chandler, Gilbert, Glendale, Peoria, and Paradise Valley. Feel free to contact us if you are unsure if your location is in our active service zone!'
  }
];

export const HOME_SIZES = [
  { label: 'Studio Apartment', multiplier: 0.9, id: 'studio' },
  { label: '1 Bedroom Home / Apt', multiplier: 1.0, id: '1br' },
  { label: '2 Bedroom Home', multiplier: 1.25, id: '2br' },
  { label: '3 Bedroom Home', multiplier: 1.5, id: '3br' },
  { label: '4 Bedroom+ Large Residence', multiplier: 1.85, id: '4br' }
];

export function calculatePriceEstimate(serviceBasePrice: number, homeSizeId: string): number {
  const sizeRule = HOME_SIZES.find(size => size.id === homeSizeId) || HOME_SIZES[1];
  return Math.round(serviceBasePrice * sizeRule.multiplier);
}
