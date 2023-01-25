import { Ul, Li, Btn } from './ContactList.styled';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const setFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <Ul>
      {setFilteredContacts().map(({ number, name, id }) => (
        <Li key={id}>
          {name}: {number}
          <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Btn>
        </Li>
      ))}
    </Ul>
  );
};
