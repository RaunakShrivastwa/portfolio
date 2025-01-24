import React, { useState } from 'react';
import { Clock, Facebook, GitHub, Linkedin, Twitter, Youtube } from 'react-feather';

const Posts = () => {

    const blogData = [
        {
            heading: '20 Top Mobile App Development Companies in India (2024)',
            content: 'Are you looking for a reliable mobile app development companies in India? You’re in the right place! With the...',
            imageUrl: 'https://nextbigtechnology.com/wp-content/uploads/2021/12/10-Top-Mobile-App-Development-Companies-in-India.jpg',
            postDate: 'October 13, 2024'
        }, {
            heading: 'How Brands Tap into Sentimental Value to Drive Engagement',
            content: 'Brands are constantly seeking ways to create lasting connections with their customers. One powerful approach is to tap into...',
            imageUrl: 'https://nextbigtechnology.com/wp-content/uploads/2024/10/pexels-fauxels-3182781-768x513.jpg',
            postDate: 'October 7, 2024'
        }, {
            heading: 'Top Mental Health App Development Companies 2024',
            content: 'This section lists the top companies specializing in mental health app development, including Next Big Technology, known for their...',
            imageUrl: 'https://nextbigtechnology.com/wp-content/uploads/2021/12/10-Top-Mobile-App-Development-Companies-in-India.jpg',
            postDate: 'October 13, 2024'
        }, {
            heading: 'Top Telemedicine App Development Companies 2024',
            content: 'This section highlights the top companies specializing in telemedicine app development. These companies are renowned for their expertise in...',
            imageUrl: 'https://nextbigtechnology.com/wp-content/uploads/2021/12/10-Top-Mobile-App-Development-Companies-in-India.jpg',
            postDate: 'October 13, 2024'
        }, {
            heading: 'Top Zend Development Companies 2024',
            content: 'Zend is a popular PHP framework used for building high-performance, enterprise-level web applications. Selecting the right Zend development company...',
            imageUrl: 'https://nextbigtechnology.com/wp-content/uploads/2021/12/10-Top-Mobile-App-Development-Companies-in-India.jpg',
            postDate: 'October 13, 2024'
        }, {
            heading: '20 Top Mobile App Development Companies in India (2024)',
            content: 'Are you looking for a reliable mobile app development companies in India? You’re in the right place! With the...',
            imageUrl: 'https://nextbigtechnology.com/wp-content/uploads/2021/12/10-Top-Mobile-App-Development-Companies-in-India.jpg',
            postDate: 'October 13, 2024'
        }, {
            heading: 'How Brands Tap into Sentimental Value to Drive Engagement',
            content: 'Brands are constantly seeking ways to create lasting connections with their customers. One powerful approach is to tap into...',
            imageUrl: 'https://nextbigtechnology.com/wp-content/uploads/2024/10/pexels-fauxels-3182781-768x513.jpg',
            postDate: 'October 7, 2024'
        }, {
            heading: 'Top Mental Health App Development Companies 2024',
            content: 'This section lists the top companies specializing in mental health app development, including Next Big Technology, known for their...',
            imageUrl: 'https://nextbigtechnology.com/wp-content/uploads/2021/12/10-Top-Mobile-App-Development-Companies-in-India.jpg',
            postDate: 'October 13, 2024'
        }, {
            heading: 'Top Telemedicine App Development Companies 2024',
            content: 'This section highlights the top companies specializing in telemedicine app development. These companies are renowned for their expertise in...',
            imageUrl: 'https://nextbigtechnology.com/wp-content/uploads/2021/12/10-Top-Mobile-App-Development-Companies-in-India.jpg',
            postDate: 'October 13, 2024'
        }, {
            heading: 'Top Zend Development Companies 2024',
            content: 'Zend is a popular PHP framework used for building high-performance, enterprise-level web applications. Selecting the right Zend development company...',
            imageUrl: 'https://nextbigtechnology.com/wp-content/uploads/2021/12/10-Top-Mobile-App-Development-Companies-in-India.jpg',
            postDate: 'October 13, 2024'
        }
    ]


    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3; // Set the number of posts per page

    // Calculate the indices for the posts to display on the current page
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);

    // Calculate total pages
    const totalPages = Math.ceil(blogData.length / postsPerPage);

    // Handler to change pages
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            {currentPosts.map((data, index) => (
                <div className="card border border-0 my-5" key={index}>
                    <div className="card-title mb-4">
                        <h1 className="mb-3">{data.heading}</h1>
                        <p className="mx-2"><Clock /> {data.postDate}</p>
                    </div>
                    <img src={data.imageUrl} className="card-img-top" alt="" />

                    <div className="card-body">
                        <p className="card-text">{data.content}</p>
                    </div>

                    <div className="card-footer bg-transparent border border-0">
                        <div className="d-flex bg-transparent">
                            <div className="mx-1 px-4 py-1 bg-primary">
                                <Facebook style={{ color: "#0765FE", borderRadius: '50%' }} className="bg-light" />
                            </div>
                            <div className="mx-1 px-4 py-1 bg-dark">
                                <Twitter className="text-light" />
                            </div>
                            <div className="mx-1 px-4 py-1 bg-primary">
                                <Linkedin className="text-light" />
                            </div>
                            <div className="mx-1 px-4 py-1 bg-dark">
                                <GitHub className="text-light" />
                            </div>
                            <div className="mx-1 px-4 py-1 bg-danger">
                                <Youtube className="text-light" />
                            </div>
                        </div>

                        <button type="button" className="btn btn-outline-danger w-25 mt-3">Read</button>
                    </div>
                </div>
            ))}

            {/* Pagination Controls */}
            <div className="pagination my-5 d-flex justify-content-center">
                <button
                    className="btn btn-danger mx-2"
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        className={`btn btn-outline-danger mx-1 ${currentPage === index + 1 ? 'active' : ''}`}
                        onClick={() => paginate(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    className="btn btn-danger mx-2"
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </>
    );
};

export default Posts;