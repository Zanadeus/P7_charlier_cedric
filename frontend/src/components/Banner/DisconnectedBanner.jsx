import '../../styles/Banner.css'
import { Outlet, Link } from 'react-router-dom'
import desktopLogo from '../../assets/icon-left-font-monochrome-white.svg'
import mobileLogo from '../../assets/icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus, faPlug } from '@fortawesome/free-solid-svg-icons'

function DisconnectedBanner() {
  return (
  <header>
    <div>
      <Link to="/">
        <span className="logoMobileDisplay"><img src={mobileLogo} alt="logo de groupomania"/></span>
        <span className="logoDesktopDisplay"><img src={desktopLogo} alt="logo de groupomania"/></span>
      </Link>
    </div>
    <nav>
      <Link to="/signin">
        <span className="fontAwesomeSize, bannerMobileDisplay"><FontAwesomeIcon icon={faUserPlus} /></span>
        <span className="bannerDesktopDisplay">S'inscrire</span>
      </Link>
      <Link to="/login">
          <span className="fontAwesomeSize, bannerMobileDisplay"><FontAwesomeIcon icon={faPlug} /></span>
          <span className="bannerDesktopDisplay">Se connecter</span>
      </Link>
    </nav>
      <Outlet />
  </header>
  )
}

export default DisconnectedBanner