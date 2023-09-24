<<<<<<< Updated upstream
import React from 'react';
import './App.css';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';

function App() {
=======
import React, {useState} from 'react';
import './App.css';
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';
import {useSelector} from "react-redux";

function App() {
    const {contacts, searchContact,
        searchWord} = useSelector(state => state);

>>>>>>> Stashed changes
  return (
    <div className="App">
      <h1>Книжка контактов</h1>
      <SearchBar />
      
<<<<<<< Updated upstream
      <ContactList />
=======
      <ContactList contacts={searchWord.length ?searchContact: contacts} />
>>>>>>> Stashed changes
    </div>
  );
}

export default App;