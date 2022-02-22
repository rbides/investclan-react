import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const LoginPage = () => {

  const auth = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    auth.login(username, password, navigate);
    e.preventDefault()
  }

  const handleChangeUsername = (e) => setUsername(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        label="username" 
        placeholder="username"
        onChange={handleChangeUsername}
      />
      <input 
        type="password" 
        label="password" 
        placeholder="password"
        onChange={handleChangePassword}
      /> 
      <button type="submit">Log In</button>
    </form>
  )
}

export default LoginPage;