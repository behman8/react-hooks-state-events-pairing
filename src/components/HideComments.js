import React, {useState} from "react";

function HideComments( {comments} ) {

    const [hideComments, setHideComments] = useState(false)

    function click() {
        setHideComments((hideComments) => !hideComments);
    }
    
    function hideOrShow() {
        if (setHideComments === true) {
            return null
        } else {
            return {comments}
        }
    };

    const hide = !hideComments ? "Hide Comment" :  "Show Comments"

    return (
        <button onClick={click}>{hide}</button>

    );
};

export default HideComments;