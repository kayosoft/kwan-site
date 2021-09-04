import React from 'react'

export const Footer = () => {
    return (
    <footer id="footer" className="footer">

    <div className="footer-newsletter">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <h4>Our Newsletter</h4>
            <p>Get in touch with us all the time</p>
          </div>
          <div className="col-lg-6">
            <form action="" method="post">
              <input type="email" name="email" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div className="footer-top">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-info">
            <a href="index.html" className="logo d-flex align-items-center">
              <img src="assets/img/icon/logo.png" alt="" />
              <span></span>
            </a>
            <p>We provide students with peer tutoring services through our Kwan platforms,</p>
            <div className="social-links mt-3">
              <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
              <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="instagram"><i className="bi bi-instagram bx bxl-instagram"></i></a>
              <a href="#" className="linkedin"><i className="bi bi-linkedin bx bxl-linkedin"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Product</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Why Kwan</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#how-kwan-works">How it works</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Payment</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Policies</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-6 footer-links">
            <h4>Company</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <a href="#about">About Us</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#team">Our Team</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#clients">Partnerships</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#recent-blog-posts">Blog</a></li>
              <li><i className="bi bi-chevron-right"></i> <a href="#">Career</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>Contact Us</h4>
            <p>
              Lira University <br />
              Barapwo, Lira<br />
              Uganda <br /><br />
              <strong>Phone:</strong> +256 787539824<br />
              <strong>Email:</strong> info@kwantutors.com<br />
            </p>

          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Kwan Technologies Ltd</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        Download Our <a href="">Android App</a><span> . </span><a href="">iOS App</a>
      </div>
    </div>
  </footer>
  
    )
}


