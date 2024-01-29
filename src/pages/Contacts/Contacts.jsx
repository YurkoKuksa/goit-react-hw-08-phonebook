import { Error, HeaderTwo, MainContainer } from './Contacts.styled';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNameThunk } from 'myRedux/operations';
import { selectError, selectIsLoading } from 'myRedux/selectors';
import { Loader } from 'components/Loader/Loader';
import { Form } from 'react-router-dom';
import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';

const Contacts = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchNameThunk());
  }, [dispatch]);

  return (
    <MainContainer>
      {loading && <Loader />}
      <HeaderTwo>Phonebook</HeaderTwo>
      <Form />

      <HeaderTwo>Contacts</HeaderTwo>
      <Filter />
      {loading && <Loader />}
      {error && <Error>Something went wrong...</Error>}
      <ContactsList />
    </MainContainer>
  );
};

export default Contacts;
