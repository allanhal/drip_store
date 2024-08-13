import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Login from './components/Login.jsx'
import MeusPedidos from './components/MeusPedidos.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/meus-pedidos" element={<MeusPedidos />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
