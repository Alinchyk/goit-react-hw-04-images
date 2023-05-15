import { LoadMoreBtn } from './Button.styled';
import { animateScroll as scroll } from 'react-scroll';

export default function Button({ onClick }) {
  const scrollPageOnBtnMore = () => {
    onClick();
    scroll.scrollToBottom();
  };

  return (
    <LoadMoreBtn onClick={scrollPageOnBtnMore} type="button">
      Load more
    </LoadMoreBtn>
  );
}
