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
import History from './screens/afterLogin/driver-routes/History';
import DriverPortal from './screens/afterLogin/DriverPortal';
import Passenger from './screens/afterLogin/Passenger';
import Requested from './screens/afterLogin/passenger-routes/Requests';
import PassengerHistory from './screens/afterLogin/passenger-routes/History';
import CreateRide from './screens/afterLogin/CreateRide';
import Profile from './screens/afterLogin/Profile';
import Community from './screens/afterLogin/Community';
import { RidesProvider } from './context/RidesContext';
import SearchRides from './screens/afterLogin/passenger-routes/SearchRides';


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
      element: (
        <AuthWrapper>
          <TokenRefresher />
          <RidesProvider>
            <RootLayout />
          </RidesProvider>
        </AuthWrapper>
        ),
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
              path:'history',
              element:<History />

            }
          ]
        },
        {
          path:'create-ride',
          element:<CreateRide/>,
        },
        {
          path:'passenger',
          element:<Passenger />,
          children:[
            { 
              index:true,
              element:<SearchRides />
            },
            {
              path:'requested',
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
          element:<Profile />
        },
        {
          path:'community',
          element:<Community />
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
          <RouterProvider router={router} />
        </LocalizationProvider>
    </AuthProvider>
  )
}

export default App
