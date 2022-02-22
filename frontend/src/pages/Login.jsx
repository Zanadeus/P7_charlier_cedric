import '../styles/Login.css'
import { loginFunction } from '../components/User/authAPI'
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
        console.log("ceci est response.user : ");
        console.log(response.user);
        sessionStorage.setItem('userName', response.user.pseudo);
        /*
        let userObject = JSON.stringify(response.user);
        console.log("ceci est userObject string : ");
        console.log(userObject);

        sessionStorage.setItem('user', userObject);
        let testuser = sessionStorage.getItem('user');
        console.log("ceci est sessionStorage user : ");
        console.log(testuser);
        console.log(JSON.parse(testuser));
        */
       
        //window.location.reload();
        //window.location.replace("/");
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
          <form id="submitForm" onSubmit={handleSubmit((data) => {
            submitForm(data);
          })}>
            <div >
            <label htmlFor="email">mail: </label><br/>
              <input type="email" {...register("email", 
              { required: "Ce champ est requis" })} 
              placeholder='aaa@exemple.com' />
              <p>{errors.email?.message}</p>
            </div>
            <div >
              <label htmlFor="password">mot de passe: </label><br/>
              <input type="password" {...register("password", 
              { 
                required: "Ce champ est requis", 
                minLength: 
                { 
                  value: 8,
                  message: "Le mot de passe doit contenir 8 caractères ou plus"
                }
              })} 
              placeholder='password' />
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