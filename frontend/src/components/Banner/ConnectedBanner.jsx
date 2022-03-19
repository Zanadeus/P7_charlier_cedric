import '../../styles/Banner.css'
import desktopLogo from '../../assets/icon-left-font-monochrome-white.svg'
import mobileLogo from '../../assets/icon.svg'
import { Outlet, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faScroll, faUser, faCircleXmark } from '@fortawesome/free-solid-svg-icons'

function ConnectedBanner() {
  let profile = JSON.parse(localStorage.getItem('user')) ;
  let userName = profile.userName;
  console.log(userName);

  return (
    <header>
      <div>
        <Link to="/">
          <span className="logoMobileDisplay"><img src={mobileLogo} alt="logo de groupomania"/></span>
          <span className="logoDesktopDisplay"><img src={desktopLogo} alt="logo de groupomania"/></span>
        </Link>
      </div>
      <nav>
        <Link to="/">
          <span className="fontAwesomeSize, bannerMobileDisplay"><FontAwesomeIcon icon={faHouse} /></span>
          <span className="bannerDesktopDisplay">Accueil</span>
        </Link>
        <Link to="/createPost">
          <span className="fontAwesomeSize, bannerMobileDisplay"><FontAwesomeIcon icon={faScroll} /></span>
          <span className="bannerDesktopDisplay">Publier</span>
        </Link>
        <Link to={`/profile/${userName}`}>
          <span className="fontAwesomeSize, bannerMobileDisplay"><FontAwesomeIcon icon={faUser} /></span>
          <span className="bannerDesktopDisplay">Profil</span>
        </Link>
        <Link to="/logout">
          <span className="fontAwesomeSize, bannerMobileDisplay"><FontAwesomeIcon icon={faCircleXmark} /></span>
          <span className="bannerDesktopDisplay">Se Déconnecter</span>
        </Link>
      </nav>
        <Outlet />
    </header>
  )
}

export default ConnectedBanner