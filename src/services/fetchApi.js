import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'dd5d1869904b4aaed3590a927b3d890c';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

const TrendingMovies = async (page = 1) => {
  try {
    const { data } = await axios.get('trending/movie/day', {
      params: { page },
    });
    return data;
  } catch {}
};

const Configuration = async () => {
  try {
    const {
      data: { images },
    } = await axios.get('/configuration');
    return images;
  } catch (err) {
    throw err;
  }
};

const Movie = async id => {
  try {
    const { data } = await axios.get(`/movie/${id}`);
    return data;
  } catch (err) {
    throw err;
  }
};

const MovieCredits = async id => {
  try {
    const {
      data: { cast },
    } = await axios.get(`/movie/${id}/credits`);

    return cast;
  } catch (err) {
    throw err;
  }
};

const MovieReviews = async id => {
  try {
    const {
      data: { results },
    } = await axios.get(`/movie/${id}/reviews`);

    return results;
  } catch (err) {
    throw err;
  }
};

const SearchMovie = async (query, page) => {
  const {
    data: { results },
  } = await axios.get('/search/movie', {
    params: { query, page },
  });

  return results;
};

const fetcApi = {
  TrendingMovies,
  Configuration,
  Movie,
  MovieCredits,
  MovieReviews,
  SearchMovie,
};

export default fetcApi;
