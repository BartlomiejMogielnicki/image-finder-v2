import React from 'react';
import { render } from '@testing-library/react';

import SearchView from './SearchView';

describe('SearchView component', () => {
  it('should render properly', () => {
    const { getByTestId } = render(<SearchView />);

    expect(getByTestId('search-view')).toBeInTheDocument();
  });
});
