import React from 'react';
import { Global, css } from '@emotion/react';
import Container from './components/container';
import AuthContextProvider from './context';
import { BrowserRouter } from 'react-router-dom';

function MyApp() {
  console.log('test');
  return (
    <>
      <Global
        styles={css`
          *,
          ::before,
          ::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-size: 16px;
          }
        `}
      />
      <AuthContextProvider>
        <BrowserRouter>
          <Container />
        </BrowserRouter>
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
