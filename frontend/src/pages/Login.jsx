import '../styles/Login.css'
import { loginFunction } from '../components/Login/LoginUser'
import React, { useEffect, useState } from 'react'

function Login() {
  const [submit, isSubmit] = useState(false);
  const user = {
    email: 'oc@oc.com',
    password: 'oc'
  }

  useEffect(() => {
    loginFunction(user)
    .then((response) => {
      console.log(response);
      sessionStorage.setItem('token', JSON.stringify(response.token));
      console.log(submit);
    })
  }, [submit])

  //document.getElementById("")
  return (
    <main>
      <h1>Se connecter à Groupomania</h1>
      <section>
        <article>
          <h2>Connectez-vous pour voir plus de contenu ou en partager</h2>
          <form action="" method="post" id="submitForm" onSubmit={() => isSubmit(true)}>
            <div >
              <label htmlFor="email">mail: </label><br/>
              <input type="email" name="email" id="email" required />
            </div>
            <div >
              <label htmlFor="password">mot de passe: </label><br/>
              <input type="password" name="password" id="password" required />
            </div>
            <div >
              <input type="submit" value="Se connecter" className="button" />
            </div>
          </form>
        </article>
      </section>

    </main>
  )
}

export default Login