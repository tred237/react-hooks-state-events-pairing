import React, { useState } from "react";
import CommentDisplay from "./CommentDisplay";

function Comments({ comments }){
    const [isHidden, setIsHidden] = useState(false)

    function handleButton(){
        setIsHidden(! isHidden)
    }

    const buttonText = ! isHidden ? "Hide Comments" : "Show Comments"

    const commentsDisplay = comments.map(element => {
        if(isHidden){
            return <CommentDisplay key={element.id} element={element} hidden='hidden'/>
        } else {
            return <CommentDisplay key={element.id} element={element} hidden='visible'/>
        }   
    })

    return(
        <div id="comments">
            <br />
            <button onClick={handleButton}>{buttonText}</button>
            <hr />
            <h3>{`${comments.length} Comments`}</h3>
            {commentsDisplay}
        </div>
    )
}

export default Comments