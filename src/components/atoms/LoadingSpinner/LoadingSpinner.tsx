import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: translateX(-50%) rotate(0deg)
  }

  to {
    transform: translateX(-50%) rotate(360deg)
  }
`;

const StyledLoadingSpinner = styled.div<Props>`
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.5rem;
  color: white;
  animation: ${rotate} 2s linear infinite;

  ${({ center }) =>
    center &&
    css`
      bottom: 50%;
      font-size: 4rem;
    `}
`;

type Props = {
  center?: boolean
}

const LoadingSpinner: React.FC<Props> = ({ center }) => (
  <StyledLoadingSpinner center={center} data-testid="loading-spinner">
    <i className="fas fa-spinner" />
  </StyledLoadingSpinner>
);

export default LoadingSpinner;
