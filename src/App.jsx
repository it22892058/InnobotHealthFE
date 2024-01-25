import './App.css'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/InnobotHealthFE',
    element: <div><Login /> </div>
  },
  {
    path: '/InnobotHealthFE/register',
    element: <div><Register /> </div>
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
