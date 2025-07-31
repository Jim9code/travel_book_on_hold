import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Banner = styled.div`
  background: linear-gradient(135deg, #4CAF50, #45a049);
  color: white;
  padding: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  
  @media (max-width: 768px) {
    padding: 16px;
    font-size: 18px;
  }
`;

export const MessageSection = styled.div`
  padding: 40px;
  line-height: 1.8;
  color: #333;
  font-size: 16px;
  
  @media (max-width: 768px) {
    padding: 20px;
    font-size: 14px;
    line-height: 1.6;
  }
`;

export const UnconfirmedSection = styled.div`
  background: #f5f5f5;
  margin: 40px;
  padding: 30px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (max-width: 768px) {
    margin: 20px;
    padding: 20px;
    gap: 15px;
    border-radius: 12px;
  }
`;

export const WarningContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 15px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
    text-align: center;
  }
`;

export const WarningText = styled.div`
  font-size: 16px;
  color: #333;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 14px;
    width: 100%;
  }
`;

export const WarningIcon = styled.div`
  width: 24px;
  height: 24px;
  background: #ff4444;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 14px;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
    font-size: 18px;
  }
`;

export const HotelImage = styled.img`
  width: 160px;
  height: 120px;
  border-radius: 16px;
  object-fit: cover;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 100px;
    height: 75px;
    border-radius: 12px;
  }
`;

export const UnconfirmedButton = styled.button`
  background: linear-gradient(135deg, #2E7D32, #1B5E20);
  color: white;
  border: none;
  padding: 20px 40px;
  border-radius: 30px;
  font-weight: bold;
  font-size: 18px;
  margin: 0 40px;
  width: calc(100% - 80px);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(46, 125, 50, 0.3);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    padding: 16px 32px;
    border-radius: 25px;
    font-size: 16px;
    margin: 0 20px;
    width: calc(100% - 40px);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(46, 125, 50, 0.3);
    }
  }
`;

export const NearbySection = styled.div`
  padding: 40px;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 25px;
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

export const PropertiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 25px;
  padding-bottom: 20px;
  
  @media (max-width: 768px) {
    display: flex;
    gap: 15px;
    overflow-x: auto;
    padding-bottom: 10px;
    
    &::-webkit-scrollbar {
      height: 4px;
    }
    
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 2px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 2px;
    }
  }
`;

export const PropertyCard = styled.div`
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.15);
  }
  
  @media (max-width: 768px) {
    min-width: 280px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.12);
    }
  }
`;

export const PropertyImageContainer = styled.div`
  position: relative;
  height: 220px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 180px;
  }
`;

export const PropertyImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PropertyInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  color: white;
  font-weight: bold;
  font-size: 16px;
  text-shadow: 0 2px 4px rgba(0,0,0,0.8);
  
  @media (max-width: 768px) {
    left: 12px;
    font-size: 14px;
    text-shadow: 0 1px 2px rgba(0,0,0,0.7);
  }
`;

export const PropertyPrice = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  background: white;
  color: #ff4444;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  
  @media (max-width: 768px) {
    top: 12px;
    right: 12px;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
  }
`;

export const ImageNavigation = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0,0,0,0.8);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    right: 12px;
    bottom: 12px;
    font-size: 16px;
    text-shadow: 0 1px 2px rgba(0,0,0,0.7);
  }
`;

export const BookNowButton = styled.button`
  width: 100%;
  background: white;
  color: #2E7D32;
  border: 2px solid #2E7D32;
  padding: 16px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #2E7D32;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(46, 125, 50, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 12px;
    font-size: 14px;
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(46, 125, 50, 0.3);
    }
  }
`;

export const ContactSection = styled.div`
  padding: 40px;
  text-align: left;
  background: #f9f9f9;
  margin-top: 40px;
  
  @media (max-width: 768px) {
    padding: 20px;
    margin-top: 20px;
  }
`;

export const ContactTitle = styled.div`
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
  font-size: 18px;
  
  @media (max-width: 768px) {
    margin-bottom: 10px;
    font-size: 16px;
  }
`;

export const ContactInfo = styled.div`
  color: #666;
  font-size: 16px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.5;
  }
`; 