import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import { store } from './store'
import AppNavigator from './routes';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppNavigator />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

