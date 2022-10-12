import React from "react";

function Video({ url }){
    return(
        <React.Fragment>
            <iframe
            width="919"
            height="525"
            src={url}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
            />
        </React.Fragment>
    )
}

export default Video