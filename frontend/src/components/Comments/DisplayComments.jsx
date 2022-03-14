import TemplateComment from './TemplateComment'
import React, { useEffect, useState } from 'react'
import { getAllComments } from './commentAPI'
import WriteComment from './WriteComment'

function DisplayComments(value) 
{
  const [posts, setList] = useState([]);

  useEffect(() => {
    getAllComments()
    .then((response) => {
      console.log(response);
      setList(response);
    })
  }, [])

  return (
    <section>
      <WriteComment value={value}/>
      <h2>Commentaires</h2>
      {
        posts.map((item) => 
        (
          <TemplateComment value={item} key={`${item.commentId}`} />
        ))
      }
    </section>
  )
}

export default DisplayComments