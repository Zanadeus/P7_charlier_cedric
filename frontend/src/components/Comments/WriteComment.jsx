import React from 'react'
import { useForm } from "react-hook-form"
import { createCommentFunction } from '../API/commentAPI';

function WriteComment({value, permissions}) 
{
  const {
    register, 
    handleSubmit, 
  } = useForm();

  return (
  <article>
    <h2>Commenter en tant que </h2>
    <form id="submitForm" onSubmit={handleSubmit((data) => {
      data.profileId = permissions.profileId;
      data.postId = value.postId;
      createCommentFunction(data)
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