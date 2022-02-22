import '../styles/Signin.css'
import { signinFunction } from '../components/User/authAPI'
import { useForm } from "react-hook-form";

function Signin() 
{
  const 
  {
    register, 
    handleSubmit, 
    formState: {errors} 
  } = useForm();

  function signinUser(data)
  {
    signinFunction(data)
    .then((response) => 
    {
      console.log(response);
    })
  }

  return (
    <main>
      <h1>Créer un compte Groupomania</h1>
      <section>
        <article>
          <h2>Connectez-vous pour voir plus de contenu ou en partager</h2>
          <form id="submitForm" onSubmit={handleSubmit((data) => {
            console.log(data);
            if (data.password1 === data.password2) 
            {
              signinUser(data);
              alert("Merci pour votre inscription, vous pouvez maintenant vous connecter !")
            }
            else
            {
              alert("les deux mots de passe doivent être identiques");
            }
          })}>
            <div >
              <label htmlFor="pseudo">pseudo: </label><br/>
              <input type="string" {...register("pseudo", 
              { 
                required: "Ce champ est requis", 
                minLength: 
                { 
                  value: 4,
                  message: "Le pseudo doit contenir entre 4 et 20 caractères"
                },
                maxLength: 
                { 
                  value: 20,
                  message: "Le pseudo doit contenir entre 4 et 20 caractères"
                } 
              })} 
              placeholder='name' />
              <p>{errors.pseudo?.message}</p>
            </div>
            <div >
              <label htmlFor="email">mail: </label><br/>
              <input type="email" {...register("email", 
              { required: "Ce champ est requis" })} 
              placeholder='aaa@exemple.com' />
              <p>{errors.email?.message}</p>
            </div>
            <div >
              <label htmlFor="password1">mot de passe: </label><br/>
              <input type="password" {...register("password1", 
              { 
                required: "Ce champ est requis", 
                minLength: 
                { 
                  value: 8,
                  message: "Le mot de passe doit contenir 8 caractères ou plus"
                }
              })} 
              placeholder='password' />
              <p>{errors.password1?.message}</p>
            </div>
            <div >
              <label htmlFor="password2">confirmer le mot de passe: </label><br/>
              <input type="password" {...register("password2", 
              { 
                required: "Ce champ est requis", 
              })} 
              placeholder='password' />
              <p>{errors.password2?.message}</p>
            </div>
            <div >
              <button type="submit" className="button">
                S'inscrire
              </button>
            </div>
          </form>
        </article>
      </section>
    </main>
  )
}

export default Signin