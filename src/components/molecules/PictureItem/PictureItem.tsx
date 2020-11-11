import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const PictureItem = ({ id, urlSmall, alt, clicked }) => (
  <StyledWrapper id={id} onClick={clicked} data-testid="picture-item">
    <StyledImage src={urlSmall} alt={alt} />
  </StyledWrapper>
);

PictureItem.propTypes = {
  id: PropTypes.string.isRequired,
  urlSmall: PropTypes.string.isRequired,
  alt: PropTypes.string,
  clicked: PropTypes.func.isRequired,
};

PictureItem.defaultProps = {
  alt: 'image',
};

export default PictureItem;
