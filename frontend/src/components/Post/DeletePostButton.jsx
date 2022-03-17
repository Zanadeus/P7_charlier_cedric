import { deletePostFunction } from './postsAPI'
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
    <button className="fontAwesomeSize" onClick={() =>
      deleteComment(value)
    }>
      <FontAwesomeIcon icon={faTrash} />
    </button>
  )

}

export default DeletePostButton
