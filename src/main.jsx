import React from 'react'
import ReactDOM from 'react-dom/client'
 import './index.css'
import { UsersApp } from './UsersApp.jsx'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <UsersApp />
    </BrowserRouter>
    
  </React.StrictMode>,
)
