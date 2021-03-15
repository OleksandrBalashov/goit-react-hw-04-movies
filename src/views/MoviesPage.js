import React, { Component } from 'react';
import fetchApi from '../services/fetchApi.js';
import MoviePageForm from '../components/MoviePageForm';
import MoviesList from '../components/MoviesList';
import Spinner from '../components/Spinner';
import BtnLoadMore from '../components/BtnLoadMore';
import ErrorPage from './ErrorPage';

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

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.fetchMovie();
    }
  }

  fetchMovie = async () => {
    const { searchQuery, page } = this.state;
    this.setState({ error: false });

    try {
      this.toggleSpinner();

      const results = await fetchApi.SearchMovie(searchQuery, page);

      // ! MUST DO TOTAL PAGE

      if (results.length === 0) {
        this.setState({ error: true });
      }

      const { base_url, logo_sizes } = await fetchApi.Configuration();

      this.setState(prev => ({ results: [...prev.results, ...results] }));

      if (!this.state.base_url) {
        this.setState({
          base_url,
          logo_sizes: logo_sizes[4],
        });
      }

      this.toggleSpinner();
    } catch (err) {
      this.toggleSpinner();
    }
  };

  handleBtnLoadMoreClick = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  toggleSpinner = () => {
    this.setState(({ spinner }) => ({ spinner: !spinner }));
  };

  handleSubmit = searchQuery => {
    this.setState({ ...searchQuery });
    const { searchQuery: query } = searchQuery;

    const { pathname } = this.props.location;
    this.props.history.push(`${pathname}?query=${query}`);
  };

  render() {
    const { results, base_url, logo_sizes, spinner, error } = this.state;
    const shoudRender = results.length !== 0 && !error;
    return (
      <>
        <MoviePageForm onSubmitForm={this.handleSubmit} />

        {shoudRender && (
          <MoviesList movies={results} options={{ base_url, logo_sizes }} />
        )}

        <Spinner isVisible={spinner} />

        {shoudRender && <BtnLoadMore onClick={this.handleBtnLoadMoreClick} />}
        {error && <ErrorPage />}
      </>
    );
  }
}

export default MoviesPage;
