import React, { Component } from 'react';
import fetchApi from '../../services/fetchApi';
import CastList from './CastList';
import Spinner from '../Spinner';

class Cast extends Component {
  state = {
    cast: [],
    spinner: false,
    ...this.props.options,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    this.toggleSpinner();

    try {
      const cast = await fetchApi.MovieCredits(movieId);

      this.setState({ cast });
      this.toggleSpinner();
    } catch {}
  }

  toggleSpinner = () => {
    this.setState(({ spinner }) => ({ spinner: !spinner }));
  };

  render() {
    const { cast, base_url, logo_sizes, spinner } = this.state;

    return (
      <>
        <Spinner isVisible={spinner} />
        {cast.length > 0 && (
          <CastList cast={cast} base_url={base_url} logo_sizes={logo_sizes} />
        )}
      </>
    );
  }
}

export default Cast;
