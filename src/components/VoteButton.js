import React, { useState } from "react";

function VoteButton({ voteEmoji, video }){
    const [upvotes, setUpvotes] = useState(video.upvotes)
    const [downvotes, setDownvotes] = useState(video.downvotes)

    function handleVotes(){
        let newVotes = voteEmoji === '👍' ? upvotes : downvotes
        if(voteEmoji === '👍'){
            newVotes += 1
            setUpvotes(newVotes)
        } else {
            newVotes -= 1
            setDownvotes(newVotes)
        }
    }

    return(
        <button onClick={handleVotes}>{(voteEmoji === '👍' ? upvotes : downvotes) + ' ' + voteEmoji}</button>
    )
}

export default VoteButton