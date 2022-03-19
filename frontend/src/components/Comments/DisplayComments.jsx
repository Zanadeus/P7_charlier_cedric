import TemplateComment from './TemplateComment'
import React, { useEffect, useState } from 'react'
import { getAllComments } from '../API/commentAPI'

function DisplayComments({permissions}) 
{
  const [posts, setList] = useState([]);

  useEffect(() => {
    getAllComments(window.location.href.split("post/").pop())
    .then((response) => {
      setList(response);
    })
  }, [])

  return (
    <article>
      {
        posts.map((item) => 
        (
          <TemplateComment value={item} permissions={permissions} key={`${item.commentId}`} />
        ))
      }
    </article>
  )
}

export default DisplayComments