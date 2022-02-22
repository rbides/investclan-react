import './App.css';
import React, { useState } from 'react';
import Router from './Router';
import axios from 'axios';
import AuthContext from './context/AuthContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { apiUrls } from './apiUrls';

function App() {
  const [authStatus, setAuthStatus] = useState(false);
  const login = (username, password, navigate) => {
    axios
      .post(apiUrls.login, {
        username: username,
        email: '',
        password: password,
      })
      .then(res => {
        setAuthStatus(true)
        navigate('/')
      })
      .catch(err => console.log(err))
  };

  return (
    <AuthContext.Provider value={{ status: authStatus, login: login }}>
      <Router>
        {authStatus ? <HomePage/> : <LoginPage/>}
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
