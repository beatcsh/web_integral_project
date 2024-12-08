import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { CreateEvent } from './admins/CreateEvent';
import { RegisterParticipant } from './participants/RegisterParticipant';
import { CreateTeam } from './participants/CreateTeam';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Dashboard } from './admins/Dashboard';
import { ListUser } from './admins/ListUser';
import { ListEvents } from './admins/ListEvents';
import { ListTeam } from './admins/ListTeam';

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
  },
  {
    path:"/home",
    element:<div>pipipi</div>
  },
  {
    path:"/createEvent",
    element:<CreateEvent/>
  },
  {
    path:"/createTeam",
    element:<CreateTeam/>
  },
  {
    path:"/admins/dash",
    element:<Dashboard/>
  },
  {
    path:"/users/list",
    element:<ListUser/>
  },
  {
    path:"/teams/list",
    element:<ListTeam/>
  },
  {
    path:"/events/list",
    element:<ListEvents/>
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