import '../styles/Feed.css'
import TemplatePost from '../components/Post/TemplatePost'
import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../components/Post/postsAPI'
import { getProfileFunction } from '../components/Profile/profileAPI'

function Feed() 
{
  const [posts, setList] = useState([]);
  useEffect(() => {
    getAllPosts()
    .then((response) => {
      //console.log(response);
      setList(response);
    })
  }, [])

  const [isUserAdmin, setIsAdmin] = useState(0);
  useEffect(() => {
    getProfileFunction(JSON.parse(localStorage.getItem('user')).userName)
    .then((profile) => {
      //console.log(profile);
      setIsAdmin(profile.admin);
      //console.log(profile.admin);
      //console.log(isUserAdmin);
    })
  }, [])

  return (
    <main id="feed">
      <h1>Les dernières publications sur Groupomania</h1>
      <section>
          {
            posts.map((item) => 
            (
              <TemplatePost value={item} isAdmin={isUserAdmin} key={`${item.postId}`} />
            ))
          }
      </section>
    </main>
  )
}

export default Feed