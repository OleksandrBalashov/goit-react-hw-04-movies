import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import FetchApi from '../../../services/FetchApi';
import Spinner from '../../Spinner';
import ReviewsList from './ReviewsList';
import ReviewsDefaultPage from './ReviewsDefaultPage';

interface StateTypes {
  results: any[];
  spinner: boolean;
}

interface Paramses {
  movieId: string;
}

interface PropTypes extends RouteComponentProps<Paramses> {}

class Reviews extends Component<PropTypes, StateTypes> {
  state: StateTypes = {
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
    } catch {}
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
