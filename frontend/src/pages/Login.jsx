import '../styles/Login.css'
import { loginFunction } from '../components/User/authAPI'
import { getProfileFunction } from '../components/Profile/profileAPI';
import { useForm } from "react-hook-form"

function Login() 
{
  const {
    register, 
    handleSubmit, 
    formState: {errors} 
  } = useForm({
    defaultValues:{
      email:"",
      password:""
    }
  });
  function submitForm(data)
  {
    loginFunction(data)
    .then((response) => 
    {
      console.log(response);
      if (response.token) 
      {
        sessionStorage.setItem('token', response.token);
        //sessionStorage.setItem('pseudo', response.user.pseudo);
        sessionStorage.setItem('userMail', response.user.email);
        window.location.reload();
      }
      else
      {
        return console.log(errors);
      }
    })
  }

  return (
    <main>
      <h1>Se connecter à Groupomania</h1>
      <section>
        <article>
          <h2>Connectez-vous pour voir plus de contenu ou en partager</h2>
          <form action="" method="post" id="submitForm" onSubmit={handleSubmit((data) => {
            submitForm(data);
          })}>
            <div >
              <label htmlFor="email">mail: </label><br/>
              <input type="email" {...register("email", { required: "Ce champ est requis" })} placeholder='aaa@exemple.com' required />
              <p>{errors.email?.message}</p>
            </div>
            <div >
              <label htmlFor="password">mot de passe: </label><br/>
              <input type="password" {...register("password", { required: "Ce champ est requis" })} placeholder='password' required />
              <p>{errors.password?.message}</p>
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