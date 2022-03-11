import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import DisconnectedBanner from "./components/Banner/DisconnectedBanner"
import Login from "./pages/Login"
import Signin from "./pages/Signin"

import ConnectedBanner from "./components/Banner/ConnectedBanner"
import Pagenotfound from "./pages/Pagenotfound"
import Feed from './pages/Feed'
import Profile from './pages/Profile'
import Logout from "./pages/Logout"
import CreatePost from "./pages/CreatePost"
import UniquePost from "./pages/UniquePost"

function App() {
  //const { token, setToken } = useToken();
  const token = localStorage.getItem('token');
  if(!token) 
  {
    return (
      <Router>
        <DisconnectedBanner />
        <Routes>
          <Route path="*" element={<Login /*setToken={setToken}*/ />} />
          <Route path="signin" element={<Signin />} />
        </Routes>
      </Router>
    )
  }

  return (
    <Router>
      <ConnectedBanner />
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route exact path="/profile/:pseudo" element={<Profile />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="/createPost" element={<CreatePost />} />
        <Route exact path="/post/:id" element={<UniquePost />} />
        

        <Route exact path="*" element={<Pagenotfound />} />
      </Routes>
    </Router>
  );
}

export default App;