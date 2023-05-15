const API_KEY = '30904460-97bcb9f828968abe2ea74d58c';

function fetchImages(query, page = 1) {
  const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  return fetch(url).then(response => {
    if (response.ok) {
      return response.json().then(data => {
        if (data.hits.length > 0) {
          return data;
        } else {
          throw new Error('No images found for the query');
        }
      });
    }

    return Promise.reject(new Error('No response from server'));
  });
}

export default fetchImages;
