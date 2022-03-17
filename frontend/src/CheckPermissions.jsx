import React, { useEffect, useState } from 'react'
import { BrowserRouter as Routes, Route } from "react-router-dom"

import Pagenotfound from "./pages/Page404"
import Feed from './pages/Home'
import Profile from './pages/Profile'
import Logout from "./pages/Logout"
import CreatePost from "./pages/CreatePost"
import UniquePost from "./pages/DisplayOnePost"

import getPermissionsFunction from "./components/User/authAPI"

function CheckPermissions() 
{

  const [permissions, setPermissions] = useState(0);
  useEffect(() => {
    getPermissionsFunction(JSON.parse(localStorage.getItem('token')))
    .then((response) => {
      setPermissions(response);
    })
  }, [])

  return (
    <Routes>
      <Route exact path="/" element={<Feed />} />
      <Route exact path="/profile/:pseudo" element={<Profile permissions={permissions} />} />
      <Route exact path="/logout" element={<Logout permissions={permissions} />} />
      <Route exact path="/createPost" element={<CreatePost permissions={permissions} />} />
      <Route exact path="/post/:id" element={<UniquePost permissions={permissions} />} />
      
      <Route exact path="*" element={<Pagenotfound />} />
    </Routes>
  );
}

export default CheckPermissions