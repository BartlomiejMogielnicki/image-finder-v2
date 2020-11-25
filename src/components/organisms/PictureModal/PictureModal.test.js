import React from 'react';
import { render } from '@testing-library/react';

import PictureModal from './PictureModal';

describe('PictureModal component', () => {
  const fakePicture = {
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
  };

  it('should render properly', () => {
    const { getByTestId, getByText, getByAltText } = render(
      <PictureModal picture={fakePicture} />
    );

    expect(getByTestId('picture-modal')).toBeInTheDocument();
    expect(getByAltText(fakePicture.alt)).toBeInTheDocument();
    expect(getByText(fakePicture.owner.name)).toBeInTheDocument();
    expect(getByText(fakePicture.likes.toString())).toBeInTheDocument();
    expect(getByText(fakePicture.location.country)).toBeInTheDocument();
    expect(getByText(`, ${fakePicture.location.city}`)).toBeInTheDocument();
  });
});
