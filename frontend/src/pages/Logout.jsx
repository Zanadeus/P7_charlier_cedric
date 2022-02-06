function Logout()
{
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('pseudo');
  window.location.reload();
  
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