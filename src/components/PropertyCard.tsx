import React from 'react';
import { Property } from '../types';
import {
  PropertyCard as StyledPropertyCard,
  PropertyImageContainer,
  PropertyImage,
  PropertyInfo,
  PropertyPrice,
  ImageNavigation,
  BookNowButton
} from './styles';

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
    <StyledPropertyCard>
      <PropertyImageContainer>
        <PropertyImage 
          src={property.images[property.currentImageIndex]} 
          alt={`${property.name} - ${property.location}`}
        />
        <PropertyInfo>
          {property.name}, {property.location}
        </PropertyInfo>
        <PropertyPrice>
          {formatPrice(property.price, property.currency)}
        </PropertyPrice>
        {property.images.length > 1 && (
          <ImageNavigation onClick={handleImageChange}>
            &gt;&gt;
          </ImageNavigation>
        )}
      </PropertyImageContainer>
      <BookNowButton onClick={() => onBookNow(property.id)}>
        BOOK NOW
      </BookNowButton>
    </StyledPropertyCard>
  );
};

export default PropertyCard; 