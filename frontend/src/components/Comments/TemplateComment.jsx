import '../../styles/TemplateCom.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Outlet, Link } from 'react-router-dom'
import DeleteCommentButton from './DeleteCommentButton'

function TemplateComment({ value }){
  const comment = value;
  //console.log(comment);

  return(
    <div className='commentTemplate' >
        <div className="likesBar">
          <span className="fontAwesomeSize"><FontAwesomeIcon icon={faCircleArrowUp} /></span>
          <p>{comment.likes}</p>
          <span className="fontAwesomeSize"><FontAwesomeIcon icon={faCircleArrowDown} /></span>
        </div>
        <div className='comBody'>
          <div className="postHead">
            <p>
              Publié par <Link to={`/profile/{comment.profile.userName}`} > <strong>{` {comment.profile.userName} `}</strong> </Link>
              il y a
            </p>
            <DeleteCommentButton value={comment}/>
          </div>

          <div className="post">{comment.text}</div>
        </div>
      <Outlet />
    </div>
  )
}

export default TemplateComment