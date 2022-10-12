import React from "react";
import VoteButton from "./VoteButton";

function Details({ video }){

    return(
        <div id="details">
            <h1>{video.title}</h1>
            <p>{`${video.views} Views | Uploaded ${video.createdAt}`}</p>
            <VoteButton voteEmoji='👍' video={video}/>
            <VoteButton voteEmoji='👎' video={video}/>
        </div>
    )
}

export default Details