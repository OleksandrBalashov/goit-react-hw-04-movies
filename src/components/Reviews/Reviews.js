import React, { Component } from 'react';
import axios from 'axios';
import ReviewsListItem from './ReviewsListItem';
import ReviewsDefaultPage from './ReviewsDefaultPage';

class Reviews extends Component {
  state = {
    results: [],
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const {
      data: { results },
    } = await axios.get(`/movie/${movieId}/reviews`);
    console.log(results);

    this.setState({ results });
  }

  render() {
    const { results } = this.state;

    return (
      <>
        <ul>
          {results.length !== 0 ? (
            results.map(({ id, author, content }) => (
              <ReviewsListItem key={id} options={{ author, content }} />
            ))
          ) : (
            <ReviewsDefaultPage />
          )}
        </ul>
      </>
    );
  }
}

export default Reviews;
