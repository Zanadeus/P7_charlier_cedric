import '../../styles/Banner.css'
import logo from '../../assets/icon-left-font-monochrome-white.svg'
import { Outlet, Link } from 'react-router-dom'

function Banner() {
  /*
  useEffect(() => {
    document.title = `Groupomania | ${}`
  }, [])
  */
  return (
  <header>
    <div>
      <Link to="/"><img src={logo} alt="logo de groupomania"/></Link>
    </div>
    <nav>
      <Link to="/signin">S'inscrire</Link>
      <Link to="/login">Se connecter</Link>
      <Link to="/profile">Mon compte</Link>
    </nav>
      <Outlet />
  </header>
  )
}

export default Banner