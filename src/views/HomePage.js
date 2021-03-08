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
    } = await axios.get('trending/movie/week');
    console.log(results); //!
    this.setState({ movies: results });
  }

  render() {
    const { movies } = this.state;

    return (
      <div className="Wrap--HomeList">
        <h2>Trending Today:</h2>
        <ul className="ListMovies">
          {movies.length > 0 &&
            movies.map(({ id, title }) => (
              <MoviesListItem
                key={id}
                id={id}
                title={title}
                options={this.props.match.url}
              />
            ))}
        </ul>
      </div>
    );
  }
}

export default HomePage;
