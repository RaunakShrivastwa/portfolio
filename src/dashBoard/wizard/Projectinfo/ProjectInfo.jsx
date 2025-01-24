import React from 'react'
import { Clock, File } from 'react-feather';
import './ProjectInfo.scss'
import Wizardlist from '../Wizardlist';

const ProjectInfo = () => {
  return (
    <div className='w-100 project_con flex-grow-1 p-3 d-flex justify-content-between align-items-center'>
        <ul className='m-0 p-0 w-100 d-flex align-items-center gap-3 pb-2'>
            <li className='d-flex p_info gap-1 align-items-center'>
              <File className='i24' />
              <span>E-Commerce</span>
            </li>
            <li className='d-flex p_info  gap-1 align-items-center'>
                <Clock className='i24' />
                <span>Start 2sep 2024</span>
            </li>

            <li className='d-flex p_info gap-1 align-items-center flex-grow-1'>
                <Clock className='i24 text-danger' />
                <span>End 2sep 2024</span>
            </li>

            <li className='profile_list d-flex gap-1'>
               <div className="radio pending"></div>
               <span>Pending</span>
            </li>

            <li className='profile_list d-flex gap-1'>
               <div className="radio proccessing"></div>
               <span>Proccessing</span>
            </li>

            <li className='profile_list d-flex gap-1'>
               <div className="radio done"></div>
               <span>Complete</span>
            </li>
        </ul>

        
    </div>
  )
}

export default ProjectInfo