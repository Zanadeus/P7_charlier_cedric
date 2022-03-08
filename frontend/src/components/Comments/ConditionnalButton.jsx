import { deleteCommentFunction } from './commentAPI'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
function ConditionalButton({value}){

  function deleteMyPost(item)
  {
    console.log("click !");
    deleteCommentFunction(item)
    .then((response) => 
    {
      console.log(response);
      window.location.reload();
    })
  }

  if (value.post.profileId === JSON.parse(sessionStorage.getItem('user')).profileId) 
  {
    return (
      <button className="fontAwesomeSize" onClick={() =>
        deleteMyPost(value.commentId)
      }>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    )
  }
  else{
    return("")
  }
}

export default ConditionalButton
