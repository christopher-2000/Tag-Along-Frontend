import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Login from './screens/Login';
import SignUp from './screens/Signup';
import Welcome from './screens/Welcome';
import { AuthProvider } from './context/AuthContext';
import AuthWrapper from './wrappers/AuthWrapper';
import TokenRefresher from './wrappers/TokenRefresher';
import Dashboard from './screens/afterLogin/Dashboard';
import RootLayout from './screens/afterLogin/RootLayout';
import Rides from './screens/afterLogin/Rides';

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
      element: (<AuthWrapper><RootLayout /></AuthWrapper>),
      children:[
        {
          path:'',
          element:<Dashboard/>
        },
        {
          path:'rides',
          element:<Rides/>
        },
        {
          path:'profile',
          element:<Dashboard/>
        },
        {
          path:'community',
          element:<Dashboard/>
        },
        {
          path:'reviews',
          element:<Dashboard/>
        },

      ]
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
