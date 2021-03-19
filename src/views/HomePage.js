import React, { Component } from 'react';
import FetchApi from '../services/FetchApi';
import MoviesList from '../components/MoviesList';
import Button from '../components/Button';
import Spinner from '../components/Spinner';
import './stylesViews/HomePage.scss';

class HomePage extends Component {
  state = {
    results: [],
    page: 1,
    spinner: false,
  };

  isLoading = false;

  componentDidMount() {
    const {
      history,
      location: { pathname },
    } = this.props;

    if (pathname.length > 1) {
      history.push('/');
    }

    this.fetchMovies();
  }

  componentWillUnmount() {
    this.isLoading = true;
  }

  fetchMovies = async () => {
    this.toggleSpinner();
    const { page } = this.state;

    try {
      const movies = await FetchApi.TrendingMovies(page);
      const { results, total_pages } = movies;

      const images = await FetchApi.Configuration();
      const { logo_sizes, base_url } = images;

      !this.isLoading &&
        this.setState({
          base_url,
          total_pages,
          logo_sizes: logo_sizes[4],
        });

      !this.isLoading &&
        this.setState(({ results: prev, page }) => ({
          results: [...prev, ...results],
          page: page + 1,
        }));
    } catch {}

    !this.isLoading && this.toggleSpinner();
  };

  toggleSpinner = () => {
    this.setState(({ spinner }) => ({
      spinner: !spinner,
    }));
  };

  render() {
    const {
      results,
      logo_sizes,
      base_url,
      spinner,
      total_pages,
      page,
    } = this.state;

    const ShoudRenderButton = !spinner && page !== total_pages;

    return (
      <div className="WrapHomeList">
        {results.length === 0 && <Spinner />}
        {results.length !== 0 && (
          <>
            <h2 className="ListMoviesTitle">Trending Today:</h2>
            <MoviesList options={{ results, logo_sizes, base_url }} />
            <Spinner isVisible={spinner} />
            {ShoudRenderButton && (
              <Button onClick={this.fetchMovies} text={'Load More'} />
            )}
          </>
        )}
      </div>
    );
  }
}

export default HomePage;
