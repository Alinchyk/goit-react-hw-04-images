import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppContainer } from './App.styled';
import fetchImages from './servise/serviseApi';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Spinner from './Loader/Loader';
import Modal from './Modal/Modal';

export default function App() {
  const [images, setImages] = useState([])
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [modalImg, setModalImg] = useState('')
 
  useEffect(() => {
    if (!query) {
      return;
    }

    setIsLoading(true);
    fetchImages(query, page)
      .then(data => {
        setImages(prevImages => [...prevImages, ...data.hits]);
        setIsLoading(false);
      })
      .catch(error => {
        console.log('Error fetching images:', error);
        setIsLoading(false);
      });
  }, [query, page]);

  const handleSubmit = query => {
    setImages([]);
    setQuery(query);
    setPage(1);
  };

 const handleLoadMore = () => {
      setPage(page + 1)
      setIsLoading(true)
  };

  const toggleModal = (src, alt) => {
    setShowModal(!showModal);
    setModalImg({ src, alt });
  };

     return (
      <AppContainer>
        <Searchbar onSubmit={handleSubmit} />
        {isLoading ? (
          <Spinner />
        ) : (
          <ImageGallery images={images} handleModalImg={toggleModal} />
        )}
        {!isLoading && images.length > 0 && (
        <Button onClick={handleLoadMore} page={1} />)}
        {showModal && (
          <Modal modalImg={modalImg} onClose={toggleModal} />
        )}
        <ToastContainer autoClose={3000} />
      </AppContainer>
    );
  }
  

