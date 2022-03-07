import TemplatePost from '../components/Feed/TemplatePost'
import WriteComment from '../components/Comments/WriteComment'
import React, { useEffect, useState } from 'react'
import { getPost } from '../components/Feed/postsAPI'

function UniquePost() 
{
  const [post, setPost] = useState([]);
  //let pageId = window.location.href.split("post/").pop();
  useEffect(() => {
    getPost(window.location.href.split("post/").pop())
    .then((response) => {
      //console.log(response);
      setPost(response);
    })
    
  }, [])

  return (
    <main id="feed">
      <h1>{post.title}</h1>
      <section>
        <TemplatePost value={post} key={`${post.id}`}/>
        <WriteComment value={post} />
      </section>
    </main>
  )
}

export default UniquePost