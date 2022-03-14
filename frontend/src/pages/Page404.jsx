import { Outlet, Link } from 'react-router-dom'

function Pagenotfound() {
  return (
    <main>
    <h1>OUPS</h1>
    <section>
      <article>
        <h2>Page non trouvée</h2>
        <p>La page recherchée est introuvable actuellement</p>
        <p>Cliquer sur le bouton ci-dessous pour revenir à l'accueil</p>
          <Link to={`/`}>
            <button className="button">
              Revenir à l'accueil
            </button>
          </Link>
      </article>
    </section>
    <Outlet />
  </main>
  )
}

export default Pagenotfound