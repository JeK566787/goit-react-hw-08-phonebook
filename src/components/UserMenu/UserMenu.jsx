import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <div>
      <p>user email</p>
      <button type="button" onClick={handleClick}>
        LOG OUT
      </button>
    </div>
  );
};

export default UserMenu;