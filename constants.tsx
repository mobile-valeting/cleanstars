
import { Service, AddOn, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'refresh',
    name: 'Light Interior Refresh',
    price: 25,
    description: 'A meticulous interior tidy and surfaces wipe-down. Perfect for weekly upkeep to maintain that fresh-off-the-lot feel.',
    icon: 'vacuum',
    features: [
      'Interior Dusting & Wipe Down',
      'Thorough Vacuuming',
      'Glass Cleaned (In/Out)',
      'Scented Finish'
    ]
  },
  {
    id: 'valet',
    name: 'Standard Interior Valet',
    price: 35,
    description: 'Our most popular choice for daily drivers. A deep interior vacuum, steam sanitization, and upholstery treatment.',
    icon: 'sanitizer',
    isBestValue: true,
    features: [
      'Deep Vacuum & Boot Clean',
      'Steam Sanitization of Surfaces',
      'Dash & Trim Dressing',
      'Floor Mats Scrubbed',
      'Pet & Odour Refresh'
    ]
  },
  {
    id: 'deep',
    name: 'Signature Deep Interior Clean',
    price: 55,
    description: 'Concierge-level interior detailing. Intensive stain removal, leather conditioning, and full anti-bacterial deep cleanse.',
    icon: 'clean_hands',
    features: [
      'Full Upholstery Extraction',
      'Leather Clean & Condition',
      'Deep Stain Removal',
      'Headlining Cleaned',
      'Air Vent Detailing'
    ]
  }
];

export const ADD_ONS: AddOn[] = [
  {
    id: 'pet',
    name: 'Pet Hair Removal',
    price: 10,
    icon: 'pets'
  },
  {
    id: 'mess',
    name: 'Heavy Mess',
    price: 12.50,
    icon: 'cleaning_services'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    text: '"Clean Stars completely transformed my SUV\'s cabin. The signature interior clean actually exceeded my expectations. Best detailing in Bognor by far."',
    author: 'Verified Local Customer'
  }
];
