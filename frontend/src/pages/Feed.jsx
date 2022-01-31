import '../styles/Feed.css'
import Post from '../components/Feed/Post'
import React, { useEffect, useState } from 'react'
import { getList } from '../components/Feed/list'

function Feed() 
{
  const [posts, setList] = useState([]);

  useEffect(() => {
    getList()
    .then((response) => {
      //console.log(response['posts']);
      setList(response.posts);
    })
  }, [])

  return (
    <main id="feed">
      <h1>Les dernières publications sur Groupomania</h1>
      <section>
          {
            posts.map((item) => 
            (
              <Post value={item} />
            ))
          }
      </section>
    </main>
  )
}

export default Feed