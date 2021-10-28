import React from 'react'

export const Aboutus = () => {
    return (
        <section id="about" class="about">

      <div class="container" data-aos="fade-up">
        <div class="row gx-0">

          <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
            <div class="content">
              <h3>Who We Are</h3>
              <p>We envision a world where everyone has access to relevant and affordable education products and services; and possesses the knowledge needed to make sound decisions about using them.</p>
              <p>
              We align incentives for all stakeholders involved: peer tutor, student learner, and university – allowing us to minimize costs and maximize impact, we focus on the dual benefit of tutoring and the power of peers through activating learning communities.
              </p>
              <div class="text-center text-lg-start">
             
                <a href="https://kwantutors.com/" class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                  <span>Read More</span>
                  <i class="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
            <img src="assets/img/features.png" class="img-fluid" alt="" />
          </div>

        </div>
      </div>

    </section>
    )
}

