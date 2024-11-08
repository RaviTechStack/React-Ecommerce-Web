import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProdContextProvider } from "./context/ProductContext.jsx"
import { FilterContextProvider } from './context/FilterProdContext.jsx'
import { CartoContextProvider } from './context/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ProdContextProvider>
    <FilterContextProvider>
      <CartoContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>,
      </CartoContextProvider>
    </FilterContextProvider>
  </ProdContextProvider>

)
