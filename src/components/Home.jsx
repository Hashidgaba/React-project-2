import React from 'react'
import './Home.css'
export default function Home() {


  return (
    <div className='home-section'>
      <div className=' container '>

        <div className='left'>
          <h2 >WELCOME</h2>
          <span >Thank's to Almighty Allah that Practical Centre has achieved a status that very few institutes have the privilege of having.

            We have a team of most competent and efficient professors of Karachi under who’s guidance and professional skills our students of Classes IX, X, XI & XII (Pre-Medical and Pre-Engineering groups) are able to secure top positions in the board examinations each year.

            We emphasize on each and every portion of the entire syllabus and notes prepared by our experienced professors are provided to the students in original print. Frequent testing and timely result announcement besides constant contact between management and parents through most modern communication systems is what keeps Practical Centre ahead of all coaching institutes in the city.</span>
        </div>
        <div className='right'>
          <h2>News Alert</h2>
          <img src='https://lh3.googleusercontent.com/proxy/G7-P2r4SdGrwPri7hshb2TTZOy3cs3LezwsGNt_1ipVF5X1TmlUeIUoe7tpFu56zVdA6eBYJAvMMsbnwtyO-1OBurRDRsPVvJWUJ1xUfzfoPLW6foo9p_luty3xdfpyZycmyCXS7kE603fvc_53GGkcnfK0' />
        </div>
      </div>

      {/*flip card*/}

      <div className='fliP-cont'>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <i class="fa-regular fa-user user"></i>
              <h2 className='flip-heading'>Chairman</h2>
            </div>
            <div class="flip-card-back">
              <h3>chairman</h3>
              <p>Architect & Engineer</p>
             <button className='btn'>READ MORE</button>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <i class="fa-regular fa-user user"></i>
              <h2 className='flip-heading'> Director</h2>

            </div>
            <div class="flip-card-back">
              <h3>Director</h3>
              <p>Architect & Engineer</p>
              <button className='btn'>READ MORE</button>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <i class="fa-solid fa-check user"></i>
              <h2 className='flip-heading'>Critearia</h2>
            </div>
            <div class="flip-card-back">
              <h3>Critearia</h3>
              <p>Architect & Engineer</p>
              <button className='btn'>READ MORE</button>
            </div>
          </div>
        </div>

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <i class="fa-solid fa-bars user"></i>
              <h2 className='flip-heading'>Policies</h2>
            </div>
            <div class="flip-card-back">
              <h3>Policies</h3>
              <p>Architect & Engineer</p>
              <button className='btn'>READ MORE</button>
            </div>
          </div>
        </div>
      </div>


    </div>

  )
}
