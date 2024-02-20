import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import reportWebVitals from './reportWebVitals';

import { LoginComponent } from './components/login/login.component'
import { NetflixIndex } from './netflix/netflix-index/netflix-index';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { UseStateComponent } from './components/useState demo/use-state.component';
import { NasaComponent } from './components/NASA-Api/nasa.component';
import { NasaPhotosCardComponent } from './components/NASA-Api/nasa-photos-card.component';
import { FakeStoreComponent } from './components/fakestore-api/fakestore.component';
import { StyleBinding } from './components/style-binding/style.binding.jsx';
import { ClassBinding } from './components/class-binding/class.binding.jsx';
import { ClassBindingDemo } from './components/class-binding-demo/class.bindingdemo.jsx';
import { EventBinding } from './components/event-binding/event-binding.jsx';
import { MouseDemo } from './components/mouse-demo/mouse-demo.jsx';
import { OnMouseOut } from './components/mouse-demo/onmouse-out.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <LoginComponent /> */}
    {/* <NetflixIndex />  */}
    {/* <DataBindingComponent /> */}
    {/* <UseStateComponent /> */}
    {/* <NasaComponent /> */}
    {/* <NasaPhotosCardComponent /> */}
    {/* <FakeStoreComponent /> */}
    {/* <StyleBinding /> */}
    {/* <ClassBinding /> */}
    {/* <ClassBindingDemo /> */}
    {/* <EventBinding /> */}
    {/* <MouseDemo /> */}
    <OnMouseOut />
  </React.StrictMode>
);

reportWebVitals();
