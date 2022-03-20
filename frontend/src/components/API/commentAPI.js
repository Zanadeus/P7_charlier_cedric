export async function getAllComments(postId) {
  return fetch('http://localhost:8080/api/comment/'+postId, {
    method: "GET",
    headers: 
    {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
  })
    .then(data => data.json())
}
/*
export async function getOneComment(pageId) {
  return fetch('http://localhost:8080/api/comment/'+pageId, {
    method: "GET",
    headers: 
    {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
  })
    .then(data => data.json())
}
*/
export async function createCommentFunction(item) {
  return fetch('http://localhost:8080/api/comment/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({ item })
    })
  .then(data => data.json())
}

export async function deleteCommentFunction(pageId) {
  return fetch('http://localhost:8080/api/comment/'+pageId, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  })
  .then(data => data.json())
}