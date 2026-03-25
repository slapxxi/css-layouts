// libs
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// pages
import { AboutPage } from '~/pages/about';
import { IndexPage } from '~/pages/index';
import { RootLayout } from '~/pages/root';
// styles
import '~/styles/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
