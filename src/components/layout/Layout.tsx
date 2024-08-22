import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

// Components
import Header from '../Header/Header.tsx';
import Footer from '../Footer/Footer.tsx';

const Layout: React.FC = () => {  
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      navigate('/sign-in');
    }
  }, [navigate]); 

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
