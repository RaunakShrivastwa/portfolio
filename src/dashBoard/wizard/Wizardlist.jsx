import React from 'react'

const Wizardlist = () => {
  return (
    <>
       <ul className='m-0 p-0 w-100 d-flex align-items-center pb-2 justify-content-between gap-3'>
       <li className='d-flex align-items-center gap-2'>
                <span className='radio'></span>
                <span>Pending</span>
            </li>

            <li className='d-flex align-items-center gap-2'>
                <span className='radio'></span>
                <span>Processing</span>
            </li>

            <li className='d-flex align-items-center gap-2'>
                <span className='radio'></span>
                <span>Complete</span>
            </li>
       </ul>
    </>
  )
}

export default Wizardlist