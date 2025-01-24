import React from 'react';
import './Blog.scss';
import { blogs } from '../../staticJson/static';

function Blog() {
  return (
    <div className="Blog_container container mt-3 py-3">
      <div className="top d-flex justify-content-between">
        <h1>Our Blog</h1>
        <button className="read_blog btn custome_radius">Read Blog</button>
      </div>
      <p>Our Important News , Here and Leates Feed</p>
      <div className="body_blog pb-2">
        {blogs.map((items) => (
          <div className="items box_shadow custome_radius p-3 d-flex flex-column gap-2 align-items-center">
            <img
              className="blog_img custome_radius"
              src={items?.image}
              alt=""
            />
            <p className="f20 title_blog">
              {items?.title}
            </p>
            <small>
              {items?.aboutBlog}
            </small>
            <div className="more f16">Read More</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog