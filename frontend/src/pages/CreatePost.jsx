import React from 'react'
import { useForm } from "react-hook-form"
import { createPostFunction } from '../components/Post/postsAPI';

function CreatePost({permissions}) 
{
  const {
    register, 
    handleSubmit, 
    formState: {errors} 
  } = useForm();

  function submitForm(data)
  {
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
          <form id="submitForm" onSubmit={handleSubmit((data) => {
            data.profileId = permissions.profileId;
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