import { deleteCommentFunction } from './commentAPI'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function DeleteCommentButton({value}){

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

  return (
    <button className="fontAwesomeSize" onClick={() =>
      deleteComment(value)
    }>
      <FontAwesomeIcon icon={faTrash} />
    </button>
  )
}

export default DeleteCommentButton
