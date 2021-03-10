import React, { Component } from 'react';
import axios from 'axios';
import CastList from './CastList';

class Cast extends Component {
  state = {
    cast: [],
    ...this.props.options,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;

    const {
      data: { cast },
    } = await axios.get(`/movie/${movieId}/credits`);

    // console.log(cast);
    this.setState({ cast });
  }

  render() {
    const { cast, base_url, logo_sizes } = this.state;

    return (
      <>
        {cast.length > 0 && (
          <CastList cast={cast} base_url={base_url} logo_sizes={logo_sizes} />
        )}
      </>
    );
  }
}

export default Cast;
