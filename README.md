# Hotel Booking On-Hold React Components

A React TypeScript implementation of a hotel booking "on-hold" notification page with mobile-friendly responsive design.

## Features

- 📱 Mobile-first responsive design
- 🎨 Modern UI with styled-components
- 🔄 Dynamic data from backend
- 🖼️ Image carousel for property photos
- 📞 Contact information display
- ⚡ TypeScript for type safety

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

### Basic Usage

```tsx
import BookingOnHold from './components/BookingOnHold';
import { BookingOnHoldData } from './types';

const App = () => {
  const bookingData: BookingOnHoldData = {
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
          "https://example.com/image1.jpg",
          "https://example.com/image2.jpg"
        ],
        currentImageIndex: 0
      }
    ]
  };

  const handleUnconfirmedBookingClick = () => {
    // Handle unconfirmed booking logic
    console.log('Unconfirmed booking clicked');
  };

  const handlePropertyBookNow = (propertyId: string) => {
    // Handle property booking
    console.log('Book now for property:', propertyId);
  };

  return (
    <BookingOnHold
      data={bookingData}
      onUnconfirmedBookingClick={handleUnconfirmedBookingClick}
      onPropertyBookNow={handlePropertyBookNow}
    />
  );
};
```

### Data Structure

#### BookingOnHoldData
```typescript
interface BookingOnHoldData {
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
```

#### Property
```typescript
interface Property {
  id: string;
  name: string;
  location: string;
  price: number;
  currency: string;
  images: string[];
  currentImageIndex: number;
}
```

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `data` | `BookingOnHoldData` | Yes | The booking data to display |
| `onUnconfirmedBookingClick` | `() => void` | Yes | Callback when "CLICK HERE!" button is pressed |
| `onPropertyBookNow` | `(propertyId: string) => void` | Yes | Callback when "BOOK NOW" button is pressed |
| `onPropertyImageChange` | `(propertyId: string, imageIndex: number) => void` | No | Callback when property image is changed |

## Components

### BookingOnHold
The main component that renders the complete booking on-hold page.

### PropertyCard
A sub-component that displays individual property information with:
- Property image with navigation
- Property name and location
- Price display
- Book now button

## Styling

The components use styled-components for styling with:
- Mobile-first responsive design
- Modern gradients and shadows
- Smooth hover animations
- Custom scrollbars for property carousel

## Backend Integration

To integrate with your backend:

1. **Fetch booking data:**
```tsx
const [bookingData, setBookingData] = useState<BookingOnHoldData | null>(null);

useEffect(() => {
  const fetchBookingData = async () => {
    try {
      const response = await fetch('/api/booking/on-hold');
      const data = await response.json();
      setBookingData(data);
    } catch (error) {
      console.error('Error fetching booking data:', error);
    }
  };
  
  fetchBookingData();
}, []);
```

2. **Handle booking actions:**
```tsx
const handlePropertyBookNow = async (propertyId: string) => {
  try {
    const response = await fetch('/api/booking/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ propertyId }),
    });
    
    if (response.ok) {
      // Navigate to booking confirmation page
      window.location.href = '/booking-confirmation';
    }
  } catch (error) {
    console.error('Error creating booking:', error);
  }
};
```

## Customization

### Colors
Modify the styled components in `src/components/styles.ts` to change colors, gradients, and styling.

### Layout
Adjust the `Container` component's `max-width` property to change the layout width.

### Images
Replace the placeholder images with your actual hotel images by updating the `images` array in the property data.

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## License

MIT License - feel free to use this in your projects. "# travel_book_on_hold" 
