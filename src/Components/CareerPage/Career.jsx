import React from 'react';
import CareerData from './CareerData.jsx';
import './Career.scss';
import Footer from '../../commonComponents/Footer/Footer.jsx'
import MasonaryLayout from './MasonaryLayout.jsx';

const Career = () => {
    return (
        <div className='vh-100 overflow-y-auto'>
            <div className="container-fluid my-5 pt-4" style={{ background: '#E6EBEF' }}>
                <div className="container py-5">
                    <div class="row row-cols-sm-1 row-cols-md-2">
                        <div class="col-sm-6">
                            <div class="card bg-transparent h-100 border border-0 justify-content-center">
                                <h2 className='f38 mb-3'>
                                    <span className='fw-bold' style={{ color: '#F85508' }}>CAREER </span>@<br />
                                    Next Big Technology
                                </h2>
                                <p className='f18'>Start your career with a growing company in a learning environment and work with a team of skilled and experienced professionals.</p>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card bg-transparent h-100 border border-0 my-5 my-md-0 pt-md-2 pb-md-4">
                                <img src="https://nextbigtechnology.com/wp-content/uploads/2021/08/career-banner-img.png.webp" alt="CareerImage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CareerData />

            <MasonaryLayout />

            <Footer />
        </div>
    )
}

export default Career
