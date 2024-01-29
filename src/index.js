import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

import 'modern-normalize/modern-normalize.css';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/CreateGlobalStyle';
import { theme } from 'styles/theme';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';

import { store } from './myRedux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/goit-react-hw-08-phonebook">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
        <ToastContainer autoClose={1000} />
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);

//  <PersistGate loading={null} persistor={persistor}>
//    <App />
//  </PersistGate>;
