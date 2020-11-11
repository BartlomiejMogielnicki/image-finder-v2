import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { fetchSinglePicture } from '../../../utils/index';

import PictureItem from '../../molecules/PictureItem/PictureItem';
import PictureModal from '../PictureModal/PictureModal';

const StyledListWrapper = styled.ul`
  width: 100%;
  max-width: 1350px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(425px, 1fr));
  grid-auto-rows: minmax(50px, auto);
  grid-gap: 20px 10px;
`;

const StyledError = styled.div`
  padding: 5px 10px;
  position: fixed;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  background-color: black;
  border: 2px solid red;
  color: red;
  font-size: 1.5rem;
  z-index: 1001;
`;

const PicturesGallery = ({ picturesArray }) => {
  const [modalPicture, setModalPicture] = useState('');
  const [modalPictureIndex, setModalPictureIndex] = useState('');
  const [isModalError, setIsModalError] = useState(false);

  const handleGetPicture = async (id, index) => {
    setIsModalError(false);
    const fetchedPicture = await fetchSinglePicture(id);
    if (fetchedPicture instanceof Error) {
      setIsModalError(true);
    } else {
      setIsModalError(false);
      setModalPicture(fetchedPicture);
      setModalPictureIndex(index);
    }
  };

  const handleHideModal = () => {
    setModalPicture('');
  };

  const handleChangeModalPicture = (index) => {
    handleGetPicture(picturesArray[index].id, index);
  };

  const pictures = picturesArray.map((picture, index) => (
    <PictureItem
      key={picture.id}
      id={picture.id}
      urlSmall={picture.url.small}
      alt={picture.alt}
      clicked={() => handleGetPicture(picture.id, index)}
    />
  ));

  return (
    <StyledListWrapper data-testid="pictures-gallery">
      {pictures}
      {isModalError && (
        <StyledError>Connection failed... Please try again.</StyledError>
      )}
      {modalPicture && (
        <PictureModal
          picture={modalPicture}
          pictureIndex={+modalPictureIndex}
          lastIndex={picturesArray.length - 1}
          hideModal={handleHideModal}
          changePicture={handleChangeModalPicture}
        />
      )}
    </StyledListWrapper>
  );
};

PicturesGallery.propTypes = {
  picturesArray: PropTypes.arrayOf(PropTypes.object),
};

PicturesGallery.defaultProps = {
  picturesArray: null,
};

export default PicturesGallery;
