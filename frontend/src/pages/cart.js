
//Déclaration des variables
const formInput = document.querySelectorAll("input");//selection de tous les inputs a vérifier
const contact = {};//objet contact recevant les informations de contact

function validationFormulaire(event)//fonction de vérification du formulaire, récupération et envoi des données contact et cartStorage au serveur
{
  event.preventDefault();
  let numberOfValidatedFormField = 0 ;
  let numberOfFormField = 0
  formInput.forEach(element => 
  {
    function badInput()
    {
      if(element.parentNode.querySelector("p") == null)//on vérifie qu'une phrase d'avertissement pour le champ n'existe pas
      {
        element.insertAdjacentHTML("beforebegin", '<p class="text-danger" >Veuillez vérifier ce champ :</p>')
        element.setAttribute("class", "border border-danger");//On met la bordure de l'input en rouge
      }
    }
    numberOfFormField += 1;
    //vérification d'un champ vide
    if(element.value == "")
    {
      badInput();
      return;
    }
    //vérification du champ email
    if (element.parentNode.getAttribute("for") === "email")//on vérifie que le label de l'input est "email"
    {
      if ((/^.+[@]+.+[.]+[\w]+$/.test(element.value)) === false)//si l'input ne correspond pas à la forme d'un email "a@b.c"
      {
        badInput();
        return;
      }
    }
    //validation du champ
    if(element.parentNode.querySelector("p") != null)//On vérifie si le champ a déja été validé vide
    {
      element.parentNode.querySelector("p").remove();//On retire le texte demandant de vérifier le champ
    }
    element.setAttribute("class", "border border-success");//On met la bordure de couleur verte
    numberOfValidatedFormField += 1;
    //récupération des données formulaire de contact
    contact[element.parentNode.getAttribute("for")] = element.value;
  });
  //vérification que tous les formulaires sont bien complétés
  return numberOfValidatedFormField === numberOfFormField;
}

  /*_________________________________Envoi des informations au serveur_________________________________*/
function postOrder()
{
  let reqURL = "http://localhost:3000/api/furniture/order" ;
  fetch (reqURL,
  {
    method: "POST",
    headers: 
    {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(
    {
      contact,
      products
    })
  })
  .then((response) => 
  {
    return response.json();
  })
  .then((data) =>
  {
    localStorage.setItem("validatedOrder", JSON.stringify(data));
    location.href = "thanksPage.html" ;
  })
  .catch(function(error)//catch errors
  {
    alert(error);
  })
}

function submitData(event)
{
  if (validationFormulaire(event) === true)
  {
    postOrder();
  }
}

document.getElementById("submitForm").addEventListener('submit', submitData)