import './global.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'


import App from './App.tsx'
import UserLogin from './Pages/UserLogin/index.tsx'
import ProtectorRegisterPage from './Pages/ProtectorRegister/index.tsx'
import SupplierRegisterPage from './Pages/SupplierRegister/index.tsx'
import UsersRegisterPage from './Pages/UsersRegister/index.tsx'
import CommonUserRegisterPage from './Pages/CommonUserRegister/index.tsx'
import AdmRegisterPage from './Pages/AdmRegister/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/login",
    element: <UserLogin/>
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
  {
    path: "/register_common_user",
    element: <CommonUserRegisterPage/>
  },
  {
    path: "/register_adm",
    element: <AdmRegisterPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
