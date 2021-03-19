import React, { Component } from 'react';
import FetchApi from '../../../services/FetchApi';
import Spinner from '../../Spinner';
import ReviewsList from './ReviewsList';
import ReviewsDefaultPage from './ReviewsDefaultPage';

class Reviews extends Component {
  state = {
    results: [],
    spinner: false,
  };

  isLoading = false;

  componentDidMount() {
    this.fetchReviews();
  }

  componentWillUnmount() {
    this.isLoading = true;
  }

  fetchReviews = async () => {
    const { movieId } = this.props.match.params;
    this.toggleSpinner();

    try {
      const results = await FetchApi.MovieReviews(movieId);

      !this.isLoading && this.setState({ results });
      !this.isLoading && this.toggleSpinner();
    } catch (err) {}
  };

  toggleSpinner = () => {
    this.setState(({ spinner }) => ({ spinner: !spinner }));
  };

  render() {
    const { results, spinner } = this.state;

    return (
      <>
        <Spinner isVisible={spinner} />
        {results.length !== 0 ? (
          <ReviewsList results={results} />
        ) : (
          <ReviewsDefaultPage />
        )}
      </>
    );
  }
}

export default Reviews;
