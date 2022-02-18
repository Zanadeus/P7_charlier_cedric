export async function updateProfileFunction(user)
{
  console.log(user);
  /*
  const pseudo = user.pseudo;
  const email = user.email;
  */
  return fetch (`http://localhost:8080/api/profile/${user.lastPseudo}`,
  {
    method: "PUT",
    headers: 
    {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
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
  return fetch (`http://localhost:8080/api/profile/${user}`)
  .then((response) => 
  {
    return response.json();
  })
  .catch(function(error)//catch errors
  {
    alert('erreur depuis profileAPI.js , getProfileFunction : ' + error);
  })
}
