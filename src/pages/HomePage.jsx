import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  
  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
    </>
  );
}

export default HomePage;