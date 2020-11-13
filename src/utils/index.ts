import axios from 'axios';
import type { Picture, PictureFetched } from '../types/index';

export const fetchSinglePicture = (id: string) => {
  const fetchedPicture = axios
    .get(`https://api.unsplash.com/photos/${id}`, {
      params: {
        client_id: process.env.REACT_APP_API_KEY,
      },
    })
    .then((response) => {
      const item = response.data;
      const picture: Picture = {
        id: item.id,
        url: {
          small: item.urls.small,
          regular: item.urls.regular,
        },
        alt: item.alt_description,
        likes: item.likes,
        location: {
          country: item.location.country,
          city: item.location.city,
        },
        owner: {
          name: item.user.name,
          image: item.user.profile_image.small,
          twitter: item.user.twitter_username,
        },
      };
      return picture;
    })
    .catch((error) => error);

  return fetchedPicture;
};

export const fetchPictures = (searchTerm: string, page: number) => {
  const fetchedPictures = axios
    .get('https://api.unsplash.com/search/photos', {
      params: {
        client_id: process.env.REACT_APP_API_KEY,
        query: searchTerm,
        page,
        per_page: 12,
      },
    })
    .then((response) => {
      const picturesArray: Picture[] = response.data.results.map(
        (item: PictureFetched) => ({
          id: item.id,
          url: {
            small: item.urls.small,
            regular: item.urls.regular,
          },
          alt: item.alt_description,
          likes: item.likes,
          owner: {
            name: item.user.name,
            image: item.user.profile_image.small,
            twitter: item.user.twitter_username,
          },
        })
      );
      return picturesArray;
    })
    .catch((error) => error);

  return fetchedPictures;
};
