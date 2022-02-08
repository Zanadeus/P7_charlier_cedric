import '../styles/Profile.css'
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { getProfileFunction, updateProfileFunction } from '../components/Profile/profileAPI'

function Profile() {
  const [user, setList] = useState([]);

  let userName = JSON.parse(sessionStorage.getItem('user')).pseudo;
  console.log(userName);
  useEffect(() => {
    getProfileFunction(userName)
    .then((response) => {
      setList(response);
      console.log(response);
    })
  }, [])

  const 
  { register, handleSubmit, formState: {errors} } = useForm(
    {
      /*
      defaultValues:
      {
        pseudo: `coucou + ${user.pseudo}`,
        email: `contact + ${user.email}`,
        password: user.password
      }
      */
    });

  function submitForm(data)
  {
    updateProfileFunction(data)
    .then((response) => 
    {
      console.log(response);
      sessionStorage.setItem('newPseudo', response.pseudo);
    })
  }

  return (
    <main>
    <h1>Gérer mon compte Groupomania</h1>
    <section>
      <article>
        <h2>Paramètres du compte</h2>
        <form id="submitForm" onSubmit={handleSubmit((data) => {
            console.log(data);
            submitForm(data.pseudo);
          })}>
            <div >
              <label htmlFor="pseudo">pseudo: </label><br/>
              <input type="string" {...register("pseudo", 
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