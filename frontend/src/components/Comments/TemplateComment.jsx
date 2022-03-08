import '../../styles/Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown, faCircleArrowUp, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Outlet, Link } from 'react-router-dom'
//import { deleteCommentFunction } from './commentAPI'
import ConditionalButton from './ConditionnalButton'

function TemplateComment({ value }){
  const comment = value;
  //console.log(post);

  

  return(
    <article className='uniquePost' >
        <div className="likesBar">
          <span className="fontAwesomeSize"><FontAwesomeIcon icon={faCircleArrowUp} /></span>
          <p>{comment.likes}</p>
          <span className="fontAwesomeSize"><FontAwesomeIcon icon={faCircleArrowDown} /></span>
        </div>
        <div>
          <div className="postHead">
            <p >
              Publié par <Link to={`/profile/{comment.post.userName}`} > <strong>{` {comment.post.userName} `}</strong> </Link>
              il y a
            </p>
            <ConditionalButton value={comment}/>
          </div>
            <h2>{comment.title}</h2>
            <div className="post">{comment.text}</div>
        </div>
      <Outlet />
    </article>
  )
}

export default TemplateComment