import React, { Component } from 'react';

class MoviePageForm extends Component {
  state = {
    searchQuery: '',
  };

  handleChangeInput = e => {
    const { value } = e.currentTarget;
    this.setState({ searchQuery: value });
  };

  handlerSubmitForm = e => {
    e.preventDefault();

    this.props.onSubmitForm(this.state);
    this.resetForm();
  };

  resetForm() {
    this.setState({ searchQuery: '' });
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <form onSubmit={this.handlerSubmitForm}>
        <label>
          <input
            type="text"
            value={searchQuery}
            onChange={this.handleChangeInput}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default MoviePageForm;
