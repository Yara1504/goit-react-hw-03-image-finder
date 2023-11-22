import Modal from "../Modal/Modal";
import React, { Component } from 'react';

export class ImageGalleryItem extends Component {
    state = {
        stateModal: false,
    }

    changeStateModal = () => {
        this.setState(prevState => ({
        stateModal: !prevState.stateModal
    }));
    };
    
    render() {
        const { stateModal } = this.state;
        const { image } = this.props;

        return (
        <li>
            <img
                src={image.webformatURL}
                alt={image.tags}
                onClick={this.changeStateModal}
                />
                
            {stateModal && (
            <Modal
              largeImageURL={image.largeImageURL}
              alt={image.tags}
              onClose={this.changeStateModal}
            />
            )}
        </li>
        )
    }
}
