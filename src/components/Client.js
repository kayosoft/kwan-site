import React from 'react'

const Client = () => {
    return (
        <section id="clients" class="clients">

      <div class="container" data-aos="fade-up">

        <header class="section-header">
          <h2>Who work with us</h2>
          <p>We are backed by leading institutions and partners to deliver our promise on education inclusion in Africa.</p>
        </header>

        <div class="clients-slider swiper-container">
          <div class="swiper-wrapper align-items-center">
            <div class="swiper-slide"><img src="assets/img/clients/client-1.png" class="img-fluid" alt="" /></div>
            <div class="swiper-slide"><img src="assets/img/clients/client-2.png" class="img-fluid" alt="" /></div>
            <div class="swiper-slide"><img src="assets/img/clients/client-3.png" class="img-fluid" alt="" /></div>
            <div class="swiper-slide"><img src="assets/img/clients/client-4.png" class="img-fluid" alt="" /></div>
            <div class="swiper-slide"><img src="assets/img/clients/client-5.png" class="img-fluid" alt="" /></div>
            <div class="swiper-slide"><img src="assets/img/clients/client-6.png" class="img-fluid" alt="" /></div>
            <div class="swiper-slide"><img src="assets/img/clients/client-7.png" class="img-fluid" alt="" /></div>
            <div class="swiper-slide"><img src="assets/img/clients/client-8.png" class="img-fluid" alt="" /></div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>

    </section>
    )
}

export default Client
