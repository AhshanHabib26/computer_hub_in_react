import React from 'react';
import './SingleComment.css'

const SingleComment = ({singleComment}) => {
    const {User_Image, User_Name, User_Ratings, User_Review} = singleComment
    return (
        <div className='single_reviews'>
            <div className="img_container">
                <img src={User_Image} alt="" />
            </div>
            <div className="single_Reviews_Details">
                <h2>{User_Name}</h2>
                <p> {User_Review.slice(0, 100)}</p>
                <p> <small>{User_Ratings}</small> </p>
            </div>
        </div>
    );
};

export default SingleComment;