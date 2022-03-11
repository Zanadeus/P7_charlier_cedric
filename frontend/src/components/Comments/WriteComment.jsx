import React from 'react'
import { useForm } from "react-hook-form"
import { createCommentFunction } from './commentAPI';

function WriteComment() 
{
  let profile = JSON.parse(localStorage.getItem('user')) ;
  let actualPostId = window.location.href.split("post/").pop();

  const {
    register, 
    handleSubmit, 
  } = useForm();

  function submitForm(data)
  {
    console.log("coucou");
    createCommentFunction(data)
    .then((response) => 
    {
      console.log(response);
    })
  }

  return (
  <article>
    <h2>Commenter en tant que </h2>
    <form id="submitForm" onSubmit={handleSubmit((data) => {
      data.profileId = profile.profileId;
      data.postId = actualPostId;
      console.log(data);
      submitForm(data);
      })}>
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
  )
}

export default WriteComment