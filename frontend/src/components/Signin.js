import '../styles/Signin.css'

function Signin() {
  return (
    <main>
      <h1>Créer un compte Groupomania</h1>
      <section>
        <article>
        <h2>Inscrivez-vous pour voir plus de contenu ou en partager</h2>
          <form action="" method="post" >
            <div >
              <label for="name">Pseudo: </label> <br/>
              <input type="text" name="name" id="name" required />
            </div>
            <div >
              <label for="email">mail: </label><br/>
              <input type="email" name="email" id="email" required />
            </div>
            <div >
              <label for="email">Mot de passe: </label><br/>
              <input type="text" name="password" id="password" required />
            </div>
            <div >
              <input type="submit" value="Se connecter" class="button"/>
            </div>
          </form>
        </article>
      </section>

    </main>
  )
}

export default Signin