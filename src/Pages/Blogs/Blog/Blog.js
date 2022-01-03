import React from 'react';
import './Blog.css'

const Blog = ({ blog }) => {
    const { img,name,details,author,personImg,comments,day} = blog|| {};
    console.log(name);
    return (
          <div className="mt-5">
          <div class="bg"></div>
          <div class="card mt-3">    
            <div class="top">
              <img src={img} alt="" />
            </div>
            
            <div class="bottom">
              <h2>{name}</h2>
              <div class="author">
                <div class="profile">
                <img src={personImg} alt="" />
                </div>
                <p class="name">By {author}</p>
              </div>
              <p class="intro">{details}</p>
              <div class="info">
                <ion-icon name="time"></ion-icon>
                <p class="info">{day} days ago</p>
                <ion-icon name="chatboxes"></ion-icon>
                <p class="info">{comments} comments</p>
              </div>
            </div>
          </div>
          </div>
    );
};

export default Blog;