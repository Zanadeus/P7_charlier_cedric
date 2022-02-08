export async function loginFunction(user)
{
  //console.log(user);
  const email = user.email;
  const password = user.password;
  return fetch ("http://localhost:8080/api/auth/login",
  {
    method: "POST",
    headers: 
    {
      'Content-Type': 'application/json'
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
    alert('erreur depuis authAPI.js' + error);
  })
}

export async function signinFunction(user)
{
  console.log(user);
  const pseudo = user.pseudo;
  const email = user.email;
  const password = user.password1;
  return fetch ("http://localhost:8080/api/auth/signup",
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
    alert('erreur depuis authAPI.js' + error);
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