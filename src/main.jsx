import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import Auth from './pages/Viewer/Auth.jsx'
import Card from './pages/Viewer/CardViewer.jsx'
import Error from './Error.jsx'
import CreateMessage  from './pages/Forms/CreateMessage.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Card></Card>
  },
  {
    path:"/create",
    element: <CreateMessage/>
  },
  {
    path:"/:id/:passKey?",
    element: <Card/>
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
