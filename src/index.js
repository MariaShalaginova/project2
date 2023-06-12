import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
// import App from './App';
import ReduxApp from './App-redux';
import './index.css';
import {BrowserRouter} from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
     {/* <Provider store={store}> */}
     <ReduxApp />
    {/* </Provider> */}
    </BrowserRouter>   
  </React.StrictMode>
  </Provider>
);



