import React, { useState } from 'react';
import { BookingOnHoldProps, Property } from '../types';
import PropertyCard from './PropertyCard';

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
    <div className="max-w-6xl mx-auto bg-white min-h-screen font-sans">
      <div className="bg-gradient-to-br from-booking-green-light to-booking-green text-white py-5 text-center font-bold text-2xl shadow-md md:py-6 md:text-3xl">
        Booking 'On-Hold'
      </div>
      
      <div className="px-10 py-10 leading-relaxed text-gray-800 text-base md:px-10 md:py-10 md:text-base md:leading-loose">
        Dear {data.customerName},
        <br /><br />
        This booking is on hold - we apologize. We are unable to reach {data.propertyName} and cannot confirm your booking request, at the moment. Please bear with us while our agents follow-up to arrive at a response. We will be reaching out to you within {data.estimatedResponseTime} via a call/email to assist.
      </div>

      <div className="bg-gray-100 mx-5 p-5 rounded-xl flex items-center gap-4 md:mx-10 md:p-8 md:gap-5 md:rounded-2xl">
        <div className="flex-1 flex flex-col items-center gap-3 text-center md:flex-row md:items-center md:gap-4 md:text-left">
          <div className="text-sm text-gray-800 font-medium md:text-base">
            NEED A BOOKING WITHOUT HAVING IT CONFIRMED? WE CANNOT GUARANTY ROOM AVAILABILITY.
          </div>
          <div className="w-8 h-8 bg-booking-red rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 md:w-6 md:h-6 md:text-sm">
            !
          </div>
        </div>
        <img 
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop" 
          alt="Hotel room"
          className="w-20 h-15 rounded-lg object-cover flex-shrink-0 md:w-40 md:h-30 md:rounded-2xl"
        />
      </div>

      <button 
        onClick={onUnconfirmedBookingClick}
        className="bg-gradient-to-br from-booking-green-dark to-booking-green-darker text-white border-none py-4 px-8 rounded-full font-bold text-base mx-5 w-calc-full-minus-40 cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:shadow-booking-green-dark/30 active:-translate-y-0.5 md:py-5 md:px-10 md:rounded-full md:text-lg md:mx-10 md:w-calc-full-minus-80"
      >
        CLICK HERE!
      </button>

      <div className="px-5 py-10 md:px-10 md:py-10">
        <h2 className="text-xl font-bold text-gray-800 mb-4 md:text-3xl md:mb-6">Available properties nearby</h2>
        <div className="flex gap-4 overflow-x-auto pb-3 custom-scrollbar md:grid md:grid-cols-auto-fit md:gap-6 md:pb-5">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onBookNow={onPropertyBookNow}
              onImageChange={handlePropertyImageChange}
            />
          ))}
        </div>
      </div>

      <div className="px-5 py-5 text-left bg-gray-50 mt-5 md:px-10 md:py-10 md:mt-10">
        <div className="font-bold text-gray-800 mb-3 text-base md:mb-4 md:text-lg">For Help, Contact us</div>
        <div className="text-gray-600 text-sm leading-relaxed md:text-base md:leading-relaxed">
          Telephone 1: {data.contactInfo.phone1}
          <br />
          Telephone 2: {data.contactInfo.phone2}
        </div>
      </div>
    </div>
  );
};

export default BookingOnHold; 