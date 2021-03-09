import React, { Component } from 'react';
import axios from 'axios';
import CastListItem from './CastListItem';

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

    console.log(cast);
    this.setState({ cast });
  }

  render() {
    const { cast, base_url, logo_sizes } = this.state;

    return (
      <>
        {cast.length > 0 && (
          <ul className="CastActorsList">
            {cast.map(({ id, profile_path, name, character }) => (
              <CastListItem
                key={id}
                options={{
                  profile_path,
                  name,
                  character,
                  base_url,
                  logo_sizes,
                }}
              />
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Cast;
