import React from 'react';
import { render } from '@testing-library/react';

import PicturesGallery from './PicturesGallery';

describe('PicturesGallery component', () => {
  const fakePicturesArray = [
    {
      id: '123',
      url: {
        small: 'fakePictureSmallUrl',
        regular: 'fakePictureRegularUrl',
      },
      alt: 'fakePictureAltDescription',
      likes: 100,
      location: {
        country: 'fakePictureLocationCountry',
        city: 'fakePictureLocationCity',
      },
      owner: {
        name: 'fakePictureOwnerName',
        image: 'fakePictureOwnerImageUrl',
        twitter: 'fakePictureOwnerTwitter',
      },
    },
  ];

  it('should render properly', () => {
    const { getByTestId } = render(
      <PicturesGallery picturesArray={fakePicturesArray} />
    );

    expect(getByTestId('pictures-gallery')).toBeInTheDocument();

    const images = document.querySelectorAll('img');
    expect(images.length).toBe(fakePicturesArray.length);
  });
});
