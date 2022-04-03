const { useState, useEffect } = require("react")

const UseComment = () =>{
    const [Comment, setComment] = useState([])
    console.log(Comment)
    useEffect( () =>{
        fetch('Comment.json')
        .then(res => res.json())
        .then(data => setComment(data))
    }, [])


    return [Comment, setComment]
}

export default UseComment;