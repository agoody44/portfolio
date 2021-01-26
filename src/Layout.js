
// import { useState, useEffect } from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';


const StyledLayout = styled.div`
    display: flex;
    flex-wrap: nowrap; 
    flex-direction: column;
    min-height: 100vh;
`;

function Layout() {
  return (
    <StyledLayout>
      <Header />
      <br/>
      <HomePage />
      <Footer />
    </StyledLayout>
  );
}

export default Layout;
