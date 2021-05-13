import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import FetchApi from '../services/FetchApi';
import MoviePageForm from '../components/MoviePageForm';
import MoviesList from '../components/MoviesList';
import Spinner from '../components/Spinner';
import Button from '../components/Button';
import NotFound from '../components/NotFound';
import { SearchFormTypes } from '../interfscesTypes/interfaces';
import './stylesViews/MoviePage.scss';

interface PropTypes extends RouteComponentProps {}

interface StateTypes {
  searchQuery: string;
  total_pages: number;
  page: number;
  results: any[];
  base_url: string;
  logo_sizes: string;
  spinner: boolean;
  error: boolean;
  btnLoadMore: boolean;
}

class MoviesPage extends Component<PropTypes, StateTypes> {
  state = {
    searchQuery: '',
    page: 1,
    total_pages: 0,
    results: [],
    base_url: '',
    logo_sizes: '',
    spinner: false,
    error: false,
    btnLoadMore: true,
  };

  isLoading = false;

  componentDidMount() {
    const { search, hash } = this.props.location;

    if (hash !== '' && Number(hash.slice(1)) > this.state.page) {
      this.props.history.push('/');
    }

    !search.includes('query=')
      ? this.setState({ searchQuery: search.slice(1) })
      : this.setState({ searchQuery: search.slice(7) });
  }

  componentDidUpdate(prevProps: PropTypes, prevState: StateTypes) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchMovie();
    }
  }

  componentWillUnmount() {
    this.isLoading = true;
  }

  fetchMovie = async () => {
    const { searchQuery, page } = this.state;
    this.setState({ error: false });

    try {
      this.toggleSpinner();

      const { results, total_pages } = await FetchApi.SearchMovie(
        searchQuery,
        page,
      );

      if (results.length === 0) {
        this.toggleSpinner();
        this.setState({ error: true });
        return;
      }

      if (results.length > 0 && results.length < 19) {
        this.setState({ btnLoadMore: false });
      }

      const { base_url, logo_sizes } = await FetchApi.Configuration();

      !this.isLoading &&
        this.setState({
          total_pages,
          base_url,
          logo_sizes: logo_sizes[4],
        });

      !this.isLoading &&
        this.setState(prev => ({
          results: [...prev.results, ...results],
          page: prev.page + 1,
        }));

      this.createPathName();
    } catch {}

    !this.isLoading && this.toggleSpinner();
  };

  toggleSpinner = () => {
    this.setState(({ spinner }) => ({ spinner: !spinner }));
  };

  handleSubmit = (searchQuery: SearchFormTypes) => {
    this.setState({ ...searchQuery, page: 1, results: [] });
  };

  createPathName = () => {
    const { searchQuery, page } = this.state;

    const { pathname } = this.props.location;

    this.props.history.push({
      pathname,

      hash: `${page - 1}`,
      search: `query=${searchQuery}`,
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
      btnLoadMore,
    } = this.state;

    const shoudRenderMovieList = results.length !== 0 && !error;

    const shoudRenderButton =
      shoudRenderMovieList && page !== total_pages && btnLoadMore;

    return (
      <div className="WrapMoviePage">
        <MoviePageForm onSubmitForm={this.handleSubmit} />

        {shoudRenderMovieList && (
          <MoviesList options={{ results, base_url, logo_sizes }} />
        )}

        <Spinner isVisible={spinner} />

        {shoudRenderButton && (
          <Button onClick={this.fetchMovie} text={'Load More'} />
        )}
        {error && <NotFound />}
      </div>
    );
  }
}

export default MoviesPage;
