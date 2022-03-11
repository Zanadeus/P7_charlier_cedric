import '../../styles/Banner.css'
import logo from '../../assets/icon-left-font-monochrome-white.svg'
import { Outlet, Link } from 'react-router-dom'

function ConnectedBanner() {
  let profile = JSON.parse(localStorage.getItem('user')) ;
  let userName = profile.userName;
  console.log(userName);
  return (
  <header>
    <div>
      <Link to="/"><img src={logo} alt="logo de groupomania"/></Link>
    </div>
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/createPost">Publier</Link>
      <Link to={`/profile/${userName}`}>Profil</Link>
      <Link to="/logout">Se Déconnecter</Link>
    </nav>
      <Outlet />
  </header>
  )
}

export default ConnectedBanner