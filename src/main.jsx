import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from './reportWebVitals';


import Home from './containers/Home';
import Test from './containers/Test';
import Results from './containers/Results';

import './css/index.scss';
import ResultContextProvider from './ResultContextProvider';
import Layout from './containers/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/results",
    element: <Results />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ResultContextProvider> 
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </ResultContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();