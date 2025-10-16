import { createContext } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import {welcome} from './components/welcome/welcome.jsx' 
import {login} from './components/login/login.jsx'
import { store } from '../util/createStore.jsx'
import {home} from './components/home/home.js'
import dashboard from './components/dashboard/dashboard.jsx'


export let myValue = createContext("hello  world from context api value");

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
      }
    ]

  },
  {
    path: "/login",
    Component: login,
  },
])

createRoot(document.getElementById('root')).render( 
  <myValue.Provider value={"hello from context api"}>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </myValue.Provider> 
)
