import '../../styles/TemplatePost.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Outlet, Link } from 'react-router-dom'
import DeletePostButton from './DeletePostButton'

function TemplatePost({ value, permissions }){
  const post = value;

  function timePastSinceCreation()
  {
    let dateUpdate = new Date(`${post.createdAt}`);
    let timeSincePost = (Date.now() - Date.parse(dateUpdate))/1000;//temps en secondes
    if (timeSincePost < 60) 
    {
      return `${Math.floor(timeSincePost)} seconde(s)`//temps en minutes
    }
    else if ( (timeSincePost/60) < 60) 
    {
      return `${Math.floor(timeSincePost/60)} minute(s)`
    }
    else if ((timeSincePost/(60*60)) < 24) 
    {
      return `${Math.floor(timeSincePost/(60*60))} heure(s)`
    }
    else if ((timeSincePost/(60*60*24)) < 365) 
    {
      return `${Math.floor(timeSincePost/(60*60*24))} jour(s)`
    }
    else if ((timeSincePost/(60*60*24)) > 365) 
    {
      return `${Math.floor(timeSincePost/(60*60*24*365))} an(s)`
    }
    else
    {
      return `erreur`
    }
  }

  return(
    <article className='postTemplate' >
        <div className="likesBar">
          <span className="fontAwesomeSize" onClick={() =>
            console.log("on veut mettre un like")
          }>
          <FontAwesomeIcon icon={faCircleArrowUp} />
          </span>
          <p>{post.likes}</p>
          <span className="fontAwesomeSize" onClick={() =>
            console.log("on veut mettre un dislike")
          }>
            <FontAwesomeIcon icon={faCircleArrowDown} />
          </span>
        </div>
        <div className='postBody'>
          <div className="postHead">
            <p>
              Publié par <Link to={`/profile/${post.profile.userName}`} > <strong>{` ${post.profile.userName} `}</strong> </Link>
              il y a {timePastSinceCreation()}
            </p>
            {
              (post.profileId === permissions.profileId || permissions.admin === 1) && <DeletePostButton value={post}/>
            }
            
          </div>
          
          <Link to={`/post/${post.postId}`} >
            <h2>{post.title}</h2>
            <div className="post">{post.text}</div>
            <p className="postFeet"> {/*{post.commentNumber} Commentaire(s) */} </p>
          </Link>
        </div>
      <Outlet />
    </article>
  )
}

export default TemplatePost