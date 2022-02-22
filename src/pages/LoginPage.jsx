import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    axios
      .post('http://localhost:8000/dj-rest-auth/login/', {
        username: username,
        email: '',
        password: password,
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
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