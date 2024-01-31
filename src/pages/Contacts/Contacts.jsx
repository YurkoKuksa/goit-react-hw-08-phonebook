import { Suspense } from 'react';

import { Error, HeaderTwo, MainContainer } from './Contacts.styled';

import { selectError, selectIsLoading } from 'myRedux/contacts/selectors';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNameThunk } from 'myRedux/contacts/operations';

import { Loader } from 'components/Loader/Loader';

import { Filter } from 'components/Filter/Filter';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Form } from 'components/Form/Form';

const Contacts = () => {
  const dispatch = useDispatch();

  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchNameThunk());
  }, [dispatch]);

  return (
    <Suspense>
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
    </Suspense>
  );
};

export default Contacts;
