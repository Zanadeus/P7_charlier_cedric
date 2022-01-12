import '../styles/Post.css'
import { postList } from '../datas/postList'

function Post() {
  return (
    <main>
      <h1>Les dernières publications sur Groupomania</h1>
      <section>
          <p> ceci est la section où seront affichés les posts</p>
          {
            postList.map((post) => 
            (
              <article key={`${post.id}`} >
                <div class="likesBar">

                  <p>{post.likes}</p>

                </div>
                <div class="post">
                  <p>Publié par {post.author} il y a {(Date.now()-post.creationDate)/3600000} heure(s)</p>
                  <h2>{post.title}</h2>
                  <div>{post.post}</div>
                </div>
                <p>{Date.now()}</p>
              </article>
            ))
          }
      </section>

    </main>
  )
}

export default Post