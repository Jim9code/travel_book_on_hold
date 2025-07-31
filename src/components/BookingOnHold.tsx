import React, { useState } from 'react';
import { BookingOnHoldProps, Property } from '../types';
import PropertyCard from './PropertyCard';
import {
  Container,
  Banner,
  MessageSection,
  UnconfirmedSection,
  WarningContent,
  WarningText,
  WarningIcon,
  HotelImage,
  UnconfirmedButton,
  NearbySection,
  SectionTitle,
  PropertiesContainer,
  ContactSection,
  ContactTitle,
  ContactInfo
} from './styles';

const BookingOnHold: React.FC<BookingOnHoldProps> = ({
  data,
  onUnconfirmedBookingClick,
  onPropertyBookNow,
  onPropertyImageChange
}) => {
  const [properties, setProperties] = useState<Property[]>(data.nearbyProperties);

  const handlePropertyImageChange = (propertyId: string, imageIndex: number) => {
    setProperties(prev => 
      prev.map(property => 
        property.id === propertyId 
          ? { ...property, currentImageIndex: imageIndex }
          : property
      )
    );
    
    if (onPropertyImageChange) {
      onPropertyImageChange(propertyId, imageIndex);
    }
  };

  return (
    <Container>
      <Banner>
        Booking 'On-Hold'
      </Banner>
      
      <MessageSection>
        Dear {data.customerName},
        <br /><br />
        This booking is on hold - we apologize. We are unable to reach {data.propertyName} and cannot confirm your booking request, at the moment. Please bear with us while our agents follow-up to arrive at a response. We will be reaching out to you within {data.estimatedResponseTime} via a call/email to assist.
      </MessageSection>

      <UnconfirmedSection>
        <WarningContent>
          <WarningText>
            NEED A BOOKING WITHOUT HAVING IT CONFIRMED? WE CANNOT GUARANTY ROOM AVAILABILITY.
          </WarningText>
          <WarningIcon>!</WarningIcon>
        </WarningContent>
        <HotelImage 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop" 
          alt="Hotel room"
        />
      </UnconfirmedSection>

      <UnconfirmedButton onClick={onUnconfirmedBookingClick}>
        CLICK HERE!
      </UnconfirmedButton>

      <NearbySection>
        <SectionTitle>Available properties nearby</SectionTitle>
        <PropertiesContainer>
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onBookNow={onPropertyBookNow}
              onImageChange={handlePropertyImageChange}
            />
          ))}
        </PropertiesContainer>
      </NearbySection>

      <ContactSection>
        <ContactTitle>For Help, Contact us</ContactTitle>
        <ContactInfo>
          Telephone 1: {data.contactInfo.phone1}
          <br />
          Telephone 2: {data.contactInfo.phone2}
        </ContactInfo>
      </ContactSection>
    </Container>
  );
};

export default BookingOnHold; 