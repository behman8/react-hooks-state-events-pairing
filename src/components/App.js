import video from "../data/video.js";
import React from "react";
import Likes from "./Likes.js";
import Dislikes from "./Dislikes.js";
import HideComments from "./HideComments.js";

function App() {

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title={video.title}
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <Likes upvotes={video.upvotes}/>
      <Dislikes downvotes={video.downvotes}/>
      <HideComments comments={video.comments}/>
    </div>
  );
}

export default App;
