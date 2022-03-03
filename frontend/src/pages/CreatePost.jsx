import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { createPostFunction } from '../components/Feed/postsAPI';
function CreatePost() 
{
  let profile = JSON.parse(sessionStorage.getItem('user')) ;

  const {
    register, 
    handleSubmit, 
    formState: {errors} 
  } = useForm();

  function submitForm(data)
  {
    console.log("coucou");
    createPostFunction(data)
    .then((response) => 
    {
      console.log(response);
    })
  }

  return (
    <main id="feed">
      <h1>Créer une publication sur Groupomania</h1>
      <section>
      <article>
          <h2>Connectez-vous pour voir plus de contenu ou en partager</h2>
          <form id="submitForm" onSubmit={handleSubmit((data) => {
            data.author = profile.userName;
            data.authorId = profile.profileId;
            data.profileId = profile.profileId;
            console.log(data);
            submitForm(data);
          })}>
            <div >
            <label htmlFor="title">titre: </label><br/>
              <input type="title" {...register("title", 
              { required: "Ce champ est requis" })} 
              placeholder='titre' />
              <p>{errors.titre?.message}</p>
            </div>
            <div >
              <label htmlFor="text">texte: </label><br/>
              <textarea type="text" {...register("text")} 
              placeholder='texte' />
            </div>
            <div >
              <button type="submit" className="button">
                Publier
              </button>
            </div>
          </form>
        </article>
      </section>
    </main>
  )
}

export default CreatePost