import '../styles/Login.css'
import { loginFunction } from '../components/Login/LoginUser'
import React, { useEffect, useState } from 'react'

function Login() 
{
  useEffect(() => 
  {
    const userData = {};
    const aimFormInput = document.querySelectorAll("input");//selection de tous les inputs a vérifier
    console.log(aimFormInput);

    function submitForm(event)
    {
      event.preventDefault();
      aimFormInput.forEach(element =>
      {
        userData[element.name] = element.value;
      });
      console.log(userData);
      loginFunction(userData)
      .then((response) => 
      {
        console.log(response);
        if (response.token) 
        {
          sessionStorage.setItem('token', JSON.stringify(response.token));
          window.location.reload();
        }
      })
    }

    document.getElementById("submitForm").addEventListener('submit', submitForm)
  }, [])

  return (
    <main>
      <h1>Se connecter à Groupomania</h1>
      <section>
        <article>
          <h2>Connectez-vous pour voir plus de contenu ou en partager</h2>
          <form action="" method="post" id="submitForm" /*onSubmit={submitForm}*/>
            <div >
              <label htmlFor="email">mail: </label><br/>
              <input type="email" name="email" id="email" required />
            </div>
            <div >
              <label htmlFor="password">mot de passe: </label><br/>
              <input type="password" name="password" id="password" required />
            </div>
            <div >
              <button type="submit" className="button">
                Se connecter
              </button>
            </div>
          </form>
        </article>
      </section>
    </main>
  )
}

export default Login