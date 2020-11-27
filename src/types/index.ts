export interface Picture {
  id: string;
  url: {
    small: string;
    regular: string;
  };
  alt: string;
  likes: number;
  location?: {
    country: string;
    city: string;
  };
  date: string;
  owner: {
    name: string;
    image: string;
    twitter: string;
  };
}

export interface PictureFetched {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
  likes: number;
  user: {
    name: string;
    profile_image: string;
    twitter_username: string;
  };
}
