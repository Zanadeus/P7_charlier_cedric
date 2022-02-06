import '../../styles/Banner.css'
import logo from '../../assets/icon-left-font-monochrome-white.svg'
import { Outlet, Link } from 'react-router-dom'

function ConnectedBanner() {
  //let userName = sessionStorage.getItem('pseudo');
  let userMail = sessionStorage.getItem('userMail');
  return (
  <header>
    <div>
      <Link to="/"><img src={logo} alt="logo de groupomania"/></Link>
    </div>
    <nav>
      <Link to="/">Accueil</Link>
      {//<Link to={`/profile/${userName}`}>Profil</Link>
      }
      <Link to={`/profile/${userMail}`}>Profil</Link>
      <Link to="/logout">Se Déconnecter</Link>
    </nav>
      <Outlet />
  </header>
  )
}

export default ConnectedBanner