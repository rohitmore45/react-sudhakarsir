import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import reportWebVitals from './reportWebVitals';

import { LoginComponent } from './components/login/login.component'
import { NetflixIndex } from './netflix/netflix-index/netflix-index';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { UseStateComponent } from './components/useState demo/use-state.component';
import { NasaComponent } from './components/NASA-Api/nasa.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <LoginComponent /> */}
    {/* <NetflixIndex />  */}
    {/* <DataBindingComponent /> */}
    {/* <UseStateComponent /> */}
    <NasaComponent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
