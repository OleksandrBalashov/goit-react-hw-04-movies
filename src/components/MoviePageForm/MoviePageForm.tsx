import React, { Component } from 'react';
import { SearchFormTypes } from '../../interfacesTypes/interfaces';
import './MoviePageForm.scss';

interface PropsType {
  onSubmitForm(searchQuery: SearchFormTypes): void;
}

class MoviePageForm extends Component<PropsType> {
  state = {
    searchQuery: '',
  };

  handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    this.setState({ searchQuery: value });
  };

  handlerSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
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
