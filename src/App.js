// src/App.js
import React, { useState } from 'react';
import styled from 'styled-components';
import ProductSlider from './components/ProductSlider';
import ProductInfo from './components/ProductInfo';
import OptionSelector from './components/OptionSelector';
import QuantitySelector from './components/QuantitySelector';
import ToastNotification from './components/ToastNotification';

const App = () => {
  const [showToast, setShowToast] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    setShowToast(true);
  };

  return (
    <AppContainer>
      <ContentContainer>
        <ProductSlider />
        <ProductInfo />

        {/* Centered panel for Option Selector and Quantity */}
        <PanelContainer>
          <OptionSelector />
          <QuantitySelector onQuantityChange={setQuantity} />
        </PanelContainer>

        <AddToCartButton onClick={handleAddToCart}>
          Add to Cart (${quantity * 50})
        </AddToCartButton>

        {/* Footer text inside the content container */}
        <Footer> Developed Test E-commerce Website by Abiy Samson Aklile</Footer>
      </ContentContainer>

      <ToastNotification
        message="Item added to cart"
        show={showToast}
        onClose={() => setShowToast(false)}
      />
    </AppContainer>
  );
};

// Styling for main containers and components
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  gap: 1.5rem;
  background-color: #f9f9f9;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 1.5rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  background-color: white;
`;

const PanelContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 0;
  width: 100%;
  gap: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f5f5f5;
`;

const AddToCartButton = styled.button`
  padding: 0.7rem;
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  color: white;
  background-color: #007bff;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;

const Footer = styled.footer`
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #666;
  text-align: center;
`;

export default App;
