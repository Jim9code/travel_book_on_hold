import React from 'react';
import BookingOnHold from './components/BookingOnHold';
import { BookingOnHoldData } from './types';

const App: React.FC = () => {
  // Sample data - this would come from your backend
  const sampleData: BookingOnHoldData = {
    customerName: "John Doe",
    propertyName: "Grand Hotel Lagos",
    bookingId: "BK123456789",
    estimatedResponseTime: "5 minutes",
    contactInfo: {
      phone1: "+234 (0) -806-232-3629",
      phone2: "+234(0) -806-264-4248"
    },
    nearbyProperties: [
      {
        id: "prop1",
        name: "The George Hotel",
        location: "Ikoyi",
        price: 5000,
        currency: "NGN",
        images: [
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop"
        ],
        currentImageIndex: 0
      },
      {
        id: "prop2",
        name: "Lagos Continental Hotel",
        location: "Victoria Island",
        price: 7500,
        currency: "NGN",
        images: [
          "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop"
        ],
        currentImageIndex: 0
      },
      {
        id: "prop3",
        name: "Eko Hotels & Suites",
        location: "Victoria Island",
        price: 12000,
        currency: "NGN",
        images: [
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop"
        ],
        currentImageIndex: 0
      }
    ]
  };

  const handleUnconfirmedBookingClick = () => {
    console.log('Unconfirmed booking button clicked');
    // Handle unconfirmed booking logic here
    // e.g., navigate to booking page, show modal, etc.
  };

  const handlePropertyBookNow = (propertyId: string) => {
    console.log('Book now clicked for property:', propertyId);
    // Handle booking logic here
    // e.g., navigate to booking page with property details
  };

  const handlePropertyImageChange = (propertyId: string, imageIndex: number) => {
    console.log('Image changed for property:', propertyId, 'to index:', imageIndex);
    // Handle image change logic here if needed
    // e.g., update backend, analytics, etc.
  };

  return (
    <div className="App">
      <BookingOnHold
        data={sampleData}
        onUnconfirmedBookingClick={handleUnconfirmedBookingClick}
        onPropertyBookNow={handlePropertyBookNow}
        onPropertyImageChange={handlePropertyImageChange}
      />
    </div>
  );
};

export default App; 