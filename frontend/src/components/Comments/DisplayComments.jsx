import TemplateComment from './TemplateComment'
import React, { useEffect, useState } from 'react'
import { getAllComments } from './commentAPI'

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
    <article>
      {
        posts.map((item) => 
        (
          <TemplateComment value={item} key={`${item.commentId}`} />
        ))
      }
    </article>
  )
}

export default DisplayComments