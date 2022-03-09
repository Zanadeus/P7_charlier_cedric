export async function getAllPosts() {
  return fetch('http://localhost:8080/api/post/')
    .then(data => data.json())
}

export async function getOnePost(pageId) {
  return fetch('http://localhost:8080/api/post/'+pageId)
    .then(data => data.json())
}

export async function createPostFunction(item) {
 return fetch('http://localhost:8080/api/post/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ item })
  })
  .then(data => data.json())
}

export async function deletePostFunction(pageId) {
  return fetch('http://localhost:8080/api/post/'+pageId, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(data => data.json())
}