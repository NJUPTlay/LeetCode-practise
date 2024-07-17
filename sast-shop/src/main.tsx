import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './Route.tsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
)
