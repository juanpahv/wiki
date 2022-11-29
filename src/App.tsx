import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import React from 'react';
import Home from './components/routes/Home';
import LogIn from './components/routes/LogIn';
import SignUp from './components/routes/SignUp';
import Landing from './components/routes/Landing';
import CSS from './components/routes/articles/CSS';
import HTML from './components/routes/articles/HTML';
import HTTP from './components/routes/articles/HTTP';
import JavaScript from './components/routes/articles/JavaScript';
import Account from './components/routes/Account';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PasswordRecovery from './components/routes/PasswordRecovery';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        index: true,
        element: <Navigate to="/Landing" />
      },
      {
        path: '/Landing',
        element: <Landing />
      },
      {
        path: '/HTML',
        element: <HTML />
      },
      {
        path: '/CSS',
        element: <CSS />
      },
      {
        path: '/HTTP',
        element: <HTTP />
      },
      {
        path: '/JavaScript',
        element: <JavaScript />
      }
    ]
  },
  {
    path: '/LogIn',
    element: <LogIn />
  },
  {
    path: '/SignUp',
    element: <SignUp />
  },
  {
    path: '/Account',
    element: <Account />
  },
  {
    path: '/PasswordRecovery',
    element: <PasswordRecovery/>
  }
  // ,
  // {
  //   path: '/autos',
  //   element: <Autos />,
  //   children: [
  //     {
  //       path: '/autos',
  //       index: true,
  //       element: <ListaAutos />
  //     },
  //     {
  //       path: '/autos/registrar',
  //       element: <RegistroAuto />
  //     },
  //     {
  //       path: '/autos/:idAuto',
  //       element: <DetalleAuto />
  //     }
  //   ]
  // }
]);

export default function App() {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={appRouter} />
    </>
  );
}
