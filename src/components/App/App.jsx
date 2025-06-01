import { useState, useEffect } from 'react'
import style from "./App.module.css"
import "modern-normalize";

import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import { useSelector } from 'react-redux';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { selectError, selectIsLoading } from '../../redux/contactsSlice';


function App() {  


  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts()).unwrap().then(() => console.log("Success :)")).catch(() => console.log("Error :("));
  }, [dispatch]);

  return (
    <div className={ style.container }>
      <h1>Phonebook</h1>
      <ContactForm  />
      <SearchBox />
      
      {loading && <p>Loading contacts...</p>}
      {error && <p className={style.error}>Error: {error}</p>}
      <ContactList />
    </div>

  )
}

export default App
