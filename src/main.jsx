import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import Dashboard from './components/dashboard/Dashboard.jsx'
import Welcome from './components/welcome/welcome.jsx'
import Login from './components/login/login.jsx'
import { store } from '../util/createStore.jsx'
import { Provider } from 'react-redux'
import Home from './components/home/Home.jsx'
import { useContext } from 'react'


export let myValue = createContext("hello  world from context api value");

const router = createBrowserRouter([
  {
    path: "/",
    Component: Welcome
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      {
        path: "home",
        Component: Home
      }
    ]

  },
  {
    path: "/login",
    Component: Login,
  },
])

createRoot(document.getElementById('root')).render( 
  <myValue.Provider value={"hello from context api"}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </myValue.Provider> 
)
