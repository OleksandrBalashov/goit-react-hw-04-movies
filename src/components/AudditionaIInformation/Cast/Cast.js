import React, { Component } from 'react';
import FetchApi from '../../../services/FetchApi';
import CastList from './CastList';
import Spinner from '../../Spinner';
import NotFound from '../../NotFound';
import PropTypes from 'prop-types';

class Cast extends Component {
  state = {
    cast: [],
    spinner: false,
    err: false,
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

      !this.isLoading && (await this.setState({ cast }));
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

        {cast.length > 0 ? (
          <CastList options={{ cast, base_url, logo_sizes }} />
        ) : (
          !spinner && <NotFound />
        )}
      </>
    );
  }
}

Cast.propTypes = {
  options: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};

export default Cast;
