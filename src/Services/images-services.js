const REACT_APP_ACCESS_KEY = "542ff97576bde95595f94ed179d39c5c36ef48e14afd1f52467579a8ea6a4e80"
const API_URL ="https://api.unsplash.com"


export const getImages = (queryString) => {
  return fetch(getSearchImagesApiUrl(queryString));
};

export const getLatestImages = () => {
  return fetch(getLatestImagesApiUrl());
};

const getSearchImagesApiUrl = (queryString) => {
  return `${API_URL}/search/photos/?query=${queryString}&client_id=${REACT_APP_ACCESS_KEY}&page=4&per_page=150`;
};

const getLatestImagesApiUrl = () => {
  return `${API_URL}/photos/?client_id=${REACT_APP_ACCESS_KEY}&page=4&per_page=150`;
};