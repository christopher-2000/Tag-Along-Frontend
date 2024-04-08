import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import SignUp from './screens/Signup';
import Welcome from './screens/Welcome';
import { AuthProvider } from './context/AuthContext';
import AuthWrapper from './wrappers/AuthWrapper';
import TokenRefresher from './wrappers/TokenRefresher';

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
      path:"go",
      element: (<AuthWrapper><Dashboard /></AuthWrapper>),
    }
]);

function App() {
  return(
    <AuthProvider>
      <TokenRefresher />
    <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
