import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({ webformatURL, largeImageURL, openImg }) {
  return (
    <li className={css.ImageGalleryItem}
      onClick={openImg}>
      <img src={webformatURL}
        alt="" data-large={largeImageURL}
        className={css.ImageGalleryItemImage} />
    </li>
  );
}

export default ImageGalleryItem;

      //onClick={() => openImg(largeImageURL)}>
