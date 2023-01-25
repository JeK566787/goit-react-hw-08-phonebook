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
        <span>name</span>
        <input
          name="name"
          type="text"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>email</span>
        <input
          name="email"
          type="email"
          required
          value={email}
          onChange={handleChange}
        />
      </label>
      <label>
        <span>password</span>
        <input
          name="password"
          type="password"
          required
          value={password}
          onChange={handleChange}
          minLength={8}
        />
      </label>
      <button typy="sumbmit">REGISTER</button>
    </form>
  );
};

export default RegisterForm;
