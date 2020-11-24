import React from 'react';
import { render } from '@testing-library/react';

import SearchForm from './SearchForm';

describe('SearchForm component', () => {
  it('should render properly', () => {
    const placeholderText = 'Search high-resolution photos';
    const { getByTestId, getByPlaceholderText } = render(<SearchForm />);

    expect(getByTestId('search-form')).toBeInTheDocument();
    expect(getByPlaceholderText(placeholderText)).toBeInTheDocument();
  });
});
