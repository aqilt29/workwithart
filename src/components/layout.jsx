import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import NavBar from './navbar';

import 'normalize.css'

const PageBody = styled.div`
  /* background-color: #2C3539;
  height: auto; */
`;

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: #2C3539;
    margin: 0;
    padding: 0;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <PageBody>
        <NavBar />
        <div>{children}</div>
      </PageBody>
    </>
  )
};

export default Layout;
