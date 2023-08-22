import * as React from 'react';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Greeting from './components/Greeting';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Greeting />,
  },
]);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
