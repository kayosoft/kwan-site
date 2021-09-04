import React from 'react'

export const HeroSection = (props) => {
    return (
    
        <section id="hero" className="hero d-flex align-items-center">

        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">Learning made easy, the modern way.</h1>
              <h2 data-aos="fade-up" data-aos-delay="400">Learn from the best and lets support one another.</h2>
              <div data-aos="fade-up" data-aos-delay="600">
                <div className="text-center text-lg-start">
                  <a href="#" className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>I need a Tutor</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                  <a href="#" className="btn-get-started-2 scrollto d-inline-flex align-items-center justify-content-center align-self-center">
                    <span>I'm a tutor</span>
                    <i className="bi bi-arrow-left"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
              <img src="assets/img/hero-img.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
    
      </section>
  
    )
}


