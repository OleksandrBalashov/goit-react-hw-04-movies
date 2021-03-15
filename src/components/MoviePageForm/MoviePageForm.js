import React, { Component } from 'react';
import './MoviePageForm.scss';

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
      <div className="WrapForm">
        <form onSubmit={this.handlerSubmitForm} className="Form">
          <label className="FormLabel">
            <input
              type="text"
              className="FormInput"
              value={searchQuery}
              onChange={this.handleChangeInput}
              placeholder="Search Movie..."
            />
          </label>
          <button type="submit" className="BtnSubmit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default MoviePageForm;
