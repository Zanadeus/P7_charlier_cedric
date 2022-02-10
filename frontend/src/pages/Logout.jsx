function Logout()
{
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
  window.location.reload();
  window.location.replace("/");
  
  return (
    <main>
      <h1>Vous êtes déconnecté de Groupomania</h1>
      <section>
        <article>
          <p>Vous êtes déconnectés</p>
        </article>
      </section>
    </main>
  )
}

export default Logout