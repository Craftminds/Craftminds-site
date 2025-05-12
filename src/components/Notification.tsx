import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const NotificationContainer = styled.div<{ type: 'success' | 'error' }>`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 16px 24px;
  border-radius: 8px;
  background: ${props => props.type === 'success' ? 'var(--color-success)' : 'var(--color-error)'};
  color: white;
  box-shadow: var(--shadow-lg);
  z-index: 1000;
  animation: ${slideIn} 0.3s ease-out;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Icon = styled.span`
  font-size: 20px;
`;

interface NotificationProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <NotificationContainer type={type}>
      <Icon>{type === 'success' ? '✓' : '✕'}</Icon>
      {message}
    </NotificationContainer>
  );
};

export default Notification; 