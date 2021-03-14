import React, { Component } from 'react';
import axios from 'axios';
import MoviePageForm from '../components/MoviePageForm';
import MoviesList from '../components/MoviesList';

class MoviesPage extends Component {
  state = {
    searchQuery: '',
    results: [],
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;

    if (prevState.searchQuery !== this.state.searchQuery) {
      const {
        data: { results },
      } = await axios.get('/search/movie', {
        params: { query: searchQuery },
      });

      const {
        data: { images },
      } = await axios.get('/configuration');
      const { base_url, logo_sizes } = images;

      this.setState({
        results,
        base_url,
        logo_sizes: logo_sizes[4],
      });
    }
  }

  handleSubmit = searchQuery => {
    this.setState({ ...searchQuery });
    const { searchQuery: query } = searchQuery;
    const { pathname } = this.props.location;

    this.props.history.push(`${pathname}?query=${query}`);
  };

  render() {
    const { results, base_url, logo_sizes } = this.state;

    return (
      <>
        <MoviePageForm onSubmitForm={this.handleSubmit} />
        {results.length !== 0 && (
          <MoviesList movies={results} options={{ base_url, logo_sizes }} />
        )}
      </>
    );
  }
}

export default MoviesPage;
