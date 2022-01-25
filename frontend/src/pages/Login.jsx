import '../styles/Login.css'

function Login() {
  /*
  useEffect(() => 
  {
    fetch (http://localhost:3030/api/auth/login,
    {
      method: "POST",
      headers: 
      {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(
      {
        contact,
        products
      })
    })
    .then((response) => 
    {
      console.log(response.json);
      return response.json();
    })

    .then((data) =>
    {
      localStorage.setItem("validatedOrder", JSON.stringify(data));
      location.href = "thanksPage.html" ;
    })
    
    .catch(function(error)//catch errors
    {
      alert(error);
    })
    }, [])
  */
  return (
    <main>
      <h1>Se connecter à Groupomania</h1>
      <section>
        <article>
          <h2>Connectez-vous pour voir plus de contenu ou en partager</h2>
          <form action="" method="post" >
            <div >
              <label htmlFor="email">mail: </label><br/>
              <input type="email" name="email" id="email" required />
            </div>
            <div >
              <label htmlFor="password">mot de passe: </label><br/>
              <input type="password" name="password" id="password" required />
            </div>
            <div >
              <input type="submit" value="Créer un compte" className="button"/>
            </div>
          </form>
        </article>
      </section>

    </main>
  )
}

export default Login