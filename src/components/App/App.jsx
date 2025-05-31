import { useState, useEffect } from 'react'
import style from "./App.module.css"
import "modern-normalize";


import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';


function App() {  


  return (
    <div className={ style.container }>
      <h1>Phonebook</h1>
      <ContactForm  />
      <SearchBox />
      <ContactList />
    </div>

  )
}

export default App
