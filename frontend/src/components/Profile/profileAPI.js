export async function updateProfileFunction(user)
{
  //console.log(user);
  const pseudo = user.pseudo;
  const email = user.email;
  return fetch (`http://localhost:8080/api/profile/${user}`,
  {
    method: "PUT",
    headers: 
    {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(
    { 
      pseudo,
      email,
    })
  })
  .then((response) => 
  {
    return response.json();
  })
  .catch(function(error)//catch errors
  {
    alert('erreur depuis profileAPI.js , getUserFunction : ' + error);
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
    alert('erreur depuis profileAPI.js , getUserFunction : ' + error);
  })
}

export async function createProfile(user)
{
  console.log(user);
  const pseudo = user.pseudo;
  const email = user.email;
  return fetch ("http://localhost:8080/api/profile/create",
  {
    method: "POST",
    headers: 
    {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(
    { 
      pseudo,
      email
    })
  })
  .then((response) => 
  {
    console.log(response.json);
    return response.json();
  })
  .catch(function(error)//catch errors
  {
    alert('erreur depuis profileAPI.js' + error);
  })
}