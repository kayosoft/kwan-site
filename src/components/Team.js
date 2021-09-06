import React from 'react';
import Data from '../data/data.json'

export const Team = () => {
    return (
        <section id="team" class="team">

      <div class="container">

        <header class="section-header">
          <h2>Team</h2>
          <p>Our Dedicated team</p>
        </header>

        <div class="row gy-5">

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <div class="member-img">
                <img src="assets/img/team/bless.jpg" class="img-fluid" alt="" />
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Oscar Okello</h4>
                <span>Team Lead</span>
                
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <div class="member-img">
                <img src="assets/img/team/team.png" class="img-fluid" alt="" />
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Kalujja Eric </h4>
                <span>Head of Operations</span>
                {/* <p>Decription here</p> */}
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <div class="member-img">
                <img src="assets/img/team/mary.jpg" class="img-fluid" alt="" />
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Nalyazi Mary</h4>
                <span>Head of Finance</span>
                
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch" >
            <div class="member">
              <div class="member-img">
                <img src="assets/img/team/derrick.png" class="img-fluid" alt="Derrick" />
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Busobozi Derrick Daniel</h4>
                <span>Product Designer</span>
                
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6 d-flex align-items-stretch" >
            <div class="member">
              <div class="member-img">
                <img src="assets/img/team/jalaludin.jpg" class="img-fluid" alt="" />
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>Kalumba Jalaudin</h4>
                <span>Chief Marketing Officer</span>
                
              </div>
            </div>
          </div>


          

        </div>

      </div>

    </section>
    )
}


