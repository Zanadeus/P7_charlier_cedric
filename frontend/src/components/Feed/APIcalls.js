export async function getList() {
  return fetch('http://localhost:8080/public/postList.json')
    .then(data => data.json())
}

export async function getPost() {
  return fetch('http://localhost:8080/public/postList.json')
    .then(data => data.json())
}

export async function createPostFunction(item) {
 return fetch('http://localhost:8080/api/posts/', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({ item })
 })
   .then(data => data.json())
}
