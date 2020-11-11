import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.li`
  width: 100%;
  max-width: 425px;
  justify-self: center;
  cursor: zoom-in;

  @media (max-width: 500px) {
    width: 80%;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 400px;
  object-fit: cover;
  transition: 0.3s;

  :hover {
    transform: scale(1.05);
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
