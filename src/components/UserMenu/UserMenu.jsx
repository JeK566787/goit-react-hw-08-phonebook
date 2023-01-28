import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { selectUserEmail, selectUserName } from 'redux/auth/selectors';

import { Button, Box } from '@chakra-ui/react';

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
    <Box textStyle="p" mt="30px">
      <p>Hello, {userName}</p>

      <p>Your email: {userEmail}</p>
      <Button
        mb="20px"
        mt="10px"
        colorScheme="teal"
        variant="outline"
        type="button"
        onClick={handleClick}
      >
        LOG OUT
        {/* <button type="button" onClick={handleClick}>
            LOG OUT
          </button> */}
      </Button>
    </Box>
  );
};

export default UserMenu;
