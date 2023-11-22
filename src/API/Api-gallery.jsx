const API_KEY = '39941282-dea05c707e9b8313607810d27';

function fetchImages(search, page) {
    return fetch(`https://pixabay.com/api/?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => response.json())
        .catch(error => {console.error(error);
    });
};

export default fetchImages;