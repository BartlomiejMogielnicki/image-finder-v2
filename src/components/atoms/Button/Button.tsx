import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button<StyledButtonProps>`
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  font-size: 5rem;
  color: white;

  @media (max-width: 1400px) and (orientation: portrait) {
    bottom: -50px;
  }

  ${({ leftArrow }) =>
    leftArrow &&
    css`
      left: -100px;

      @media (max-width: 1400px) and (orientation: portrait) {
        left: 50%;
        transform: translate(-150%, 50%);
      }
    `}

  ${({ rightArrow }) =>
    rightArrow &&
    css`
      right: -100px;

      @media (max-width: 1400px) and (orientation: portrait) {
        right: 50%;
        transform: translate(150%, 50%);
      }
    `}
`;

type StyledButtonProps = {
  leftArrow?: boolean,
  rightArrow?: boolean,
}

type ButtonProps = {
  clicked: () => void,
  children: React.ReactNode,
  leftArrow?: boolean,
  rightArrow?: boolean,
}

const Button: React.FC<ButtonProps> = ({ clicked, children, leftArrow, rightArrow}) => (
  <StyledButton
    onClick={clicked}
    leftArrow={leftArrow}
    rightArrow={rightArrow}
    data-testid="button"
  >
    {children}
  </StyledButton>
);

export default Button;
