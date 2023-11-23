import  Component  from "react";
import  Button  from "./Button/Button";
import  ImageGallery  from "./ImageGallery/ImageGallery";
import  Loader  from "./Loader/Loader";
import Searchbar from "./Searchbar/Searchbar";
import fetchImages from "API/Api-gallery";

export default class App extends Component {
  state = {
    page: 1,
    search: "",
    loading: false,
    images: [],  
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page || this.state.search !== prevState.search) {
      this.setState({ loading: true });

      const { search, page } = this.state;

      fetchImages(search, page)
        .then(images => {
          this.setState({
            images,
            loading: false
          });
        });
    }
  }

    searchChange = (searchValue) => {
    this.setState({
      page: 1,
      search: searchValue,
    });
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      loading: true,
    }));
  }

  render() {
    const { loading, images } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.searchChange} />
        {loading && <Loader />}
        <ImageGallery images={images} />
        {images.length > 0 && <Button onClick={this.loadMore} />}
      </div>
    );
  }
}