import React from 'react'
import ReactDOM from 'react-dom/client'
import Background from './Components/background.jsx'
import Navbar from './Components/navbar.jsx'
import Logo from './Components/logo.jsx'
import Buttons from './Components/buttons.jsx'
import './index.css'
import About from './Components/about.jsx'
import Contact from './Components/contact.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Project from './Components/project.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'',
        element:(
          <>
        <Background/>
        <Buttons/>
          </>
        ),
      },
      {
        path:'about',
        element:(
          <>
        <About/>
          </>
        ),
      },
      {
        path:'project',
        element:(
          <>
        <Project/>
          </>
        ),
      },
      {
        path:'contact',
        element:(
          <>
        <Contact/>
          </>
        ),
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <RouterProvider router={router}/>
    </React.StrictMode> 
)
