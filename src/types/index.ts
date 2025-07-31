export interface Property {
  id: string;
  name: string;
  location: string;
  price: number;
  currency: string;
  images: string[];
  currentImageIndex: number;
}

export interface BookingOnHoldData {
  customerName: string;
  propertyName: string;
  bookingId: string;
  estimatedResponseTime: string;
  contactInfo: {
    phone1: string;
    phone2: string;
  };
  nearbyProperties: Property[];
}

export interface BookingOnHoldProps {
  data: BookingOnHoldData;
  onUnconfirmedBookingClick: () => void;
  onPropertyBookNow: (propertyId: string) => void;
  onPropertyImageChange?: (propertyId: string, imageIndex: number) => void;
} 