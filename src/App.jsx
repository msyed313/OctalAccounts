import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import Login from './components/Login'

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
    },
    {
      path: '/login',
      element:<Login/>
    }
   ])

  return (
    <RouterProvider router={routes} />
  )
}

export default App
