import React from 'react'

const CareerData = () => {

    const careerAnalyist = [{
        imgUrl: "https://nextbigtechnology.com/wp-content/uploads/2021/08/career-ic1.png.webp",
        numberOFData: "3000+",
        title: "Completed Projects"
    }, {
        imgUrl: "https://nextbigtechnology.com/wp-content/uploads/2021/08/career-ic2.png.webp",
        numberOFData: "100+",
        title: "Experts Team"
    }, {
        imgUrl: "https://nextbigtechnology.com/wp-content/uploads/2021/08/career-ic3.png.webp",
        numberOFData: "25000+",
        title: "Hours of Coding"
    }, {
        imgUrl: "https://nextbigtechnology.com/wp-content/uploads/2021/08/career-ic4.png.webp",
        numberOFData: "11+",
        title: "Years of Business"
    }]

    return (
        <>
            <div className="container my-5 p-md-5">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-5 mx-md-5 pb-5 border border-2 border-top-0 border-start-0 border-end-0 border-dark">
                    {careerAnalyist.map(data => {
                        return <div class="col">
                            <div class="card border border-0 h-100 align-items-center">
                                <img src={data.imgUrl} class="card-img-top" alt="..." style={{ width: '100px' }} />
                                <div class="card-body text-center">
                                    <h1 class="display-5 fw-bold card-title">{data.numberOFData}</h1>
                                    <p class="card-text">{data.title}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default CareerData
