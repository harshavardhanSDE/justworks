import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.jsx'; 
import './index.scss'
import { ThemeProvider } from './ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <Root />
    </ThemeProvider>
  </React.StrictMode>
)

