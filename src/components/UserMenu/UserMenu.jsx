import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { selectUserEmail, selectUserName } from 'redux/auth/selectors';

import { Center, Flex, Button } from '@chakra-ui/react';

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userEmail = useSelector(selectUserEmail);
  const userName = useSelector(selectUserName);

  const handleClick = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <Center mt="30px">
      <Flex flexDirection="column">
        <p>Hello {userName}</p>

        <p>Your email: {userEmail}</p>
        <Button colorScheme="teal" variant="outline">
          <button type="button" onClick={handleClick}>
            LOG OUT
          </button>
        </Button>
      </Flex>
    </Center>
  );
};

export default UserMenu;
