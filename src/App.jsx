import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


import './App.css'
import Login from './screens/Login';
import SignUp from './screens/Signup';
import Welcome from './screens/Welcome';
import { AuthProvider } from './context/AuthContext';
import AuthWrapper from './wrappers/AuthWrapper';
import TokenRefresher from './wrappers/TokenRefresher';
import Dashboard from './screens/afterLogin/Dashboard';
import RootLayout from './screens/afterLogin/RootLayout';

import Active from './screens/afterLogin/driver-routes/Active';
import Requests from './screens/afterLogin/driver-routes/Requests';
import History from './screens/afterLogin/driver-routes/History';
import DriverPortal from './screens/afterLogin/DriverPortal';
import Passenger from './screens/afterLogin/Passenger';
import Requested from './screens/afterLogin/passenger-routes/Requests';
import PassengerHistory from './screens/afterLogin/passenger-routes/History';


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
          path:'driver',
          element:<DriverPortal/>,
          children:[
            {
              element:<Active/>,
              index:true
            },
            {
              path:'requests',
              element:<Requests/>
            },
            {
              path:'history',
              element:<History />

            }
          ]
        },
        {
          path:'passenger',
          element:<Passenger />,
          children:[
            {
              index:true,
              element:<Requested/>
            },
            {
              path:'history',
              element:<PassengerHistory />
            }
          ]
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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TokenRefresher />
    <RouterProvider router={router} />
    </LocalizationProvider>
    </AuthProvider>
  )
}

export default App
