import React, { Component } from 'react';
import FetchApi from '../services/FetchApi';
import Spinner from '../components/Spinner';
import NotFound from '../components/NotFound';
import AudditionalInformation from '../components/AudditionaIInformation';
import Layout from '../components/Layout/Layout';
import Button from '../components/Button';
import MovieFields from '../components/MovieFilelds';
import './stylesViews/MovieDetailsPage.scss';

const defaultSrc = 'https://media.comicbook.com/files/img/default-movie.png';
class MovieDetailsPage extends Component {
  state = {
    title: null,
    base_url: null,
    logo_sizes: null,
    poster_path: null,
    release_date: null,
    vote_average: null,
    overview: null,
    genres: null,
    spinner: false,
    error: false,
    from: '',
    searchQuery: '',
  };

  isLoading = false;

  componentDidMount() {
    const { state, pathname } = this.props.location;
    const { movieId } = this.props.match.params;

    if (
      pathname !== `/movies/${movieId}` &&
      pathname !== `/movies/${movieId}/cast` &&
      pathname !== `/movies/${movieId}/reviews`
    ) {
      this.props.history.push('/');
    }

    if (state?.from) {
      const { pathname, state } = this.props.location.state.from;
      this.setState({ from: pathname, searchQuery: state });
    }

    this.fetchMovieDetails();
  }

  componentWillUnmount() {
    this.isLoading = true;
  }

  fetchMovieDetails = async () => {
    this.toggleSpinner();
    const { movieId } = this.props.match.params;

    try {
      const data = await FetchApi.Movie(movieId);

      const {
        poster_path,
        release_date,
        title,
        vote_average,
        overview,
        genres,
        backdrop_path,
      } = data;

      const images = await FetchApi.Configuration();

      const { logo_sizes, base_url, backdrop_sizes } = images;

      !this.isLoading &&
        this.setState({
          poster_path,
          release_date,
          title,
          vote_average,
          overview,
          genres,
          base_url,
          backdrop_path,
          backdrop_sizes: backdrop_sizes[3],
          logo_sizes: logo_sizes[5],
        });

      !this.isLoading && this.toggleSpinner();
    } catch (err) {
      const { status } = err.response;
      console.log(err);
      // await this.setState({
      //   error: true,
      //   spinner: false,
      // });
      if (status === 404) {
        this.props.history.push('/');
      }
    }
  };

  toggleSpinner = () => {
    this.setState(({ spinner }) => ({ spinner: !spinner }));
  };

  editMovieRealise = () => {
    const { release_date } = this.state;
    return release_date.slice(0, 4);
  };

  editMovieAverage = () => {
    const { vote_average } = this.state;
    return +vote_average * 10;
  };

  handleGoBackClick = () => {
    const { history } = this.props;

    const { from, searchQuery } = this.state;

    history.push({
      pathname: from,
      state: searchQuery,
    });
  };

  render() {
    const {
      title,
      base_url,
      logo_sizes,
      poster_path,
      overview,
      genres,
      backdrop_path,
      backdrop_sizes,
      spinner,
      error,
      from,
    } = this.state;

    const imageSrc = `${base_url}${logo_sizes}${poster_path}`;
    const bgImageSrc = `${base_url}${backdrop_sizes}${backdrop_path}`;

    return (
      <>
        <Spinner isVisible={spinner} />
        {error && <NotFound />}
        {title && (
          <>
            <div
              style={{
                backgroundImage: `linear-gradient(to right, rgba(3, 37, 65, 0.7), rgba(3, 37, 65, 0.7)), url(${bgImageSrc})`,
              }}
              className="Background"
            >
              <Button
                text={'<'}
                disabled={!from && true}
                onClick={this.handleGoBackClick}
              />
              <Layout>
                <div className="ContainerMovie">
                  <div className="WrapMovie">
                    <img
                      src={poster_path ? imageSrc : defaultSrc}
                      alt="title"
                      className="MovieImg"
                    />
                  </div>

                  <MovieFields
                    realise={this.editMovieRealise()}
                    average={this.editMovieAverage()}
                    options={{ genres, title, overview }}
                  />
                </div>
              </Layout>
            </div>
            <AudditionalInformation options={{ base_url, logo_sizes }} />
          </>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
