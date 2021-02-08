import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.li`
  margin-top: 20px;
  width: 100%;
  max-width: 450px;
  justify-self: center;
  text-align: center;
  cursor: zoom-in;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 450px;
  object-fit: cover;
  transition: 0.3s;

  :hover {
    transform: scale(1.05);
  }

  @media (max-width: 500px) {
    width: 80%;
  }
`;

type Props = {
  id: string,
  urlSmall: string,
  alt: string,
  clicked: () => void,
}

const PictureItem: React.FC<Props>= ({ id, urlSmall, alt, clicked }) => (
  <StyledWrapper id={id} onClick={clicked} data-testid="picture-item">
    <StyledImage src={urlSmall} alt={alt} />
  </StyledWrapper>
);

export default PictureItem;
