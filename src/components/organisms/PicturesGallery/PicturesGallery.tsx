import React, { useState } from 'react';
import styled from 'styled-components';

import { fetchSinglePicture } from '../../../utils/index';
import type {Picture} from '../../../types/index';

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

type Props = {
  picturesArray: Picture[],
}

const PicturesGallery: React.FC<Props> = ({ picturesArray }) => {
  const [modalPicture, setModalPicture] = useState<Picture | null>(null);
  const [modalPictureIndex, setModalPictureIndex] = useState<number>(0);
  const [isModalError, setIsModalError] = useState<boolean>(false);

  const handleGetPicture = async (id: string, index: number) => {
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
    setModalPicture(null);
  };

  const handleChangeModalPicture = (index: number) => {
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

export default PicturesGallery;
