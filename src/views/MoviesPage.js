import React, { Component } from 'react';
import fetchApi from '../services/fetchApi.js';
import MoviePageForm from '../components/MoviePageForm';
import MoviesList from '../components/MoviesList';
import Spinner from '../components/Spinner';
import BtnLoadMore from '../components/BtnLoadMore';
import ErrorPage from './ErrorPage';
import './stylesViews/MoviePage.scss';
class MoviesPage extends Component {
  state = {
    searchQuery: '',
    page: 1,
    results: [],
    base_url: null,
    logo_sizes: null,
    spinner: false,
    error: false,
  };

  componentDidMount = () => {
    const searchQuery = this.props.location.state;

    if (searchQuery) {
      this.setState({ ...searchQuery });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovie();
    }
  }

  fetchMovie = async () => {
    const { searchQuery, page } = this.state;
    this.setState({ error: false });

    try {
      this.toggleSpinner();

      const { results, total_pages } = await fetchApi.SearchMovie(
        searchQuery,
        page,
      );

      if (results.length === 0) {
        this.toggleSpinner();
        this.setState({ error: true });
        return;
      }

      const { base_url, logo_sizes } = await fetchApi.Configuration();

      this.setState({
        total_pages,
        base_url,
        logo_sizes: logo_sizes[4],
      });

      this.setState(prev => ({
        results: [...prev.results, ...results],
        page: prev.page + 1,
      }));

      this.createPathName();

      this.toggleSpinner();
    } catch (err) {
      this.toggleSpinner();
    }
  };

  toggleSpinner = () => {
    this.setState(({ spinner }) => ({ spinner: !spinner }));
  };

  handleSubmit = searchQuery => {
    this.setState({ ...searchQuery, page: 1, results: [] });
  };

  createPathName = () => {
    const { searchQuery, page } = this.state;

    const { pathname } = this.props.location;

    this.props.history.push({
      pathname,
      search: `query=${searchQuery}&page=${page - 1}`,
      // hash: `${page - 1}`,
      state: {
        searchQuery,
      },
    });
  };

  render() {
    const {
      results,
      base_url,
      logo_sizes,
      spinner,
      error,
      page,
      total_pages,
    } = this.state;

    const shoudRenderMovieList = results.length !== 0 && !error;

    const shoudRenderBtnLoadMore = shoudRenderMovieList && page !== total_pages;

    return (
      <div className="WrapMoviePage">
        <MoviePageForm onSubmitForm={this.handleSubmit} />

        {shoudRenderMovieList && (
          <MoviesList movies={results} options={{ base_url, logo_sizes }} />
        )}

        <Spinner isVisible={spinner} />

        {shoudRenderBtnLoadMore && <BtnLoadMore onClick={this.fetchMovie} />}
        {error && <ErrorPage />}
      </div>
    );
  }
}

export default MoviesPage;
