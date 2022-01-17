import '../styles/App.css';
import Banner from './Banner'
import Post from '../pages/Post'
import Signin from '../pages/Signin'
import Login from '../pages/Login'
import Profile from '../pages/Profile';

function App() {
  return (
    <div>
      <Banner />
      <Profile />
      <Signin />
      <Login />
      <Post />
    </div>
  )
}

export default App;
