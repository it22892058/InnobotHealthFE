import './App.css'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Verify from './Components/Verify/Verify' 
import Password  from './Components/Password/Password'
import Dashboard from './Components/common/common'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login /> </div>
  },
  {
    path: '/register',
    element: <div><Register /> </div>
  } ,
  {
    path: '/Verify',
    element: <div><Verify /> </div>
  } ,
  {
    path: '/password',
    element: <div><Password /> </div>
  },
  {
    path: '/dashboard',
    element: <div><Dashboard /> </div>
  },

 

])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
