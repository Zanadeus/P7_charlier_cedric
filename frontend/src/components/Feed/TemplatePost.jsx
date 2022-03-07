import '../../styles/Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown, faCircleArrowUp, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Outlet, Link } from 'react-router-dom'
import { deletePostFunction } from './postsAPI'

function TemplatePost({ value }){
  const post = value;
  //console.log(post);

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
              Publié par <Link to={`/profile/{post.profile.userName}`} > <strong>{` {post.profile.userName} `}</strong> </Link>
              il y a
            </p>
            <button className="fontAwesomeSize" onClick={() =>
              deleteMyPost(post.id)
            }>
              <FontAwesomeIcon icon={faTrash} />
            </button>
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