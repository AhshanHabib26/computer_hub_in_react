import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='main_blog_container'>
            <h1>My Awesome Blog</h1>
            <div className="blog_container">
                <div className="blog_item">
                    <h2>What Is Context API ?</h2>
                    <p> <strong>React Context API</strong> is a Global Variable And It's Pass Data Any Where Form Root Component To Parent, To Child And So On. It Is Alternative To Prop Drilling Methods. Context API Retutns COnsumer And Providers. Providers Store Value And Pass All Consumers And Children. </p>
                </div>
                <div className="blog_item">
                    <h2>What Is Semantic Tag ?</h2>
                    <p> Semantic Element Is HTML5 Tags Element. Semantic Tag Are Use Website To Help Browser And Understand The Meaning Of The Website Content And It's Also Helps To Website Ranking Search Engines Optimazation.</p>
                </div>
                <div className="blog_item">
                    <h2>Inline Vs Block And Inline-Block</h2>
                    <ul>
                        <li> <strong>Inline</strong> The element doesn’t start on a new line and only occupy just the width it requires. You can’t set the width or height.</li>

                        <li> <strong>Block</strong>The element will start on a new line and occupy the full width available. And you can set width and height values.</li>

                        <li> <strong>Inline-Block</strong> It’s just like the inline element, where it doesn’t start on a new line. But, you can set width and height values.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Blog;