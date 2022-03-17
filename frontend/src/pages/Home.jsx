import TemplatePost from '../components/Post/TemplatePost'
import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../components/Post/postsAPI'
import { getProfileFunction } from '../components/Profile/profileAPI'

function Feed({permissions}) 
{
  console.log(permissions);
  const [posts, setList] = useState([]);
  useEffect(() => {
    getAllPosts()
    .then((response) => {
      //console.log(response);
      setList(response);
    })
  }, [])

  return (
    <main id="feed">
      <h1>Les dernières publications sur Groupomania</h1>
      <section>
          {
            posts.map((item) => 
            (
              <TemplatePost value={item} permissions={permissions} key={`${item.postId}`} />
            ))
          }
      </section>
    </main>
  )
}

export default Feed