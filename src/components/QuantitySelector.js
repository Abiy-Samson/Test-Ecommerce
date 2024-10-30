// src/components/QuantitySelector.js
import React, { useState } from 'react';
import styled from 'styled-components';

const QuantitySelector = ({ onQuantityChange }) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  return (
    <SelectorContainer>
      <label htmlFor="quantity">Quantity:</label>
      <QuantityInput
        type="number"
        id="quantity"
        min="1"
        value={quantity}
        onChange={handleChange}
      />
    </SelectorContainer>
  );
};

const SelectorContainer = styled.div`
  display: flex;
  text-align:center; 
  flex-direction: column;
  gap: 0.3rem;
  padding: 1rem 0;
`;

const QuantityInput = styled.input`
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 80%;
`;

export default QuantitySelector;
