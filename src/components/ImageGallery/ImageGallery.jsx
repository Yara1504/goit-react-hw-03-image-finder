import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export default function ImageGallery ({ images }) {
    return (
        <ul>
            {images.map(image => (
                <ImageGalleryItem key={image.id} image={image}/>
            ))}
        </ul>
    )
}