import React, { Component } from 'react';
import axios from 'axios';
import MoviesListItem from '../components/MoviesListItem';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'dd5d1869904b4aaed3590a927b3d890c';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  //   media_type: 'movie',
  //   time_window: 'week',
};

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const {
      data: { results },
    } = await axios.get('trending/movie/day');
    console.log(results); //!

    const {
      data: { images },
    } = await axios.get('/configuration');
    const { base_url, logo_sizes } = images;

    this.setState({
      movies: results,
      base_url,
      logo_sizes: logo_sizes[4],
    });
  }

  render() {
    const { movies, logo_sizes, base_url } = this.state;
    const { url } = this.props.match;

    return (
      <div className="Wrap--HomeList">
        <h2 className="ListMoviesTitle">Trending Today:</h2>
        <ul className="ListMovies">
          {movies.length > 0 &&
            movies.map(({ id, title, poster_path }) => (
              <MoviesListItem
                key={id}
                options={{ id, title, poster_path, url, logo_sizes, base_url }}
              />
            ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;
