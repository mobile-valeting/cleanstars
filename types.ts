
export enum View {
  HOME = 'home',
  FLEET = 'fleet',
  BOOKINGS = 'bookings'
}

export interface Service {
  id: string;
  name: string;
  price: number;
  description: string;
  icon: string;
  features: string[];
  isBestValue?: boolean;
}

export interface AddOn {
  id: string;
  name: string;
  price: number;
  icon: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
}
