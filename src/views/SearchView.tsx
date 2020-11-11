import React from 'react';
import styled from 'styled-components';

import SearchForm from '../components/molecules/SearchForm/SearchForm';
import image1 from '../images/image1.jpg';

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${image1});
  background-size: cover;
  background-position: center;

  ::after {
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const StyledHeading = styled.h1`
  margin-bottom: 20px;
  letter-spacing: 1px;
  color: #fff;
  font-size: 2.5rem;
  z-index: 10;
`;

const StyledSubheading = styled.p`
  margin-top: 20px;
  color: #fff;
  z-index: 10;
`;

const SearchView: React.FC = () => (
  <StyledWrapper data-testid="search-view">
    <StyledHeading>Image Finder</StyledHeading>
    <SearchForm />
    <StyledSubheading>Powered by Unsplash</StyledSubheading>
  </StyledWrapper>
);

export default SearchView;
