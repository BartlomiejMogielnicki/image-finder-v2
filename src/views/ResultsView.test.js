import React from 'react';
import { render } from '@testing-library/react';

import ResultsView from './ResultsView';

describe('ResultsView component', () => {
  const location = {
    state: 'passedSearchTerm',
    pathname: '',
  };
  it('should render properly', () => {
    const { getByTestId } = render(<ResultsView location={location} />);

    expect(getByTestId('results-view')).toBeInTheDocument();
  });
});
