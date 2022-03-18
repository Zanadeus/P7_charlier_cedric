import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import DisconnectedBanner from "./components/Banner/DisconnectedBanner"
import Login from "./pages/Login"
import Signin from "./pages/Signin"

import ConnectedBanner from "./components/Banner/ConnectedBanner"
import Pagenotfound from "./pages/Page404"
import Home from './pages/Home'
import Profile from './pages/Profile'
import Logout from "./pages/Logout"
import CreatePost from "./pages/CreatePost"
import DisplayOnePost from "./pages/DisplayOnePost"

import getPermissionsFunction from "./components/User/authAPI"
//import CheckPermissions from './CheckPermissions'

function App() 
{
  const token = localStorage.getItem('token');

  const [permissions, setPermissions] = useState(0);
  useEffect(() => {
    if (token)
    {
      //console.log(token);
      getPermissionsFunction(token)
      .then((response) => {
        setPermissions(response);
      })
    }
  }, [])
  console.log(permissions);

  if (token) {
    return (
      <Router>
        <ConnectedBanner />

        <Routes>
          <Route exact path="/" element={<Home permissions={permissions}/>} />
          <Route exact path="/profile/:pseudo" element={<Profile permissions={permissions} />} />
          <Route exact path="/logout" element={<Logout />} />
          <Route exact path="/createPost" element={<CreatePost permissions={permissions} />} />
          <Route exact path="/post/:id" element={<DisplayOnePost permissions={permissions} />} />

          <Route exact path="*" element={<Pagenotfound />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <DisconnectedBanner />
      <Routes>
        <Route path="*" element={<Login />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </Router>
  )
}

export default App;