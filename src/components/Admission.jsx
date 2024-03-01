import React from 'react'
import './Admission.css'
import { Link } from 'react-router-dom'

export default function Admission() {
  return (
    <div className='admission-cont'>
      <h2 className='chairman'>ADMISSION</h2>
      <div className=' admisson'>
        <div className='admission-flex'>
          <ul className='keypoints'>
            <li className='dot'>Students passing their previous examination with at least 60% marks are eligible for admission.</li>
            <li className='dot'>It is mandatory that parents/guardians must accompany their ward to the institute at the time of admission.</li>
            <li className='dot'>In case, if the parents/guardians are out of City / Country, they must nominate a representative and inform the management with all his / her contact sources.</li>
            <li className='dot'> Every child is expected to be dressed up in decent and neat attire. His / her personality should reflect the values of our culture and society.</li>
            <li className='dot'> The management reserves the right to reject any admission without giving a reason.</li>


          </ul>
        </div>
        <div className='right-1'>
          <div className='keypoints'>
            <h2>Related links</h2>
            <Link className='link' to='/contact' style={{ width: '100%' }}>contact</Link>
            <Link to='/admission' style={{ width: '100%' }}>admission</Link>
          </div>
        </div>

      </div>
    </div>
  )
}
