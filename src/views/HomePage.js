import React, { Component } from 'react';
import fetchApi from '../services/fetchApi';
import MoviesList from '../components/MoviesList';
import BtnLoadMore from '../components/BtnLoadMore';
import Spinner from '../components/Spinner';

class HomePage extends Component {
  state = {
    movies: [],
    page: 1,
    spinner: false,
  };

  componentDidMount() {
    this.fetchMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.fetchMovies();
    }
  }

  fetchMovies = async () => {
    this.toggleSpinner();
    const { page } = this.state;

    try {
      const movies = await fetchApi.TrendingMovies(page);
      const { results, total_pages } = movies;

      const images = await fetchApi.Configuration();
      const { logo_sizes, base_url } = images;

      this.setState({
        base_url,
        total_pages,
        logo_sizes: logo_sizes[4],
      });

      this.setState(({ movies }) => ({
        movies: [...movies, ...results],
      }));

      this.toggleSpinner();
    } catch (err) {
      this.toggleSpinner();
    }
  };

  toggleSpinner = () => {
    this.setState(({ spinner }) => ({
      spinner: !spinner,
    }));
  };

  handleBtnLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  render() {
    const {
      movies,
      logo_sizes,
      base_url,
      spinner,
      total_pages,
      page,
    } = this.state;

    const ShoudRenderLoadMoreBtn = !spinner && page !== total_pages;

    return (
      <div className="Wrap--HomeList">
        <h2 className="ListMoviesTitle">Trending Today:</h2>
        {movies.length === 0 && <Spinner />}
        {movies.length > 0 && (
          <>
            <MoviesList movies={movies} options={{ logo_sizes, base_url }} />
            <Spinner isVisible={spinner} />
            {ShoudRenderLoadMoreBtn && (
              <BtnLoadMore onClick={this.handleBtnLoadMore} />
            )}
          </>
        )}
      </div>
    );
  }
}

export default HomePage;
