import '../../styles/Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'
import { Outlet, Link } from 'react-router-dom'

function TemplatePost({ value }){
  const post = value
  return(
    <article key={`${post.id}`} className='uniquePost' >
      <Link to={`/post/${post.id}`} >
        <div className="likesBar">
          <span className="fontAwesomeSize"><FontAwesomeIcon icon={faCircleArrowUp} /></span>
          <p>{post.likes}</p>
          <span className="fontAwesomeSize"><FontAwesomeIcon icon={faCircleArrowDown} /></span>
        </div>
        <div>
          <p className="postHead">Publié par {post.author} il y a {Math.floor((Date.now()-post.creationDate)/3600000)} heure(s)</p>
          <h2>{post.title}</h2>
          <p>id = {post.id}</p>
          <div className="post">{post.publication}</div>
          <p className="postFeet">Commentaires {Date.now()}</p>
        </div>
      </Link>
      <Outlet />
    </article>
  )
}

export default TemplatePost