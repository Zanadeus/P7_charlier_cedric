import '../../styles/TemplatePost.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Outlet, Link } from 'react-router-dom'
import DeletePostButton from './DeletePostButton'

function TemplatePost({ value, isAdmin }){
  const post = value;
  //console.log(isAdmin);
  //console.log(post);

  return(
    <article className='postTemplate' >
        <div className="likesBar">
          <span className="fontAwesomeSize"><FontAwesomeIcon icon={faCircleArrowUp} /></span>
          <p>{post.likes}</p>
          <span className="fontAwesomeSize"><FontAwesomeIcon icon={faCircleArrowDown} /></span>
        </div>
        <div className='postBody'>
          <div className="postHead">
            <p>
              Publié par <Link to={`/profile/${post.profile.userName}`} > <strong>{` ${post.profile.userName} `}</strong> </Link>
              il y a
            </p>
            <DeletePostButton value={post} isAdmin={isAdmin}/>
          </div>
          
          <Link to={`/post/${post.postId}`} >
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