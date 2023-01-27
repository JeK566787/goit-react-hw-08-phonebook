import { Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
    navigate('/contacts');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {/* <span>email</span> */}
        <Input
          p="5"
          borderColor="lime"
          _placeholder={{ opacity: 1, color: 'gray.500' }}
          focusBorderColor="lime"
          variant="flushed"
          mt="50px"
          placeholder="Write your email"
          name="email"
          type="email"
          required
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        {/* <span>password</span> */}
        <Input
          p="5"
          layerStyle="input"
          borderColor="lime"
          _placeholder={{ opacity: 1, color: 'gray.500' }}
          variant="flushed"
          focusBorderColor="lime"
          mt="10px"
          placeholder="Write your password"
          name="password"
          type="password"
          required
          value={password}
          onChange={handleChange}
          minLength={8}
        />
      </label>
      <Button mt="15px" type="submit" colorScheme="teal" variant="outline">
        LOG IN
        {/* <button typy="sumbmit">LOGIN</button> */}
      </Button>
    </form>
  );
};

export default LoginForm;
