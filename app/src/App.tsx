import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { RegisterParticipant } from './participants/RegisterParticipant';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },
  {
    path:"/register",
    element:<RegisterParticipant/>
  },
  {
    path:"/recover",
    element:<div>rec</div>
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;