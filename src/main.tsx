// libs
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// pages
import { AboutPage } from '~/pages/about';
import { IndexPage } from '~/pages/index';
import { RiversideGolfPage } from '~/pages/riverside-golf';
import { RootLayout } from '~/pages/root';
import { SecurityWalletPage } from '~/pages/security-wallet';
import { SignatureCoffeePage } from '~/pages/signature-coffee';

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
      {
        path: 'signature-coffee',
        element: <SignatureCoffeePage />,
      },
      {
        path: 'riverside-golf',
        element: <RiversideGolfPage />,
      },
      {
        path: 'security-wallet',
        element: <SecurityWalletPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
