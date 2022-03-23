import { deletePostFunction } from '../../API/postsAPI'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function DeletePostButton({value}){
  function deleteComment(item)
  {
    deletePostFunction(item.postId)
      .then(() => 
      {
        window.location.reload();
        window.location.replace(`/`);
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
