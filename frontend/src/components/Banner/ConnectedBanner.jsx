import '../../styles/Banner.css'
import logo from '../../assets/icon-left-font-monochrome-white.svg'
import { Outlet, Link } from 'react-router-dom'

function ConnectedBanner() {
  return (
  <header>
    <div>
      <Link to="/"><img src={logo} alt="logo de groupomania"/></Link>
    </div>
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/profile">Profil</Link>
      <Link to="/logout">Se Déconnecter</Link>
    </nav>
      <Outlet />
  </header>
  )
}

export default ConnectedBanner