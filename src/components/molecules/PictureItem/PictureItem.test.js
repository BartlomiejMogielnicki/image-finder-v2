import React from 'react';
import { render } from '@testing-library/react';

import PictureItem from './PictureItem';

describe('PictureItem component', () => {
  it('should render properly', () => {
    const fakePictureUrl = 'https://fakepictureurl';
    const fakePictureAlt = 'fakePictureAltText';
    const { getByTestId, getByAltText } = render(
      <PictureItem url={fakePictureUrl} alt={fakePictureAlt} />
    );

    expect(getByTestId('picture-item')).toBeInTheDocument();
    expect(getByAltText(fakePictureAlt)).toBeInTheDocument();
  });
});
