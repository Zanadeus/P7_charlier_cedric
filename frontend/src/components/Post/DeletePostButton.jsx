import { deletePostFunction } from '../API/postsAPI'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function DeletePostButton({value}){
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

  return (
    <span className="fontAwesomeSize" onClick={() =>
      deleteComment(value)
    }>
      <FontAwesomeIcon icon={faTrash} />
    </span>
  )

}

export default DeletePostButton
