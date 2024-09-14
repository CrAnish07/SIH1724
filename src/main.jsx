import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('boot')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
