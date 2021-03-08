import axios from 'axios';
import React, { Component } from 'react';

class MoviesPage extends Component {
  state = {
    movie: null,
  };

  componentDidMount() {
    // console.log(this.props);
    // const { data } = axios.get(`/movie/${this.props.id}`);
    // console.log(data);
  }

  render() {
    return <div>Страница поиска</div>;
  }
}

export default MoviesPage;
