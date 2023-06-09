import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './screens/Home';
import Phone from './screens/Phone';
import Laptop from './screens/Laptop';
import Smartwatch from './screens/Smartwatch';
import DetailPh from './screens/DetailPh';
import DetailLap from './screens/DetailLap';
import DetailSmartwatch from './screens/DetailSmartwatch';
import ErrorPage from './screens/NotFound';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    
  },
  {
    path: '/phone',
    element: <Phone />,
    
  },
  {
    path: '/laptop',
    element: <Laptop />,
    
  },
  {
    path: '/smartwatch',
    element: <Smartwatch />,
    
  },
  {
    path: '/detailph/:detailId',
    element: <DetailPh />,
    
  },
  {
    path: '/detaillap/:detailId',
    element: <DetailLap />,
    
  },
  {
    path: '/detailsmartwatch/:detailId',
    element: <DetailSmartwatch />,
    
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* < Home /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
