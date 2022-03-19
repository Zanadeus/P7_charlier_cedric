import '../../styles/TemplateCom.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Outlet, Link } from 'react-router-dom'
import DeleteCommentButton from './DeleteCommentButton'

function TemplateComment({ value, permissions }){
  const comment = value;

  function timePastSinceCreation()
  {
    let dateUpdate = new Date(`${comment.createdAt}`);
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
    <div className='commentTemplate' >
        <div className="likesBar">
          <span className="fontAwesomeSize" onClick={() =>
            console.log("tu veux mettre un like")
          }>
          <FontAwesomeIcon icon={faCircleArrowUp} />
          </span>
          <p>{comment.likes}</p>
          <span className="fontAwesomeSize" onClick={() =>
            console.log("tu veux mettre un dislike")
          }>
            <FontAwesomeIcon icon={faCircleArrowDown} />
          </span>
        </div>
        <div className='comBody'>
          <div className="postHead">
            <p>
              Publié par <Link to={`/profile/${comment.profile.userName}`} > <strong>{` ${comment.profile.userName} `}</strong> </Link>
              il y a {timePastSinceCreation()}
            </p>
            {
              (comment.profileId === permissions.profileId || permissions.admin === 1) && <DeleteCommentButton value={comment} />
            }
          </div>

          <div className="post">{comment.text}</div>
        </div>
      <Outlet />
    </div>
  )
}

export default TemplateComment