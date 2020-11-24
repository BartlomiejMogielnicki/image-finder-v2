import React from 'react';
import { render } from '@testing-library/react';

import LoadingSpinner from './LoadingSpinner';

describe('LoadingSpinner component', () => {
  it('should render properly', () => {
    const { getByTestId } = render(<LoadingSpinner />);

    expect(getByTestId('loading-spinner')).toBeInTheDocument();
  });
});
