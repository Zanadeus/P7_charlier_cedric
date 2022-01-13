import '../styles/Post.css'
import { postList } from '../datas/postList'

function Post() {
  return (
    <main>
      <h1>Les dernières publications sur Groupomania</h1>
      <section>
          {
            postList.map((post) => 
            (
              <article key={`${post.id}`} >
                <div class="likesBar">
                  <p>{post.likes}</p>
                </div>
                <div>
                  <p class="postHead">Publié par {post.author} il y a {Math.floor((Date.now()-post.creationDate)/3600000)} heure(s)</p>
                  <h2>{post.title}</h2>
                  <div class="post">{post.post}</div>
                  <div><p class="postFeet">Commentaires {Date.now()}</p></div>
                </div>
              </article>
            ))
          }
      </section>

    </main>
  )
}

export default Post