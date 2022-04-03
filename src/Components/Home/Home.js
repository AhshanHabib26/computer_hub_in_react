import React from "react";
import { Link } from "react-router-dom";
import UseComment from "../../CustomHooks/UesComment";
import monitor from "../../images/monitor.jpg";
import SingleComment from "../SingleComment/SingleComment";
import "./Home.css";

const Home = () => {
  const [Comment] = UseComment();
  const CommentThree = Comment.slice(0, 3);

  return (
    <div>
      <div className="home_Container">
        <div className="details_Container">
          <h1>SAMSUNG 23.5” CF396 Curved Computer Monitor</h1>
          <h2>Products Details</h2>
          <ul>
            <li>
              Super Slim Design: Make a stylish statement with its ultra-slim
              and sleek profile; Monitor measures less than 0.5 inch thick and
              the simple circular stand adds a modern look to your space{" "}
            </li>
            <li>
              Advanced Gaming w/ AMD FreeSync: This technology allows users to
              enjoy smooth images, even during the fastest moving scenes; It
              minimizes input latency, dramatically reduces image tearing and
              stutter
            </li>
            <li>
              Eye Saver Mode: Optimize your viewing comfort by reducing blue
              light emissions and flickers at the touch of a button; Read
              documents, play games, watch movies and edit photos for longer
              periods without worrying about eye strain or fatigue
            </li>
            <li>Connectivity technology: HDMI</li>
          </ul>
        </div>
        <div className="img_Container">
          <img src={monitor} alt="" />
        </div>
      </div>

      <div className="customer_Reviews">
        <h1>Top Customer Reviews</h1>
        <div className="reviews_container">
          {CommentThree.map((singleComment) => (
            <SingleComment
              key={singleComment.id}
              singleComment={singleComment}
            />
          ))}
        </div>

           <div className="all_link_btn">
           <Link to='/reviews'>
            See All Reviews
            </Link>
           </div>


      </div>
    </div>
  );
};

export default Home;
