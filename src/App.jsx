import './App.css'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import Verify from './Components/Verify/Verify' 
import Password  from './Components/Password/Password'
import Dashboard from './Components/common/common'
import Appointments from './Components/Appointments/Appointments'
import ClaimForm from './Components/ClaimManage/ClaimForm'
import UpdateForm from './Components/UpdateClaim/UpdateForm'
import OverviewClaim from './Components/ClaimOverview/OverviewClaim'

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
  {
    path: '/appointments',
    element: <div><Appointments/> </div>
  },
  {
    path: '/ClaimManage',
    element: <div><ClaimForm /> </div>
  },
  {
    path: '/UpdateClaim',
    element: <div><UpdateForm /> </div>
  },
  {
    path: '/ClaimOverview',
    element: <div><OverviewClaim /> </div>
  }

])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
