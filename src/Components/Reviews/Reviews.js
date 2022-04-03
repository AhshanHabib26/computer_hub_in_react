import React from 'react';
import { Link } from 'react-router-dom';
import UseComment from '../../CustomHooks/UesComment';
import SingleReviews from '../SingleReviews/SingleReviews';
import './Reviews.css'

const Reviews = () => {

    const [Comment] = UseComment();

    return (
        <div className='all_reviews'>
            <h1>All Customer Reviews</h1>
            <div className="review_Container">
            {
                Comment.map(review => <SingleReviews
                    review={review}
                    key={review.id}
                />)
            }
            </div>


            <div className="back_link_btn">
           <Link to='/'>
           Back To Home
            </Link>
           </div>
          
        </div>
    );
};

export default Reviews;