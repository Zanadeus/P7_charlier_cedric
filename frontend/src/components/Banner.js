import '../styles/Banner.css'
import logo from '../assets/icon-left-font-monochrome-white.svg'

function Banner() {
  return (
  <header>
    <div>
      <img src={logo} alt="logo de groupomania"/>
    </div>
    <div>
      <p>S'inscrire </p>
      <p>Se connecter</p>
    </div>
    {/*
    <div>
      <Link to='newpost' className='p-4 text-custom '>
        Nouvelle publication
      </Link>
      <Link to='profile' className='p-4 text-custom '>
        Profil
      </Link>
      <button onClick={signOut} className='p-4 text-custom font-bold'>
        Se deconnecter
      </button>
    </div>
    */}
  </header>
  )
}

export default Banner