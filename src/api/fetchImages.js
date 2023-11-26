
const URL = 'https://pixabay.com/api/';
const KEY = '39882571-8c4775acb37a3d7cba8ebb9f4';

function fetchImages(search, page = 1) {
  return fetch(`${URL}?q=${search}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`).then(
    response => response.json()
  );
}

export default fetchImages;