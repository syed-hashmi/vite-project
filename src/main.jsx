import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import Dashboard from './components/dashboard/Dashboard.jsx'
import Welcome from './components/welcome/welcome.jsx'
import Login from './components/login/login.jsx'
import { AuthProvider } from './authContext/AuthContext.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    Component: Welcome,
  },
  {
    path: "/login",
    Component: Login,
    children: [
      {
        index: true,
        Component: Login
      }
    ]
  },
  {
    path: "/dashboard",
    Component: Dashboard,

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
