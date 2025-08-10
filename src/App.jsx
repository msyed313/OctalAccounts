import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'

function App() {
  const routes=createBrowserRouter([
    {
      path:'/',
      element:<Layout />,
      children:[
        {
           path:"",
           element:<Home />
        }
      ]
    }
   ])

  return (
    <RouterProvider router={routes} />
  )
}

export default App
