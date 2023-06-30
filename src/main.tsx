import './global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'


import App from './App.tsx'
import NewLogin from "./Pages/NewLoginPage/index.tsx";
import ProtectorRegisterPage from './Pages/ProtectorRegister/index.tsx'
import SupplierRegisterPage from './Pages/SupplierRegister/index.tsx'
import UsersRegisterPage from './Pages/UsersRegister/index.tsx'
import NewRegisterPage from './Pages/NewRegisterPage/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/login",
    element: <NewLogin/>
  },
  {
    path: "/register",
    element: <NewRegisterPage />
  },
  {
    path: "/register_protector",
    element: <ProtectorRegisterPage/>
  },
  {
    path: "/register_supplier",
    element: <SupplierRegisterPage/>
  },
  {
    path: "/register_users",
    element: <UsersRegisterPage/>
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
