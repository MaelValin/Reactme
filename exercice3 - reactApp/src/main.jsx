import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from './routes/root.jsx';
import About from './routes/about.jsx';
import Layout from './routes/layout.jsx';
import Buy, {loader as buyLoader} from './routes/buy.jsx';
import Sales,{loader as teamLoader}  from './routes/sales.jsx';
import ErrorPages from './routes/ErrorPage.jsx';


import './index.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Root />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/buy',
        element: <Buy />,
        loader: buyLoader
      },
      {
        path: 'team/:teamName',
        element: <Sales />,
        loader: teamLoader
        
      },
      {
        path: '*',
        element: <ErrorPages />
      },
      
    ]
  }
]);

const rootElement = document.querySelector('#root');

if (rootElement) {
  ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
} else {
  console.error('No root element found');
}
