import TemplatePost from '../components/Post/TemplatePost'
import DisplayComments from '../components/Comments/DisplayComments'
import React, { useEffect, useState } from 'react'
import { getOnePost } from '../components/Post/postsAPI'
import WriteComment from '../components/Comments/WriteComment'
import { getProfileFunction } from '../components/Profile/profileAPI'

function UniquePost() 
{
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  //let pageId = window.location.href.split("post/").pop();
  useEffect(() => {
    getOnePost(window.location.href.split("post/").pop())
    .then((response) => {
      console.log(response);
      setPost(response);
      setLoading(false);
    })
  }, [])

  const [isUserAdmin, setIsAdmin] = useState(0);
  useEffect(() => {
    getProfileFunction(JSON.parse(localStorage.getItem('user')).userName)
    .then((profile) => {
      setIsAdmin(profile.admin);
    })
  }, [])

  //console.log(isUserAdmin);
  return (
    <main id="feed"> 
      {//SI la page est en cours de chargement :
      }
      { loading?(<>
        <h1>CHARGEMENT EN COURS</h1>
        <section>
          <p>CHARGEMENT EN COURS</p>
        </section>
      </>):(<>
      {//Lorsque la page est chargée
      }
        <h1>{post.title}</h1>
        <section>
          <TemplatePost value={post} isAdmin={isUserAdmin} key={`${post.id}`}/>
          <h2>Commentaires</h2>
          <WriteComment value={post}/>
          <DisplayComments value={post} isAdmin={isUserAdmin} />
        </section>
      </>) }
    </main>
  )
}

export default UniquePost