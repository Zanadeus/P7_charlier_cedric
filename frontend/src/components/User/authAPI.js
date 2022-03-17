export async function loginFunction(user)
{
  //console.log(user);
  const email = user.email;
  const password = user.password;
  return fetch ("http://localhost:8080/api/account/login",
  {
    method: "POST",
    headers: 
    {
      'Content-Type': 'application/json',
      'Authorization': `Bearer {token}`
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(
    { 
      email,
      password
    })
  })
  .then((response) => 
  {
    return response.json();
  })
  .catch(function(error)//catch errors
  {
    alert('erreur depuis accountAPI.js' + error);
  })
}

export async function signinFunction(user)
{
  console.log(user);
  const userName = user.userName;
  const email = user.email;
  const password = user.password1;
  return fetch ("http://localhost:8080/api/account/signup",
  {
    method: "POST",
    headers: 
    {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(
    { 
      userName,
      email,
      password
    })
  })
  .then((response) => 
  {
    console.log(response.json);
    return response.json();
  })
  .catch(function(error)//catch errors
  {
    alert('erreur depuis accountAPI.js' + error);
  })
}

export default async function getPermissionsFunction(token) 
{
  //console.log("je vais vérifier vos droits");
  return fetch('http://localhost:8080/api/account/permissions',
  {
    method: "GET",
    headers: 
    {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    },
  })
  .then((data) => 
  {
    return data.json();
  })
  .catch(function(error)//catch errors
  {
    alert('erreur depuis authtAPI.js l63' + error);
  })
}

/*
export function getToken()
{
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}
export function setToken(userToken)
{
  sessionStorage.setItem('token', JSON.stringify(userToken));
}
*/