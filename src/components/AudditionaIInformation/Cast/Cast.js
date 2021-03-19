import React, { Component } from 'react';
import FetchApi from '../../../services/FetchApi';
import CastList from './CastList';
import Spinner from '../../Spinner';

class Cast extends Component {
  state = {
    cast: [],
    spinner: false,

    ...this.props.options,
  };

  isLoading = false;

  componentDidMount() {
    this.fetchCast();
  }

  componentWillUnmount() {
    this.isLoading = true;
  }

  fetchCast = async () => {
    const { movieId } = this.props.match.params;
    this.toggleSpinner();

    try {
      const cast = await FetchApi.MovieCredits(movieId);

      !this.isLoading && this.setState({ cast });
      !this.isLoading && this.toggleSpinner();
    } catch {}
  };

  toggleSpinner = () => {
    this.setState(({ spinner }) => ({ spinner: !spinner }));
  };

  render() {
    const { cast, base_url, logo_sizes, spinner } = this.state;

    return (
      <>
        <Spinner isVisible={spinner} />
        {cast.length > 0 && (
          <CastList options={{ cast, base_url, logo_sizes }} />
        )}
      </>
    );
  }
}

export default Cast;
