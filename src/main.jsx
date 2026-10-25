import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './context/CartContext.jsx'
import GlobalProvider from './context/GlobalContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <GlobalProvider>
      <CartProvider>    
        <BrowserRouter basename="/DESLATAM_react-full-project/">
          <App />
        </BrowserRouter>
      </CartProvider>
   </GlobalProvider>
  </StrictMode>,
)
