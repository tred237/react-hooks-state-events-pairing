import React from "react";

function CommentDisplay({ element, hidden }){
    return(
        <p className={hidden}><strong>{element.user}</strong><br/><br/>{element.comment}</p>
    )
}

export default CommentDisplay