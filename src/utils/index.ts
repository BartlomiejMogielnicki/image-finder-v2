import axios from 'axios';

export const fetchSinglePicture = (id) => {
  const fetchedPicture = axios
    .get(`https://api.unsplash.com/photos/${id}`, {
      params: {
        client_id: process.env.REACT_APP_API_KEY,
      },
    })
    .then((response) => {
      const item = response.data;
      const picture = {
        id: item.id,
        url: item.urls.regular,
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

export const fetchPictures = (searchTerm, page) => {
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
      const picturesArray = response.data.results.map((item) => ({
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
      }));
      return picturesArray;
    })
    .catch((error) => error);

  return fetchedPictures;
};
