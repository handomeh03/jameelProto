import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Go from './Context/GoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Go>
          <App />
    </Go>
   
  </StrictMode>,
)
