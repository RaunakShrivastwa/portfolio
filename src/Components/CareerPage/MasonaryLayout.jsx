import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


const MasonaryLayout = () => {
    const cardData = [{
        imageUrl: "https://nextbigtechnology.com/wp-content/uploads/2021/08/career-height-img1.jpg.webp",
        title: "Supportive Team"
    }, {
        imageUrl: "https://nextbigtechnology.com/wp-content/uploads/2021/08/career-height-img3.png.webp",
        title: "Training & Internship"
    }, {
        imageUrl: "https://nextbigtechnology.com/wp-content/uploads/2021/08/career-height-img5.png.webp",
        title: "Decipline & Transparency"
    }, {
        imageUrl: "https://nextbigtechnology.com/wp-content/uploads/2021/08/career-height-img2.jpg.webp",
        title: "Innovation & Creativity"
    }, {
        imageUrl: "https://nextbigtechnology.com/wp-content/uploads/2021/08/career-height-img4.jpg.webp",
        title: "Career Growth"
    }, {
        imageUrl: "https://nextbigtechnology.com/wp-content/uploads/2021/08/career-height-img6.jpg.webp",
        title: "Recognition & Feedback"
    }]
    return (
        <div className="container px-5 mb-5">
            <div className="Carriertitle text-center mb-5 mx-5">
                <h1 className='fs-1 fw-bold'>Achieve New Goals In Your Career</h1>
                <p className='fs-5'>Work within a healthy working environment with a very supportive team of excellent programmers, developers, architects, salespersons, testers, designers, and managers at Next Big Technology.</p>
            </div>

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-2">
                {cardData.map(data => {
                    return <div class="col">
                        <div class="card h-100">
                            <img src={data.imageUrl} class="card-img h-100" alt="img1" />
                            <div class="card-img-overlay d-flex align-items-end justify-content-center">
                                <h1 class="fw-bold text-light card-title">{data.title}</h1>
                            </div>
                        </div>
                    </div>

                })}
            </div>

        </div>
    )
}

export default MasonaryLayout;
