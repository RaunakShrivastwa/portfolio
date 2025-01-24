import React from 'react';
import "./BlogPage.scss";
import BlogQuotes from './BlogQuotes.jsx';
import RecentPost from './RecentPost.jsx';
import Posts from './Posts.jsx';

const BlogPage = () => {
    return (
        <div className='vh-100 overflow-y-auto'>
            <div className="container-fluid h-0 p-0 my-5">
                <img
                    className="w-100"
                    src="https://nextbigtechnology.com/wp-content/uploads/2024/02/blog-banner-page-min-_1_.webp"
                    alt=""
                />
            </div >

            <div className="container px-lg-5">
                <div className="row my-5">
                    <div class="col-md-7 col-lg-8">
                        <Posts />
                    </div>


                    <div class="col-md-5 col-lg-4">
                        <BlogQuotes />
                        <RecentPost />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogPage
