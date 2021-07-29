import React, { useState } from "react";

function Dislikes({downvotes}) {

    const [dislike, setDislike] = useState(downvotes);
      
    function decrement() {
        setDislike(dislike - 1);
    };

    return (
        <button onClick={decrement}>{dislike}👎</button>
    );
};

export default Dislikes;