import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { fetchPictures } from '../utils/index';
import type {Picture} from '../types/index';

import image1 from '../images/image1.jpg';
import SearchForm from '../components/molecules/SearchForm/SearchForm';
import PicturesGallery from '../components/organisms/PicturesGallery/PicturesGallery';
import LoadingSpinner from '../components/atoms/LoadingSpinner/LoadingSpinner';

const showIn = keyframes`
from {
  background-color: rgba(0, 0, 0, .7);
}

to {
  background-color: rgba(0, 0, 0, 0.8);
}
`;

const StyledWrapper = styled.div`
  padding-top: 20px;
  padding-bottom: 100px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: rgba(0, 0, 0, 0.8);
  animation: ${showIn} 1s linear forwards;
`;

const StyledHeading = styled.h2`
  margin: 20px;
  color: white;
  font-size: 2rem;
  text-transform: capitalize;
`;

const StyledError = styled.p`
  position: absolute;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
  color: red;
  font-size: 1.5rem;
`;

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url(${image1});
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

type Props = {
  location: {
    state: string,
    pathname: string
  }
}

const ResultsView: React.FC<Props> = ({ location }) => {
  const { state: searchTerm } = location;

  const [galleryPictures, setGalleryPictures] = useState<Picture[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [isInitialLoading, setIsInitialLoading] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleGetPictures = async () => {
    const fetchedPicturesArray = await fetchPictures(searchTerm, 1);
    if (fetchedPicturesArray instanceof Error) {
      setIsError(true);
      setIsInitialLoading(false);
    } else {
      setIsError(false);
      setIsInitialLoading(false);
      setGalleryPictures(fetchedPicturesArray);
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  };

  const handleGetMorePictures = async () => {
    const fetchedPicturesArray = await fetchPictures(searchTerm, pageNumber);
    if (fetchedPicturesArray instanceof Error) {
      setIsError(true);
      setIsLoading(false);
    } else {
      const noDuplicatesArray = galleryPictures;
      const picturesIdsArray = noDuplicatesArray.map((item) => item.id);
      fetchedPicturesArray.forEach((item: Picture) => {
        if (!picturesIdsArray.includes(item.id)) {
          noDuplicatesArray.push(item);
        }
      });
      setGalleryPictures([...noDuplicatesArray]);
      setIsLoading(false);
      setIsError(false);
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setIsLoading(true);
      handleGetMorePictures();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pageNumber]);

  useEffect(() => {
    handleGetPictures();
    setPageNumber(1);
  }, [searchTerm]);

  return (
    <StyledWrapper data-testid="results-view">
      <SearchForm />
      <StyledHeading>{searchTerm}</StyledHeading>
      {isError && (
        <StyledError>Connection failed... Please try again.</StyledError>
      )}
      {galleryPictures && <PicturesGallery picturesArray={galleryPictures} />}
      {isInitialLoading && <LoadingSpinner center />}
      {isLoading && <LoadingSpinner />}
      <StyledBackground />
    </StyledWrapper>
  );
};

export default ResultsView;
