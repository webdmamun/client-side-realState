import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Blog from "./Blog/Blog";


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("./Blog.JSON")
      .then((res) => res.json())
      .then((json) => setBlogs(json));
  }, []);
  return (
    <Container>
       <div className="row">
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog}></Blog>
          ))}
        </div>
    </Container>
  );
};

export default Blogs;
