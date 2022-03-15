import React from 'react'
import { useForm } from "react-hook-form"
import { createCommentFunction } from './commentAPI';

function WriteComment(value) 
{
  let profile = JSON.parse(localStorage.getItem('user')) ;
  //let actualPostId = window.location.href.split("post/").pop();
  let actualPostId = value.value.postId;
  console.log(actualPostId);
  const {
    register, 
    handleSubmit, 
  } = useForm();

  function submitForm(data)
  {
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