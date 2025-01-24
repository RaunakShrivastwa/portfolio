import React from 'react';
import './HomeService.scss';
import { BarChart, Battery, Rss } from 'react-feather';
import Carosel from './Carosel';

function HomeService() {
    return (
        <div className='d-flex flex-column container '>
            <h2 className='service_text'>Our Services</h2>
            <div className='service_container p-4 d-flex gap-5'>
                <div className='card1'>

                    <div className="card_items custome_radius box_shadow">
                        <img src="https://nextbigtechnology.com/wp-content/uploads/2023/06/Web.png" alt="" />
                        <p>Web</p>
                        <p>Development</p>
                    </div>
                   
                    <div className="card_items custome_radius box_shadow">
                        <img src="https://nextbigtechnology.com/wp-content/uploads/2023/06/Web.png" alt="" />
                        <p>Ecommerce</p>
                        <p>Development</p>
                    </div>

                     <div className="card_items custome_radius box_shadow mb-2">
                        <img src="https://nextbigtechnology.com/wp-content/uploads/2023/06/Web.png" alt="" />
                        <p>Website UI/UX</p>
                        <p>Design</p>
                    </div>

                    <div className="card_items custome_radius box_shadow mb-2">
                        <img src="https://nextbigtechnology.com/wp-content/uploads/2023/06/Web.png" alt="" />
                        <p>API Integration</p>
                        <p>Services</p>
                    </div>

                    <div className="card_items custome_radius box_shadow">
                        <img src="https://nextbigtechnology.com/wp-content/uploads/2023/06/Web.png" alt="" />
                        <p>Video/Image</p>
                        <p>Editing</p>
                    </div>

                    <div className="card_items custome_radius box_shadow">
                        <img src="https://nextbigtechnology.com/wp-content/uploads/2023/06/Web.png" alt="" />
                        <p>Courses</p>
                        <p>Bootcamp</p>
                    </div>

                </div>


                <div className='phone d-none d-lg-block d-xl-block custome_radius box_shadow p-3 custome_border'>
                    <div className="mob_header custome_radius">
                        <div className='mid_camara p-1 px-2 box_shadow'>
                            <span className='f11'>09:22pm</span>
                            <p className='d-flex justify-content-end gap-1 flex-grow-1 align-items-center'>
                                <BarChart className='i11' />
                                <Rss className='i11 wifi' />
                                <Battery className='i11' />
                            </p>
                            <span className='mid_c box_shadow'></span>
                        </div>
                        <div className='screen'>
                            <Carosel />
                        </div>
                        <div className='buttons'>
                            <span></span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomeService
