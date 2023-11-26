import { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleEsc);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleEsc);
    }
  
handleEsc = event => {
  if (event.key === 'Escape') {
    this.props.onClose();
  }
};

handleOverlay = event => {
  if (event.currentTarget === event.target) {
    this.props.onClose();
  }
};



  render() {
    const { currentImageUrl } =
      this.props;

    return (
      <div className={css.Overlay} onClick={this.handleOverlay}>
        <div className={css.Modal}>
          <img
            src={currentImageUrl}
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    );
  }
}

export default Modal;
