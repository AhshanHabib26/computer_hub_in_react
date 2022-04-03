import React from 'react';
import './SingleReviews.css'

const SingleReviews = ({review}) => {
    const {User_Image, User_Name, User_Ratings, User_Review} = review
    return (
        <div className='single_reviews'>
            <div className="img_container">
                <img src={User_Image} alt="" />
            </div>
            <div className="single_Review_Details">
                <h2>{User_Name}</h2>
                <p> {User_Review.slice(0, 100)}</p>
                <p> <small>{User_Ratings}</small> </p>
            </div>
        </div>
    );
};

export default SingleReviews;