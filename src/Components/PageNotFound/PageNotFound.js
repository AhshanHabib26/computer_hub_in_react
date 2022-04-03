import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/notfound.jpg';
import './PageNotFound.css'

const PageNotFound = () => {
    return (
        <div className='error-container'>
            <div className="img_sec">
            <img src={notfound} alt="" />
            </div>
           <div className="details_sec">
           <h1>Sooory, Page Not Found</h1>
            <p>The Page You Requested Could Not Be Found</p>
            <Link to='/'>
            Home
            </Link>
           </div>
           
        </div>
    );
};

export default PageNotFound;