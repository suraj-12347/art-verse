import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from "react-redux";
import { store } from "./redux/Store.js";  

createRoot(document.getElementById('root')).render(
 
  <StrictMode>
   <BrowserRouter>
   <Provider store={store}>  {/* ✅ Wrap your entire app */}
    <App />
  </Provider>
   </BrowserRouter>
  </StrictMode>,
 
)
