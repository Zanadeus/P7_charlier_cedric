import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Banner from "./components/Banner/Banner"
import Feed from './pages/Feed'
import Login from "./pages/Login"
import Signin from "./pages/Signin"
import Pagenotfound from "./pages/Pagenotfound"
import Profile from './pages/Profile'

function App() {
  return (
    <Router>
      <Banner />
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="signin" element={<Signin />} />
        <Route exact path="*" element={<Pagenotfound />} />

        <Route path="profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;