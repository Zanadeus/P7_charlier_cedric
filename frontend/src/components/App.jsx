import '../styles/App.css';
import Banner from './Banner'
import Post from '../pages/Post'
import Signin from '../pages/Signin'
import Login from '../pages/Login'
import Profile from '../pages/Profile';

import { BrowserRouter as Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      {/*
      <Routes>
        <Banner />
        <Route path="/" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      */}

      {/*
      <Routes>
        <Banner />
        <Route path="/">
          <Post />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Routes>
      */}

<Banner />
<Profile />
<Signin />
<Login />
<Post />

    </div>
  )
}

export default App;
