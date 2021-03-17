import React, { Component } from 'react';
import FetchApi from '../services/FetchApi';
import Spinner from '../components/Spinner';
import ErrorPage from './ErrorPage';
import MoviesGenresList from '../components/MovieGenresList';
import AudditionInformation from '../components/AudditionaIInformation';
import Layout from '../components/Layout/Layout';
import './stylesViews/MovieDetailsPage.scss';
import Button from '../components/Button';

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

  componentDidMount() {
    const { pathname, state } = this.props.location.state.from;
    // console.log(pathname);
    // console.log(state);
    if (pathname) {
      this.setState({ from: pathname, searchQuery: state });
    }

    this.fetchMovieDetails();
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

      this.toggleSpinner();
    } catch (err) {
      this.setState({
        error: true,
        spinner: false,
      });
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
    const {
      history,
      // location: { state },
    } = this.props;
    // console.log(state);

    // const fromState = state?.from;
    // console.log(fromState);

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
    } = this.state;

    const imageSrc = `${base_url}${logo_sizes}${poster_path}`;
    const bgImageSrc = `${base_url}${backdrop_sizes}${backdrop_path}`;

    return (
      <>
        <Spinner isVisible={spinner} />
        {error && <ErrorPage />}
        {title && (
          <>
            <div
              style={{
                backgroundImage: `linear-gradient(to right, rgba(3, 37, 65, 0.7), rgba(3, 37, 65, 0.7)), url(${bgImageSrc})`,
              }}
              className="Background"
            >
              <Button text={'<'} onClick={this.handleGoBackClick} />
              <Layout>
                <div className="ContainerMovie">
                  <div className="WrapMovie">
                    <img src={imageSrc} alt="title" className="MovieImg" />
                  </div>

                  <div className="WrapMovieFields">
                    <h2 className="MovieTitle MarginPadding">{`${title} (${this.editMovieRealise()})`}</h2>
                    <div className="MovieScore MarginPadding">
                      <span className="MovieScoreText">User Score: </span>
                      <span className="MovieScorePoint">{`${this.editMovieAverage()}%`}</span>
                    </div>
                    <h4 className="MovieDescr MarginPadding">Genres:</h4>
                    <MoviesGenresList genres={genres} />
                    <div>
                      <h4 className="MarginPadding MovieDescr">Overview: </h4>
                      <p className="MarginPadding MovieOverview">{overview}</p>
                    </div>
                  </div>
                </div>
              </Layout>
            </div>
            <AudditionInformation options={{ base_url, logo_sizes }} />
          </>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
