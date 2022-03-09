import TemplatePost from '../components/Feed/TemplatePost'
import WriteComment from '../components/Comments/WriteComment'
import DisplayComments from '../components/Comments/DisplayComments'
import React, { useEffect, useState } from 'react'
import { getOnePost } from '../components/Feed/postsAPI'

function UniquePost() 
{
  const [post, setPost] = useState([]);
  //console.log(post);
  //let pageId = window.location.href.split("post/").pop();
  useEffect(() => {
    getOnePost(window.location.href.split("post/").pop())
    .then((response) => {
      //console.log(response);
      setPost(response);
    })
  }, [])
  if (post.length === 0) {
    console.log("post en cours de chargement");
    return(
      <main id="feed">
        <h1>CHARGEMENT EN COURS</h1>
        <section>
          <p>CHARGEMENT EN COURS</p>
        </section>
      </main>
    )
  }
  else
  {
    return (
      <main id="feed">
        <h1>{post.title}</h1>
        <section>
          <TemplatePost value={post} key={`${post.id}`}/>
          <WriteComment />
          <DisplayComments />
        </section>
      </main>
    )
  }
}

export default UniquePost