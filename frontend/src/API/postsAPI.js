export async function getAllPosts() {
  return fetch('http://localhost:8080/api/post/', {
    method: "GET",
    headers: 
    {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
  })
    .then(data => data.json())
}

export async function getOnePost(pageId) {
  return fetch('http://localhost:8080/api/post/'+pageId, {
    method: "GET",
    headers: 
    {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
  })
    .then(data => data.json())
}

export async function createPostFunction(item) {
 return fetch('http://localhost:8080/api/post/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  },
  body: JSON.stringify({ item })
  })
  .then(data => data.json())
}

export async function deletePostFunction(pageId) {
  return fetch('http://localhost:8080/api/post/'+pageId, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
    }
  })
  .then(data => data.json())
}