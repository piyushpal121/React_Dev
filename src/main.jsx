import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/card.css'
import App from './App.jsx'
import State from './components/State.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <State/>
  </StrictMode>,
)
