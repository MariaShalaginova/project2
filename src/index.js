import React from 'react';
import { createRoot } from 'react-dom/client';
import { createStoreHook, Provider } from 'react-redux';
// import { store } from './store/actions';
// import App from './App';
import ReduxApp from './App-redux';
import './index.css';
import {BrowserRouter} from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);

// const store = createStore()

root.render(
  <React.StrictMode>
    <BrowserRouter>
     {/* <Provider store={store}> */}
     <ReduxApp />
    {/* </Provider> */}
    </BrowserRouter>   
  </React.StrictMode>
);



