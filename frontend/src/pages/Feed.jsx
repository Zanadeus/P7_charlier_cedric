import '../styles/Feed.css'
import Post from '../components/Post'
import { postList } from '../datas/postList'

function Feed() {
  return (
    <main id="feed">
      <h1>Les dernières publications sur Groupomania</h1>
      <section>
          {
            postList.map((posts) => 
            (
              <Post value={posts} />
            ))
          }
      </section>
    </main>
  )
}

export default Feed