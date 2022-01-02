import React from 'react';

const Blog = ({ blog }) => {
    const { img,name,id,details,author,publishedTime} = blog|| {};
    console.log(name);
    return (
        <div>
<div class="card-group my-2 ">
  <div class="card d-flex justify-content-center align-items-center">
        <div className='w-50 center'>
        <img src={img} alt="" className="img-fluid" />
       
    <div class="card-body">
      <h5 class="card-title">{name}</h5>
      <h3 class="card-title">{author}</h3>
      <p class="card-text">{details}</p>
    </div>
    
    <div class="card-footer">
      <small class="text-muted">Last updated {publishedTime} days ago</small>
    </div>
    </div>

  </div>

</div>
        </div>
    );
};

export default Blog;