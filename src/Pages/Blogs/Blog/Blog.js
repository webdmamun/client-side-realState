import React from 'react';
import './Blog.css'

const Blog = ({ blog }) => {
    const { img,name,details,author,personImg,comments,day} = blog|| {};
    return (
         <>
        
         <div className="my-1">
          <div className="bg"></div>
          <div className="card mt-3">    
            <div className="top">
              <img src={img} alt="" />
            </div>
            
            <div className="bottom">
              <h2>{name}</h2>
              <div className="author">
                <div className="profile">
                <img src={personImg} alt="" />
                </div>
                <p className="name">By {author}</p>
              </div>
              <p className="intro">{details}</p>
              <div className="info">
                <ion-icon name="time"></ion-icon>
                <p className="info">{day} days ago</p>
                <ion-icon name="chatboxes"></ion-icon>
                <p className="info">{comments} comments</p>
              </div>
            </div>
          </div>
          </div>
         </>
    );
};

export default Blog;