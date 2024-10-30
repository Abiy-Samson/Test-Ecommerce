// src/components/ToastNotification.js
import React, { useEffect } from 'react';
import styled from 'styled-components';

const ToastNotification = ({ message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return show ? <Toast>{message}</Toast> : null;
};

const Toast = styled.div`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: #333;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
`;

export default ToastNotification;
