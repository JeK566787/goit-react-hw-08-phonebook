import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { selectUserEmail, selectUserName } from 'redux/auth/selectors';

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
    <div>
      <p>{userName}</p>
      <p>{userEmail}</p>
      <button type="button" onClick={handleClick}>
        LOG OUT
      </button>
    </div>
  );
};

export default UserMenu;
