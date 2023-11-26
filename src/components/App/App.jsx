import { Component } from 'react';
import fetchImages from 'api/fetchImages';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

   class App extends Component {
  state = {
    search: '',
    page: 1,
    loading: false,
    images: [],
    modalWindow: false,
    currentImageUrl: "",
    error: null,
  };
     
async componentDidUpdate(prevProps, prevState) {
  const { page, search } = this.state;
  if (search !== prevState.search) {
    try {
      this.setState({ loading: true, error: null });
      const { hits } = await fetchImages(search);
      const imagesArray = hits.map(hit => ({
        id: hit.id,
        webformatURL: hit.webformatURL,
        largeImageURL: hit.largeImageURL,
      }));
      this.setState({
        page: 1,
        images: imagesArray,
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState(({ loading }) => ({ loading: !loading }));
    }
  }
  if (prevState.page !== page && page !== 1) {
    try {
      this.setState(({ loading }) => ({ loading: !loading }));
      const { hits } = await fetchImages(search, page);
      const imagesArray = hits.map(hit => ({
        id: hit.id,
        webformatURL: hit.webformatURL,
        largeImageURL: hit.largeImageURL,
      }));
      this.setState(({ images }) => ({
        images: [...images, ...imagesArray],
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState(({ loading }) => ({ loading: !loading }));
    }
  }
}
  searchImg = search => {
    this.setState({ search, page: 1, images: [], error: null });
  };
     loadMore = () => {
       this.setState(({ page }) => ({ page: page + 1 }));
     };
  modalWindow = () => {
    this.setState(({ modalWindow }) => ({ modalWindow: !modalWindow }));
  };
  openImg = e => {
    const currentImageUrl = e.target.dataset.large;
      this.setState(({ modalWindow }) => ({
        modalWindow: !modalWindow,
        currentImageUrl: currentImageUrl,
      }));
  };
  render() {
    const {
      images,
      loading,
      modalWindow,
      currentImageUrl,
    } = this.state;
    const searchImg = this.searchImg;
    const loadMore = this.loadMore;
    const openImg = this.openImg;
    return (
      <>
        <Searchbar onSubmit={searchImg} />
        {images && <ImageGallery images={images} openImg={openImg} />}
        {loading && <Loader />}
        {images.length >= 12 && <Button loadMore={loadMore} />}
        {modalWindow && (
          <Modal
            currentImageUrl={currentImageUrl}
            onClose={this.modalWindow}
          />
        )}
      </>
    );
  }
}
export default App;