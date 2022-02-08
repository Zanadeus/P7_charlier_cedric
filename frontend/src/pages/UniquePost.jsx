import TemplatePost from '../components/Feed/TemplatePost'
import React, { useEffect, useState } from 'react'
import { getPost } from '../components/Feed/APIcalls';

function UniquePost() 
{
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPost()
    .then((response) => {
      //console.log(response['posts']);
      setPost(response.posts);
    })
  }, [])

  return (
    <main id="feed">
      <h1>Créer une publication sur Groupomania</h1>
      <section>
        <TemplatePost value={post} />
      </section>
    </main>
  )
}

export default UniquePost