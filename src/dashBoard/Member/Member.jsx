import React from 'react'
import './Member.scss';
import { MessageCircle, Plus, User } from 'react-feather';
import { Link } from 'react-router-dom';


const Member = () => {
  return (
    <>
      <div className="member d-flex  gap-2" title='View Members' data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
        <User />
        <Plus className='i11' />
      </div>


      <div class="offcanvas offcanvas-members offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Associated Members</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body d-flex flex-column gap-3">

          <div className="item d-flex align-items-center gap-2 px-2 rounded-3 box_shadow">
            <img src="https://www.feedocenter.com/images/user.svg" alt="" />
            <div className="info flex-grow-1 h-100 d-flex flex-column p-1">
              <h3 className='f18 fw-bold'>Shubham Shrivastwa</h3>
              <p className='m-0 p-0'>Fullstack Developer</p>
              <p className='m-0 p-0'>Exprience +4 years</p>
            </div>
            <Link className='text-dark link'><MessageCircle className='i30' /></Link>
          </div>

          <div className="item d-flex align-items-center gap-2 px-2 rounded-3 box_shadow">
            <img src="https://www.feedocenter.com/images/user.svg" alt="" />
            <div className="info flex-grow-1 h-100 d-flex flex-column p-1">
              <h3 className='f18 fw-bold'>Shubham Shrivastwa</h3>
              <p className='m-0 p-0'>Fullstack Developer</p>
              <p className='m-0 p-0'>Exprience +4 years</p>
            </div>
            <Link className='text-dark link'><MessageCircle className='i30' /></Link>
          </div>

          <div className="item d-flex align-items-center gap-2 px-2 rounded-3 box_shadow">
            <img src="https://www.feedocenter.com/images/user.svg" alt="" />
            <div className="info flex-grow-1 h-100 d-flex flex-column p-1">
              <h3 className='f18 fw-bold'>Shubham Shrivastwa</h3>
              <p className='m-0 p-0'>Fullstack Developer</p>
              <p className='m-0 p-0'>Exprience +4 years</p>
            </div>
            <Link className='text-dark link'><MessageCircle className='i30' /></Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default Member