export const getImages = (queryString) => {
  return fetch(getSearchImagesApiUrl(queryString));
};

export const getLatestImages = () => {
  return fetch(getLatestImagesApiUrl());
};

const getSearchImagesApiUrl = (queryString) => {
  return `https://api.unsplash.com/search/photos/?query=${queryString}&client_id=${process.env.REACT_APP_ACCESS_KEY}&page=4&per_page=150`;
};

const getLatestImagesApiUrl = () => {
  return `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}&page=4&per_page=150`;
};
