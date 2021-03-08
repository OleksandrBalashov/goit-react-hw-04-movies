import axios from 'axios';
import React, { Component } from 'react';
import MoviesGenresListItem from '../components/MovieGenresListItem/MoviesGenresListItem';

class MovieDetailsPage extends Component {
  state = {
    // title: null,
    // base_url: null,
    // logo_sizes: null,
    // poster_path: null,
    // release_date: null,
    // vote_average: null,
    // overview: null,
    // genres: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const { data } = await axios.get(`/movie/${movieId}`);
    const {
      poster_path,
      release_date,
      title,
      vote_average,
      overview,
      genres,
    } = data;

    const {
      data: { images },
    } = await axios.get('/configuration');

    const { logo_sizes, base_url } = images;

    console.log(data);

    this.setState({
      poster_path,
      release_date,
      title,
      vote_average,
      overview,
      genres,
      base_url,
      logo_sizes: logo_sizes[4],
    });
  }

  editMovieRealise = () => {
    const { release_date } = this.state;
    return release_date.slice(0, 4);
  };

  editMovieAverage = () => {
    const { vote_average } = this.state;
    return +vote_average * 10;
  };

  render() {
    const {
      title,
      base_url,
      logo_sizes,
      poster_path,
      overview,
      genres,
    } = this.state;

    return (
      <div className="Wrap-Movie">
        {title && (
          <>
            <img src={`${base_url}${logo_sizes}${poster_path}`} alt="title" />
            <div>
              <h2>{`${title} (${this.editMovieRealise()})`}</h2>
              <p>User Score: {`${this.editMovieAverage()}%`}</p>
              <h3>Overview: </h3>
              <p>{overview}</p>
              <h4>Genres:</h4>
              <ul className="GenresNamesList">
                {genres.map(({ name }) => (
                  <MoviesGenresListItem key={name} name={name} />
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default MovieDetailsPage;
