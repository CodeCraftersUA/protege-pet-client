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
import NewAnimalListPage from './Pages/NewAnimalListPage/index.tsx'
import NewAssociateListPage from './Pages/NewAssociateList/index.tsx'
import NewProtectorListPage from './Pages/NewProtectorList/index.tsx'
import NewSupplierListPage from './Pages/NewSupplierListPage/index.tsx'
import DashboardPage from './Pages/DashboardPage/index.tsx'
import OccurrenceListPage from './Pages/OccurrenceListPage/index.tsx'
import OccurencePage from './Pages/OccurrencePage/index.tsx';

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
    path: "/dashboard",
    element: <DashboardPage />
  },
  {
    path: "/animals",
    element: <NewAnimalListPage />
  },
  {
    path: "/associates",
    element: <NewAssociateListPage />
  },
  {
    path: "/occurrence_page",
    element: <OccurencePage />
  },
  {
    path: "/occurrences",
    element: <OccurrenceListPage />
  },
  {
    path: "/protectors",
    element: <NewProtectorListPage />
  },
  {
    path: "/suppliers",
    element: <NewSupplierListPage />
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
