import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
<<<<<<< Updated upstream
import { sortContacts } from '../redux/contactsActions';
=======
import {searchContact, sortContacts} from '../redux/contactsActions';
>>>>>>> Stashed changes

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
<<<<<<< Updated upstream
    setSearchTerm(e.target.value);
=======
      setSearchTerm(e.target.value)
    dispatch(searchContact(e.target.value))
>>>>>>> Stashed changes
  };

  const handleSortChange = (e) => {
    dispatch(sortContacts(e.target.value));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Поиск по имени"
        value={searchTerm}
        onChange={handleSearch}
      />
      <select onChange={handleSortChange}>
<<<<<<< Updated upstream
        <option value="имя">Сортировать по имени</option>
        <option value="фамилия">Сортировать по фамилии</option>
=======
        <option value="name">Сортировать по имени</option>
        <option value="lastname">Сортировать по фамилии</option>
>>>>>>> Stashed changes
      </select>
    </div>
  );
};

export default SearchBar;