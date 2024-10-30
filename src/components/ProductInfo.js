// src/components/ProductInfo.js
import React from 'react';
import styled from 'styled-components';

const ProductInfo = () => {
  return (
    <InfoContainer>
      <ProductName>Minimalist Product</ProductName>
      <ProductDescription>The Best product in the world with a good Price, It is one of the Top brand quality item in 2024.</ProductDescription>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  text-align: center;
  padding: 1rem;
`;

const ProductName = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

export default ProductInfo;
