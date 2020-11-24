import React from 'react';
import { render } from '@testing-library/react';

import ResultsView from './ResultsView';

describe('ResultsView component', () => {
  const location = {
    state: 'passedSearchTerm',
    pathname: '',
  };
  const placeHolderText = 'Search high-resolution photos';
  it('should render properly', () => {
    const { getByTestId, getByPlaceholderText } = render(
      <ResultsView location={location} />
    );

    expect(getByTestId('results-view')).toBeInTheDocument();
    expect(getByPlaceholderText(placeHolderText)).toBeInTheDocument();
  });
});
