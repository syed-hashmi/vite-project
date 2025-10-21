import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import { welcome } from './components/welcome/welcome.jsx'
import { login } from './components/login/login.jsx'
import { store } from '../util/createStore.jsx'
import { home } from './components/home/home.jsx'
import dashboard from './components/dashboard/dashboard.jsx'
import { Provider } from 'react-redux'
import { AddMedicine } from './components/AddMedicine/addMedicine.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: welcome
  },
  {
    path: "/dashboard",
    Component: dashboard,
    children: [
      {
        path: "home",
        Component: home
      },
      {
        path: "addMedicine",
        Component: AddMedicine
      }
    ]

  },
  {
    path: "/login",
    Component: login,
  },
])

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
