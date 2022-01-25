import '../styles/Profile.css'

function Profile() {
  return (
    <main>
    <h1>Gérer mon compte Groupomania</h1>
    <section>
      <article>
        <h2>Paramètres du compte</h2>
        <div className="accountParameter">
          <p>Mon Pseudo</p>
          <p>user.pseudo</p>
        </div>
        <div className="accountParameter">
          <p>Mon adresse mail</p>
          <p>user.mail</p>
        </div>
        <div className="accountParameter">
          <p>Mon mot de passe</p>
          <p>user.password</p>
        </div>
      </article>
    </section>

  </main>
  )
}

export default Profile