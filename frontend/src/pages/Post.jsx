import '../styles/Post.css'
import { postList } from '../datas/postList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCircleArrowDown, faCircleArrowUp } from '@fortawesome/free-solid-svg-icons'

function Post() {
  return (
    <main id="posts">
      <h1>Les dernières publications sur Groupomania</h1>
      <section>
          {
            postList.map((post) => 
            (
              <article key={`${post.id}`} >
                <div class="likesBar">
                  <span class="fontAwesomeSize"><FontAwesomeIcon icon={faCircleArrowUp} /></span>
                  <p>{post.likes}</p>
                  <span class="fontAwesomeSize"><FontAwesomeIcon icon={faCircleArrowDown} /></span>
                </div>
                <div>
                  <p class="postHead">Publié par {post.author} il y a {Math.floor((Date.now()-post.creationDate)/3600000)} heure(s)</p>
                  <h2>{post.title}</h2>
                  <div class="post">{post.post}</div>
                  <p class="postFeet">Commentaires {Date.now()}</p>
                </div>
              </article>
            ))
          }
      </section>

    </main>
  )
}

export default Post