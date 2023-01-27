import { Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {/* <span>name</span> */}
        <Input
          p="5"
          borderColor="lime"
          _placeholder={{ opacity: 1, color: 'gray.500' }}
          focusBorderColor="lime"
          variant="flushed"
          mt="50px"
          placeholder="Write your name"
          name="name"
          type="text"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        {/* <span>email</span> */}
        <Input
          p="5"
          layerStyle="input"
          borderColor="lime"
          _placeholder={{ opacity: 1, color: 'gray.500' }}
          variant="flushed"
          focusBorderColor="lime"
          mt="10px"
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
      <Button mt="15px" colorScheme="teal" variant="outline" typy="sumbmit">
        REGISTER
        {/* <button typy="sumbmit">REGISTER</button> */}
      </Button>
    </form>
  );
};

export default RegisterForm;
