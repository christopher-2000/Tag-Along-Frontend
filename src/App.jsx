import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import SignUp from './screens/Signup';
import Welcome from './screens/Welcome';

const router = createBrowserRouter([
  {
    path: "/",
    index:true,
    element: <Welcome />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);

function App() {
  return(
    <RouterProvider router={router} />
  )
}

export default App
