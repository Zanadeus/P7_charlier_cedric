import '../styles/Login.css'

function Login() {
  return (
    <main>
      <h1>De connecter à Groupomania</h1>
      <section>
        <article>
          <h2>Connectez-vous pour voir plus de contenu ou en partager</h2>
          <form action="" method="post" >
            <div >
              <label for="email">mail: </label><br/>
              <input type="email" name="email" id="email" required />
            </div>
            <div >
              <label for="email">mot de passe: </label><br/>
              <input type="text" name="password" id="password" required />
            </div>
            <div >
              <input type="submit" value="Créer un compte" class="button"/>
            </div>
          </form>
        </article>
      </section>

    </main>
  )
}

export default Login