import React from 'react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  onBookNow: (propertyId: string) => void;
  onImageChange?: (propertyId: string, imageIndex: number) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onBookNow,
  onImageChange
}) => {
  const handleImageChange = () => {
    if (onImageChange && property.images.length > 1) {
      const nextIndex = (property.currentImageIndex + 1) % property.images.length;
      onImageChange(property.id, nextIndex);
    }
  };

  const formatPrice = (price: number, currency: string) => {
    return `${currency}${price.toLocaleString()}`;
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md relative transition-all duration-300 hover-lift min-w-72 md:rounded-2xl md:shadow-lg md:min-w-0">
      <div className="relative h-36 overflow-hidden md:h-56">
        <img 
          src={property.images[property.currentImageIndex]} 
          alt={`${property.name} - ${property.location}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-3 transform -translate-y-1/2 text-white font-bold text-sm drop-shadow-lg md:top-1/2 md:left-4 md:text-base md:drop-shadow-lg">
          {property.name}, {property.location}
        </div>
        <div className="absolute top-3 right-3 bg-white text-booking-red px-2 py-1 rounded-xl text-xs font-bold shadow-lg md:top-4 md:right-4 md:px-3 md:py-1.5 md:rounded-2xl md:text-sm">
          {formatPrice(property.price, property.currency)}
        </div>
        {property.images.length > 1 && (
          <div 
            onClick={handleImageChange}
            className="absolute right-3 bottom-3 text-white text-base font-bold drop-shadow-lg cursor-pointer transition-all duration-200 hover:scale-110 md:right-4 md:bottom-4 md:text-lg md:drop-shadow-lg"
          >
            &gt;&gt;
          </div>
        )}
      </div>
      <button 
        onClick={() => onBookNow(property.id)}
        className="w-full bg-white text-booking-green-dark border-2 border-booking-green-dark py-3 font-bold text-sm cursor-pointer transition-all duration-300 hover:bg-booking-green-dark hover:text-white hover:-translate-y-0.5 hover:shadow-md md:py-4 md:text-base"
      >
        BOOK NOW
      </button>
    </div>
  );
};

export default PropertyCard; 