export async function updateProfileFunction(user)
{
  console.log(user);
  return fetch (`http://localhost:8080/api/profile/${user.lastPseudo}`,
  {
    method: "PUT",
    headers: 
    {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify(
    { 
      user
    })
  })
  .then((response) => 
  {
    return response.json();
  })
  .catch(function(error)//catch errors
  {
    alert('erreur depuis profileAPI.js , updateProfileFunction : ' + error);
  })
}

export async function getProfileFunction(user)
{
  return fetch (`http://localhost:8080/api/profile/${user}`, {
    method: "GET",
    headers: 
    {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
  })
  .then((response) => 
  {
    return response.json();
  })
  .catch(function(error)//catch errors
  {
    alert('erreur depuis profileAPI.js , getProfileFunction : ' + error);
  })
}

export async function deleteProfileFunction(user)
{
  console.log(user);
  console.log(user.userName);
  return fetch (`http://localhost:8080/api/profile/${user.userName}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${sessionStorage.getItem('token')}`
    }
  })
  .then(data => data.json())
}
