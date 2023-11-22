import { Component } from "react";

export default class Searchbar extends Component {
    state = {
        inputValue: "",
    }

    inputChange = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.inputValue);
    }

    render() {
        return (
            <header>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit">
                        <span>Search</span>
                    </button>

                    <input
                        type="text"
                        autoComplete="off"
                        placeholder="Search images and photos"
                        value={this.state.inputValue}
                        onChange={this.inputChange}
                    />
                </form>
            </header>
        );
    }
}