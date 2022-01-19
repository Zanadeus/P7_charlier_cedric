import { render } from "react-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css'
import Banner from "./components/Banner"
import Post from './pages/Post'
import Login from "./pages/Login"
import Signin from "./pages/Signin"
import Profile from './pages/Profile'
import Pagenotfound from "./pages/Pagenotfound";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Banner />
    <Routes>
        <Route path="/" element={<Post />} />
        <Route path="login" element={<Login />} />
        <Route path="signin" element={<Signin />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Pagenotfound />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);