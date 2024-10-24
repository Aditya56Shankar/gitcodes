import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Home from './routes/home.tsx';
import Reports from './routes/reportal.tsx';
import Result from './routes/result.tsx';
import Settings from './routes/setting.tsx';
import ManageUsers from './routes/user.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/user",
    element: <ManageUsers />
  },
  {
    path: "/reportal",
    element: <Reports />
  },
  {
    path: "/setting",
    element: <Settings />
  },
  {
    path: "/result",
    element: <Result />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
