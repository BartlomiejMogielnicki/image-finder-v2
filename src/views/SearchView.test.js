import React from 'react';
import { render } from '@testing-library/react';

import SearchView from './SearchView';

describe('SearchView component', () => {
  it('should render properly', () => {
    const mainTitle = 'Image Finder';
    const placeHolderText = 'Search high-resolution photos';
    const { getByTestId, getByText, getByPlaceholderText } = render(
      <SearchView />
    );

    expect(getByTestId('search-view')).toBeInTheDocument();
    expect(getByText(mainTitle)).toBeInTheDocument();
    expect(getByPlaceholderText(placeHolderText)).toBeInTheDocument();
  });
});
