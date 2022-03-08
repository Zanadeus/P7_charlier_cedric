import TemplateComment from './TemplateComment'
import React, { useEffect, useState } from 'react'
import { getAllComments } from './commentAPI'

function DisplayComments() 
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
    <div>
      <h2>Commentaires</h2>
      {
        posts.map((item) => 
        (
          <TemplateComment value={item} key={`${item.commentId}`} />
        ))
      }
    </div>
  )
}

export default DisplayComments