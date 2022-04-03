const { useState, useEffect } = require("react")

const UseComment = () =>{
    const [Comment, setComment] = useState([])
    useEffect( () =>{
        fetch('Comment.json')
        .then(res => res.json())
        .then(data => setComment(data))
    }, [])


    return [Comment, setComment]
}

export default UseComment;