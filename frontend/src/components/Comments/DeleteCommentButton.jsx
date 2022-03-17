import { deleteCommentFunction } from './commentAPI'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function DeleteCommentButton({value, isAdmin}){
  //console.log(isAdmin);

  function deleteComment(item)
  {
    console.log("click !");
    console.log(item);
    deleteCommentFunction(item.commentId)
      .then((response) => 
      {
        console.log(response);
        window.location.reload();
      })
  }

  if ( value.profileId === JSON.parse(localStorage.getItem('user')).profileId 
  || isAdmin === 1) 
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

export default DeleteCommentButton
