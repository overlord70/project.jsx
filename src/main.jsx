import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const body = document.querySelector('#hi')
ReactDOM.createRoot(body).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
