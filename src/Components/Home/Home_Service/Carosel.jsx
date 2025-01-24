import React from 'react'

function Carosel() {
    return (
        <div id="carouselExampleControls" class="carousel slide h-100" data-bs-ride="carousel">
            <div class="carousel-inner h-100">
                <div class="carousel-item active h-100">
                    <img className='img-fluid h-100 d-block' src="./com.webp" alt="" />
                </div>
                <div class="carousel-item h-100">
                    <img className='img-fluid h-100 d-block' src="./commm.webp" alt="" />
                </div>
                <div class="carousel-item h-100">
                    <img className='img-fluid h-100 d-block' src="./comm.webp" alt="" />
                </div>

                <div class="carousel-item h-100">
                    <img className='img-fluid h-100 d-block' src="./commmm.webp" alt="" />
                </div>

                <div class="carousel-item h-100">
                    <img className='img-fluid h-100 d-block' src="./www.png" alt="" />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carosel