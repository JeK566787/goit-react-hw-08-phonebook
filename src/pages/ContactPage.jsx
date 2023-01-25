import { Container, Message } from 'components/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import {
  selectContacts,
  selectError,
  selectLoading,
} from 'redux/contacts/selectors';

const ContactPage = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 ? (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactsList />
        </>
      ) : (
        <Message>Contacts list is empty yet</Message>
      )}
      {isLoading && <Loader />}
      {error && <h1>{error}</h1>}
    </Container>
  );
};

export default ContactPage;
