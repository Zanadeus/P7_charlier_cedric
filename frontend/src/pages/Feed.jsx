import '../styles/Feed.css'
import TemplatePost from '../components/Feed/TemplatePost'
import React, { useEffect, useState } from 'react'
import { getList } from '../components/Feed/postsAPI'

function Feed() 
{
  const [posts, setList] = useState([]);

  useEffect(() => {
    getList()
    .then((response) => {
      console.log(response);
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
              <TemplatePost value={item} key={`${item.id}`} />
            ))
          }
      </section>
    </main>
  )
}

export default Feed