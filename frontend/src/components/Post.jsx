import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowDown, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'

function Post({ value }){
  const post = value
  return(
    <article key={`${post.id}`} >
      <div className="likesBar">
        <span className="fontAwesomeSize"><FontAwesomeIcon icon={faCircleArrowUp} /></span>
        <p>{post.likes}</p>
        <span className="fontAwesomeSize"><FontAwesomeIcon icon={faCircleArrowDown} /></span>
      </div>
      <div>
        <p className="postHead">Publié par {post.author} il y a {Math.floor((Date.now()-post.creationDate)/3600000)} heure(s)</p>
        <h2>{post.title}</h2>
        <div className="post">{post.post}</div>
        <p className="postFeet">Commentaires {Date.now()}</p>
      </div>
    </article>
  )
}

export default Post