import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main.jsx';
import Phones from './components/Phones.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "phones",
        element: <Phones />,
        loader: () => fetch(`http://localhost:5000/phones`),
      },
      {
        path: "/phones/:id",
        element: <phone></phone>,
        loader:({params})=>fetch(`http://localhost:5173/phone/${params.id}`)
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
