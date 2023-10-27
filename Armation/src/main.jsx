import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Error } from './pages/error/error.jsx'
import { Home } from './pages/home/Home.jsx'
import {About} from './pages/about/About.jsx'
import {Services} from './pages/services/Services.jsx'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
    element: <Home/>,
      },
      {
        path: "about",
    element: <About/>,
      },
      {
        path: "services",
    element: <Services/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
