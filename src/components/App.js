import React from "react";
import video from "../data/video.js";
import Video from "./Video.js";
import Details from "./Details.js";
import Comments from "./Comments.js"

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video url={video.embedUrl}/>
      <Details video={video}/>
      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;
