import React from 'react'

const RecentPost = () => {
    return (
        <>
            <div class="card quotesCard mb-3 py-0">
                <div class="card-header text-light f18">
                    Recent Posts
                </div>

                <ul className='f18 px-0 mt-2'>
                    <li className='mb-1 mx-3 rectentList' >Coffee</li>
                    <li className='mb-1 mx-3 rectentList' >Tea</li>
                    <li className='mb-1 mx-3 rectentList' >Coca Cola</li>
                </ul>
            </div>
        </>
    )
}

export default RecentPost
