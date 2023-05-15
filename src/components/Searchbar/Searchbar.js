import { useState } from 'react';
import { SlMagnifier } from 'react-icons/sl';
import { toast } from 'react-toastify';
import {
  SearchBar,
  SerchForm,
  Input,
  SearchBtn,
  SerchFormBtnLabel,
} from './Searchbar.styled';

export default function Searchbar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handlesearchQueryChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error('Enter the query correctly...', { theme: 'colored' });
      return;
    }

    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <SearchBar>
      <SerchForm onSubmit={handleSubmit}>
        <SearchBtn type="submit">
          <SlMagnifier /> <SerchFormBtnLabel></SerchFormBtnLabel>
        </SearchBtn>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchQuery}
          onChange={handlesearchQueryChange}
        />
      </SerchForm>
    </SearchBar>
  );
}
