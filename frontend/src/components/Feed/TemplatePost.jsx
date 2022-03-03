import '../../styles/Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown, faCircleArrowUp, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Outlet, Link } from 'react-router-dom'
import { deletePostFunction } from './postsAPI'

function TemplatePost({ value }){
  const post = value

  function deleteMyPost(item)
  {
    console.log("click !");
    deletePostFunction(item)
    .then((response) => 
    {
      console.log(response);
      window.location.reload();
    })
  }

  function timePastSincePostCreation()
  {
    let timePastCounting = (Date.now()-post.createdAt)/1000;//temps en secondes
    if (timePastCounting < 60) 
    {
      return `${Math.floor(timePastCounting)} seconde(s)`//temps en minutes
    }
    else if ( (timePastCounting/60) < 60) 
    {
      return `${Math.floor(timePastCounting/60)} minute(s)`
    }
    else if ((timePastCounting/(60*60)) < 24) 
    {
      return `${Math.floor(timePastCounting/(60*60))} heure(s)`
    }
    else if ((timePastCounting/(60*60*24)) < 365) 
    {
      return `${Math.floor(timePastCounting/(60*60*24))} jour(s)`
    }
    else if ((timePastCounting/(60*60*24)) > 365) 
    {
      return `${Math.floor(timePastCounting/(60*60*24*365))} an(s)`
    }
    else
    {
      return `erreur`
    }
  }

  return(
    <article className='uniquePost' >
        <div className="likesBar">
          <span className="fontAwesomeSize"><FontAwesomeIcon icon={faCircleArrowUp} /></span>
          <p>{post.likes}</p>
          <span className="fontAwesomeSize"><FontAwesomeIcon icon={faCircleArrowDown} /></span>
        </div>
        <div>
          <div className="postHead">
            <p >
              Publié par <Link to={`/profile/${post.author}`} > <strong>{` ${post.author} `}</strong> </Link> 
              il y a {timePastSincePostCreation()}
            </p>
            <button className="fontAwesomeSize" onClick={() =>
              deleteMyPost(post.id)
            }>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
          
          <Link to={`/post/${post.id}`} >
            <h2>{post.title}</h2>
            <div className="post">{post.text}</div>
            <p className="postFeet">{post.commentNumber} Commentaire(s) {post.creationDate}</p>
          </Link>
        </div>
      <Outlet />
    </article>
  )
}

export default TemplatePost