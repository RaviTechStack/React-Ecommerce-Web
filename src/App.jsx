import React, { useEffect, useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'
import SingleProd from './pages/SingleProd'
import AllProd from './pages/AllProd'
import Cart from './pages/Cart'
import "./App.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { useProdContext} from './context/ProductContext'
const App = () => {
  const router = createBrowserRouter([
    {
      path : "/",
      element: <Home />
    },
    {
      path : "/about",
      element: <About />,
      children: [
        {
          path : "/about/:data",
          element: <About />
        }
      ]
    },
    {
      path : "/prod/:id",
      element: <SingleProd />
    },
    {
      path : "/allprod",
      element: <AllProd />
    },
    {
      path :"/cart",
      element: <Cart />
    }
  ])
 


return (
    
    <div>
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
