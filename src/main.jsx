import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalStateContextProvider } from './contexts/GlobalStateContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStateContextProvider>
      <App />
    </GlobalStateContextProvider>
  </StrictMode>,
)
