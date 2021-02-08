import React, { useState } from 'react';
import Masonry from 'react-masonry-css'
import styled from 'styled-components';

import { fetchSinglePicture } from 'utils/index';
import type {Picture} from 'types/index';

import PictureItem from 'components/molecules/PictureItem/PictureItem';
import PictureModal from 'components/organisms/PictureModal/PictureModal';

const StyledListWrapper = styled.ul`
  width: 100%;
  max-width: 1350px;
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
    const fetchedPicture: Picture = await fetchSinglePicture(id);
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

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <StyledListWrapper data-testid="pictures-gallery">
      <Masonry  breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
      {pictures}
      </Masonry>
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
