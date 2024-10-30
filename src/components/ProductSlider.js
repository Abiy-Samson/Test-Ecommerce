// src/components/ProductSlider.js
import React, { useState } from 'react';
import styled from 'styled-components';
import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';
import product3 from '../assets/product3.jpg';

const images = [product1, product2, product3];

const ProductSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <SliderContainer>
      <Image src={images[currentImage]} alt="Product" />
      <SliderControls>
        <button onClick={handlePrev}>❮</button>
        <button onClick={handleNext}>❯</button>
      </SliderControls>
    </SliderContainer>
  );
};

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const SliderControls = styled.div`
  position: absolute;
  bottom: 10px;
  display: flex;
  gap: 1rem;

  button {
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export default ProductSlider;
