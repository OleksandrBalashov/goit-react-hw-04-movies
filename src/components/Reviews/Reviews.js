import React, { Component } from 'react';
import fetchApi from '../../services/fetchApi';
import Spinner from '../Spinner';
import ReviewsList from './ReviewsList';
import ReviewsDefaultPage from './ReviewsDefaultPage';

class Reviews extends Component {
  state = {
    results: [],
    spinner: false,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    this.toggleSpinner();

    try {
      const results = await fetchApi.MovieReviews(movieId);

      this.setState({ results });
      this.toggleSpinner();
    } catch (err) {}
  }

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
