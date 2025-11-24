import { Property, PropertyType, SafariItinerary } from './types';

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Mt Kenya Homes', path: '/mt-kenya-homes' },
  { label: 'Safaris', path: '/safaris' },
  { label: 'Apartments', path: '/apartments' },
  { label: 'Others', path: '/others' },
];

export const PROPERTIES: Property[] = [
  {
    id: 'laurel-hill-1br',
    name: 'Laurel Hill Suites: 1BR En-suite',
    type: PropertyType.APARTMENT,
    location: 'Mawensi Road, Upperhill, Nairobi',
    price: 'Ksh 8,400 / Night',
    description: 'Fully furnished 1-bedroom en-suite apartment in the heart of Upperhill. Ideal for business travelers or couples. Available for short stays, long-term leasing, or purchase.',
    highlights: [
      'Sale Price: Ksh 10.5 M',
      'Long-term: Ksh 170K / Month (+1 mo deposit)',
      'Short-term: Ksh 8,400 / Night',
      'Business District Location'
    ],
    amenities: ['Wifi', 'En-suite', 'Furnished', 'Security'],
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2080&auto=format&fit=crop', // Modern apartment
    galleryLink: 'https://www.dropbox.com/scl/fo/zf4y76iwupbmfx62uz5wa/AFc0v7tejoPuXq6sb1UcXBo?rlkey=ecnt36urs7rjtkt315w61wlpe&st=uhutmprf&dl=0'
  },
  {
    id: 'alba-gardens-2br',
    name: 'Alba Gardens: 2BR Luxury Suite',
    type: PropertyType.APARTMENT,
    location: 'Kiota Road, Kilimani, Nairobi',
    price: 'Ksh 14,400 / Night',
    description: 'Spacious 2-bedroom en-suite apartment in the vibrant Kilimani area. Features elegant finishing and close proximity to shopping centers and restaurants.',
    highlights: [
      'Long-term: Ksh 250,000 / Month (+1 mo deposit)',
      'Short-term: Ksh 14,400 / Night',
      'Fully Furnished',
      'Premium Amenities'
    ],
    amenities: ['Wifi', 'Pool', 'Gym', 'Security', 'En-suite'],
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2070&auto=format&fit=crop', // Luxury living room
    galleryLink: 'https://www.dropbox.com/scl/fo/xi4ppt0xsc0hssghhb9bq/AKXWSMx4v6GLw26RwVDxUz8?rlkey=4ojl4ccctypa8tqwo1bmkaqlo&st=00n951y2&dl=0'
  },
  {
    id: 'narumoru-villa',
    name: 'Narumoru Mountain-side Villas',
    type: PropertyType.VILLA,
    location: 'Narumoru, Mt. Kenya',
    price: 'Ksh 60,000 / Night (Full House)',
    description: 'Two fully furnished mountain-side vacation villas accommodating up to 6 pax. Located in Narumoru with breathtaking views of Mt. Kenya. Minimum stay 2 nights. Offers access to horse riding, fishing, and climbing.',
    highlights: [
      'Full House (4-6 pax): Ksh 60,000 / Night',
      'Couple Rate: $120 USD / Person',
      'Long-term: Ksh 270,000 / Month',
      'Full Board Option: Ksh 6,000 / Person',
      'Chef Available: Ksh 2,000 / Day'
    ],
    amenities: ['Housekeeper', 'Gardener', 'Security', 'Wifi', 'Full Board Option'],
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop', // Mountain house
    galleryLink: 'https://www.dropbox.com/scl/fi/rgs8efusjp648j9lp9wsy/Our-Naromoru-Property.mp4?rlkey=vxfbf106nkdx2316ewxxso4gk&e=1&st=ysccfx73&dl=0'
  }
];

export const SAFARIS: SafariItinerary[] = [
  {
    id: 'safari-1',
    title: 'The Great Migration Experience',
    duration: '5 Days / 4 Nights',
    description: 'Witness the greatest show on earth in the Masai Mara combined with the luxury of private tented camps.',
    image: 'https://picsum.photos/seed/safari1/800/600',
    highlights: ['Game Drives', 'Bush Breakfast', 'Masai Cultural Visit'],
    timeline: [
      { day: 1, title: 'Arrival in Nairobi', description: 'VIP Airport pickup and transfer to Hemingways Nairobi.' },
      { day: 2, title: 'Flight to Masai Mara', description: 'Scenic flight over the Rift Valley. Afternoon game drive.' },
      { day: 3, title: 'The Migration', description: 'Full day game drive witnessing the wildebeest crossing.' },
      { day: 4, title: 'Bush Culture', description: 'Morning walking safari and visit to a local Masai village.' },
      { day: 5, title: 'Return', description: 'Breakfast in the bush before flight back to Nairobi.' },
    ]
  },
  {
    id: 'safari-2',
    title: 'Mt. Kenya & Samburu Explorer',
    duration: '6 Days / 5 Nights',
    description: 'A blend of high-altitude adventure and the arid beauty of Samburu. Unique wildlife and breathtaking landscapes.',
    image: 'https://picsum.photos/seed/safari2/800/600',
    highlights: ['Reticulated Giraffes', 'Mt Kenya Hike', 'Elephant Watch'],
    timeline: [
      { day: 1, title: 'Nanyuki Arrival', description: 'Transfer to Mt Kenya Safari Club.' },
      { day: 2, title: 'Mountain Slopes', description: 'Guided hike to the Mau Mau caves and equator crossing.' },
      { day: 3, title: 'Drive to Samburu', description: 'Scenic drive north. Evening game drive looking for leopards.' },
      { day: 4, title: 'Samburu Special 5', description: 'Tracking the unique species found only in this region.' },
      { day: 5, title: 'River Camp', description: 'Relaxation by the Ewaso Nyiro river.' },
      { day: 6, title: 'Departure', description: 'Flight back to Nairobi Wilson Airport.' },
    ]
  }
];

export const COFFEE_PRODUCTS = [
  {
    id: 'coffee-1',
    name: 'Mt. Elgon Reserve',
    roast: 'Medium Roast',
    notes: 'Blackcurrant, Honey, Citrus',
    price: '$25.00',
    image: 'https://picsum.photos/seed/coffee1/400/400'
  },
  {
    id: 'coffee-2',
    name: 'Manyatta Gold',
    roast: 'Dark Roast',
    notes: 'Dark Chocolate, Spice, Caramel',
    price: '$28.00',
    image: 'https://picsum.photos/seed/coffee2/400/400'
  }
];