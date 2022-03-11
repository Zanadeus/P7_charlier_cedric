import { deletePostFunction } from './postsAPI'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function DeletePostButton({value}){
  //console.log(value);

  function deleteComment(item)
  {
    console.log("click !");
    console.log(item);
    deletePostFunction(item.postId)
      .then((response) => 
      {
        console.log(response);
        //window.location.reload();
      })
  }

  if ( value.profileId === JSON.parse(localStorage.getItem('user')).profileId 
  || JSON.parse(localStorage.getItem('user')).admin === 1) 
  {
    return (
      <button className="fontAwesomeSize" onClick={() =>
        deleteComment(value)
      }>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    )
  }
  else{
    return("")
  }
}

export default DeletePostButton
