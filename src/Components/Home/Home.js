import React from 'react';
import UseComment from '../../CustomHooks/UesComment';
import monitor from '../../images/monitor.jpg'
import './Home.css'

const Home = () => {

    const [Comment] = UseComment()
    console.log(Comment)

    return (
        <div className='home_Container'>
           <div className="details_Container">
            <h1>SAMSUNG 23.5” CF396 Curved Computer Monitor</h1>
            <h2>Products Details</h2>
            <ul>
                <li>Super Slim Design: Make a stylish statement with its ultra-slim and sleek profile; Monitor measures less than 0.5 inch thick and the simple circular stand adds a modern look to your space </li>
                <li>
                Advanced Gaming w/ AMD FreeSync: This technology allows users to enjoy smooth images, even during the fastest moving scenes; It minimizes input latency, dramatically reduces image tearing and stutter 
                </li>
                <li>
                Eye Saver Mode: Optimize your viewing comfort by reducing blue light emissions and flickers at the touch of a button; Read documents, play games, watch movies and edit photos for longer periods without worrying about eye strain or fatigue 
                </li>
                <li>
                Connectivity technology: HDMI 
                </li>
            </ul>
           </div>
           <div className="img_Container">
               <img src={monitor} alt="" />
           </div>
        </div>
    );
};

export default Home;