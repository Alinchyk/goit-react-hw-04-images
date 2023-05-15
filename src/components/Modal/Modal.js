import { useEffect } from 'react';
import { Overlay, ModalContainer } from './Modal.styled';

export default function Modal({ modalImg, onClose }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalContainer>
        <img src={modalImg.src} alt={modalImg.alt} />
      </ModalContainer>
    </Overlay>
  );
}
