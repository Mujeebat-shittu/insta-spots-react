import { useState } from "react";

function LikeButton () { 
  const [likeButton, setLikeButton] = useState(false); 

  const likeBtns =  function (){
  setLikeButton ((prev) => !prev);
};
  return(
  <i className= {`fa-heart ${likeButton ? 'fa-solid active' : 'fa-regular'}`} 
     onClick= {likeBtns}
     style={{cursor: 'pointer'}} 
></i>
);
}

export default LikeButton