import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <HomePage/> } path="/" exact />
        <Route element={ <LoginPage/> } path="/login" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;