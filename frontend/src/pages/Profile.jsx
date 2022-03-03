import '../styles/Profile.css'
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { getProfileFunction, updateProfileFunction, deleteProfileFunction } from '../components/Profile/profileAPI'

function Profile() {
  const [user, setList] = useState([]);
  let profile = JSON.parse(sessionStorage.getItem('user')) ;
  let userName = profile.userName;
  console.log(user);
  //rendering pour aller chercher les informations utilisateurs dans la BDD
  useEffect(() => {
    getProfileFunction(userName)
    .then((response) => {
      setList(response);
      console.log(response);
      console.log(user);
    })
  }, [])
  //rendering pour que les defaultValues du formulaire prennent la réponse de getProfileFunction
  useEffect(() => {
    reset({
      userName: `${user.userName}`,
      email: `${user.email}`
    }); 
  }, [user])
//au clic sur le bouton "modifier profil", fonction de mise à jour du profil et reload de la page
  function submitForm(data)
  {
    console.log(data);
    updateProfileFunction(data)
    .then((response) => 
    {
      console.log(response);
      profile.userName = response.userName ;
      profile.email = response.email ;
      sessionStorage.setItem('user', JSON.stringify(profile));
      window.location.reload();
      window.location.replace(`/profile/${response.userName}`);
    })
  }
//au clic sur le bouton "supprimer profil", fonction de suppression du profil et reload sur la page de déconnexion
function deleteUser(data)
{
  console.log(data);
  deleteProfileFunction(data)
  .then((response) => 
  {
    console.log(response);
    //window.location.reload();
    //window.location.replace(`/logout`);
  })
}
  //appel des éléments du formulaire
  const 
  { register, handleSubmit, formState: {errors}, reset } = useForm(
    {
      defaultValues:
      {
        userName: `${user.userName}`,
        email: `${user.email}`
        //password: user.password
      }
    });

  return (
    <main>
      <h1>Gérer mon compte Groupomania</h1>
      <section>
        <article>
          <h2>Paramètres du compte</h2>
          <form id="submitForm" onSubmit={handleSubmit((data) => {
              data.lastPseudo = user.userName;
              submitForm(data);
            })}>
              <div >
                <label htmlFor="userName">Pseudo: </label><br/>
                <input type="text" {...register("userName", 
                { 
                  minLength: 
                  { 
                    value: 4,
                    message: "Le userName doit contenir entre 4 et 20 caractères"
                  },
                  maxLength: 
                  { 
                    value: 20,
                    message: "Le userName doit contenir entre 4 et 20 caractères"
                  } 
                })} 
                />
                <p>{errors.userName?.message}</p>
              </div>
              <div >
                <label htmlFor="email">mail: </label><br/>
                <input type="email" {...register("email", 
                { 
                  minLength: 
                  { 
                    value: 4,
                    message: "Le userName doit contenir entre 4 et 30 caractères"
                  },
                  maxLength: 
                  { 
                    value: 30,
                    message: "Le userName doit contenir entre 4 et 30 caractères"
                  } 
                })} 
                />
                <p>{errors.email?.message}</p>
              </div>
              {/*
              <div >
                <label htmlFor="password">mot de passe actuel: </label><br/>
                <input type="password" {...register("password", { required: "Ce champ est requis", minLength: 8 })} placeholder='password' defaultValue={''} required />
                <p>{errors.password?.message}</p>
              </div>
              <div >
                <label htmlFor="password2">nouveau mot de passe: </label><br/>
                <input type="password" {...register("password2")} placeholder='password' />
                <p>{errors.password2?.message}</p>
              </div>
              <div >
                <label htmlFor="password3">confirmer le nouveau mot de passe: </label><br/>
                <input type="password" {...register("password3")} placeholder='password' />
                <p>{errors.password3?.message}</p>
              </div>
              */}
              <div >
                <button type="submit" className="button">
                  Modifier le profil
                </button>
                <button type="button" className="button" onClick={() => {
                  deleteUser(user);
                }}>
                  supprimer le compte
                </button>
              </div>
              
            </form>
        </article>
      </section>
            
    </main>
  )
}

export default Profile