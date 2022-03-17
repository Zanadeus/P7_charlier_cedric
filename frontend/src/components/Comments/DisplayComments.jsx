import TemplateComment from './TemplateComment'
import React, { useEffect, useState } from 'react'
import { getAllComments } from './commentAPI'

function DisplayComments({isAdmin}) 
{
  const [posts, setList] = useState([]);

  useEffect(() => {
    getAllComments(window.location.href.split("post/").pop())
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
          <TemplateComment value={item} isAdmin={isAdmin} key={`${item.commentId}`} />
        ))
      }
    </article>
  )
}

export default DisplayComments