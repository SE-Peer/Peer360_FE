import { Routes, Route, useLocation } from 'react-router-dom';

import LoginPage from '@/pages/login';
import SignupPage from '@/pages/signup';
import LocationValidationPage from '@/pages/locationvalidation';

import MainPage from './pages/mainpage';
import { AddBook } from './pages/addbook';

function App() {
  const location = useLocation();

  return (
    <>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<LoginPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/locationvalidation" element={<LocationValidationPage />} />
      </Routes>
    </>
  );
}

export default App;
