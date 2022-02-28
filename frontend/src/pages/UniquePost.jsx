import TemplatePost from '../components/Feed/TemplatePost'
import React, { useEffect, useState } from 'react'
import { getPost } from '../components/Feed/APIcalls';

function UniquePost() 
{
  const [post, setPost] = useState([]);
  let pageId = window.location.href.split("post/").pop();
  useEffect(() => {
    getPost(pageId)
    .then((response) => {
      console.log(response);
      setPost(response);
    })
  }, [])

  return (
    <main id="feed">
      <h1>{post.title}</h1>
      <section>
        <TemplatePost value={post} />
      </section>
    </main>
  )
}

export default UniquePost