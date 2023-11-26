import { Component } from 'react';
import css from './Searchbar.module.css';

class Searchbar extends Component {

  state = {
    search: '',
  };

  onChangeInput = (event) => {
    this.setState({ search: event.currentTarget.value });
  };

  onSubmitForm = (event) => {
    event.preventDefault();

    const { onSubmit } = this.props;
    const { search } = this.state;

    onSubmit(search);
  };

  render() {
    const { search } = this.state;

    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.onSubmitForm}>
          <button className={css.SearchFormButton} type="submit">
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={search}
            onChange={this.onChangeInput}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;