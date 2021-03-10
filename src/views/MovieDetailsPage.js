import axios from 'axios';
import React, { Component } from 'react';
import MoviesGenresList from '../components/MovieDatails/MovieGenresList';
import AudditionInformation from '../components/MovieDatails/AudditionInformation';
import '../components/MovieDatails/MovieDetailsPage.scss';
import Layout from '../components/Layout/Layout';

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
      <>
        {title && (
          <>
            <Layout>
              <div className="ContainerMovie">
                <div className="WrapMovie">
                  <img
                    src={`${base_url}${logo_sizes}${poster_path}`}
                    alt="title"
                  />
                </div>

                <div className="WrapMovieFields">
                  <h2 className="MovieTitle MarginPadding">{`${title} (${this.editMovieRealise()})`}</h2>
                  <p className="MovieScore MarginPadding">
                    User Score: {`${this.editMovieAverage()}%`}
                  </p>
                  <h4 className="MovieGenres MarginPadding">Genres:</h4>
                  <MoviesGenresList genres={genres} />
                  <div>
                    <h4 className="MarginPadding">Overview: </h4>
                    <p className="MarginPadding">{overview}</p>
                  </div>
                </div>
              </div>
            </Layout>
            <AudditionInformation options={{ base_url, logo_sizes }} />
          </>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
