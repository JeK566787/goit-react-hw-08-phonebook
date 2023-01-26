import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { filterContacts } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <Label>
      Find contacts by name
      <Input
        name="filter"
        type="text"
        value={filter}
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </Label>
  );
};
