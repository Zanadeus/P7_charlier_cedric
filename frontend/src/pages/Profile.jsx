import '../styles/Profile.css'
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { getProfileFunction, updateProfileFunction } from '../components/Profile/profileAPI'

function Profile() {
  const [user, setList] = useState([]);
  let userName = sessionStorage.getItem('userName');

  //fonction pour aller chercher les informations utilisateurs dans la BDD
  useEffect(() => {
    getProfileFunction(userName)
    .then((response) => {
      setList(response);
      console.log(response);
    })
  }, [])

  //appel des éléments du formulaire
  const 
  { register, handleSubmit, formState: {errors} } = useForm(
    {
      defaultValues:
      {
        pseudo: `Arthurus`,
        email: `${user.email}`
        //pseudo: `coucou + ${user.pseudo}`,
        //email: `${user.email}`,
        //password: user.password
      }
    });

  //au clic sur le bouton "modifier profil", fonction de mise à jour du profil et reload de la page
  function submitForm(data)
  {
    console.log(data);
    updateProfileFunction(data)
    .then((response) => 
    {
      console.log(response);
      sessionStorage.setItem('userName', response.pseudo);
      window.location.reload();
      window.location.replace(`/profile/${response.pseudo}`);
    })
  }

  return (
    <main>
      <h1>Gérer mon compte Groupomania</h1>
      <section>
        <article>
          <h2>Paramètres du compte</h2>
          <form id="submitForm" onSubmit={handleSubmit((data) => {
              data.lastPseudo = user.pseudo;
              submitForm(data);
            })}>
              <div >
                <label htmlFor="pseudo">Pseudo: </label><br/>
                <input type="text" {...register("pseudo", 
                { 
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
                defaultValue={user.pseudo} />
                <p>{errors.pseudo?.message}</p>
              </div>
              <div >
                <label htmlFor="email">mail: </label><br/>
                <input type="email" {...register("email", 
                { 
                  minLength: 
                  { 
                    value: 4,
                    message: "Le pseudo doit contenir entre 4 et 30 caractères"
                  },
                  maxLength: 
                  { 
                    value: 30,
                    message: "Le pseudo doit contenir entre 4 et 30 caractères"
                  } 
                })} 
                defaultValue={user.email} />
                <p>{errors.email?.message}</p>
              </div>
              {/*
              <div >
                <label htmlFor="password">mot de passe actuel: </label><br/>
                <input type="password" {...register("password", { required: "Ce champ est requis", minLength: 8 })} placeholder='password' defaultValue={''} required />
                <p>{errors.password?.message}</p>
              </div>
              */}
              {/*
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
              </div>
            </form>
        </article>
      </section>
            
    </main>
  )
}

export default Profile