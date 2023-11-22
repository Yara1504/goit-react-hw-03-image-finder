import { Component } from "react";

export default class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleEsc);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleEsc);
    }

handleEsc = event => {
  if (event.code === 'Escape') {
    this.onClose();
  }
};

handleOverlay = event => {
  if (event.currentTarget === event.target) {
    this.onClose();
  }
};

render() {
    const { largeImageURL, tags } = this.props;
    return (
      <div  onClick={this.handleOverlay}>
        <div >
          <img
            src={largeImageURL}
            alt={tags}
            onClick={this.handleOverlay}
          />
        </div>
      </div>
    );
  }
}
