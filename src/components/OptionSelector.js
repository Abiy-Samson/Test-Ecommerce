// src/components/OptionSelector.js
import React, { useState } from 'react';
import styled from 'styled-components';

const OptionSelector = () => {
  const [size, setSize] = useState('Medium');

  return (
    <SelectorContainer>
      <label htmlFor="size">Select Size:</label>
      <Select id="size" value={size} onChange={(e) => setSize(e.target.value)}>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </Select>
    </SelectorContainer>
  );
};

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centers label and select */
  gap: 0.5rem;
  padding: 1rem 0;
  width: 65%; /* Ensures full-width alignment */
`;

const Select = styled.select`
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 60%;
  max-width: 200px; /* Ensures the dropdown remains compact */
`;

export default OptionSelector;
