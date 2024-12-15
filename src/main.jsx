import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Viewer from './pages/Viewer/Viewer.jsx'
import Error from './Error.jsx'
import Create  from './pages/Forms/Create.jsx'
import Home from './pages/Home/Home.jsx'
import Termos from './pages/Home/Termos.jsx';
import Privacidade from './pages/Home/Privacidade.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Home></Home>
  },
  {
    path:"/termos-de-uso",
    element: <Termos></Termos>
  },
  {
    path:"/politica-privacidade",
    element: <Privacidade></Privacidade>
  },
  {
    path:"/create",
    element: <Create/>
  },
  {
    path:"/:id/:passKey?",
    element: <Viewer/>
  },
  {
    path:'*',
    element: <Error></Error>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
