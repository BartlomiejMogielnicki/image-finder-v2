import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';

describe('Button component', () => {
  it('should render properly', () => {
    const childrenIcon = '<i className="fas fa-angle-left" />';
    const { getByTestId, getByText } = render(<Button>{childrenIcon}</Button>);

    expect(getByTestId('button')).toBeInTheDocument();
    expect(getByText(childrenIcon)).toBeInTheDocument();
  });
});
