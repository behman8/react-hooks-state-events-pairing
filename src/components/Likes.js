import React, {useState} from "react";

function Likes({upvotes}) {

    const [like, setLike] = useState(upvotes);
      
    function increment() {
        setLike(like + 1);
    };

    return (
        <button onClick={increment}>{like}👍</button>
    );
};

export default Likes;