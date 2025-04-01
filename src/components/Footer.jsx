export default function Footer() {
    return (
        <footer className="footer-area">
    <div
      className="footer-top bg-img default-overlay pt-130 pb-80"
      style={{ backgroundImage: "url(assets/img/bg/bg-4.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer-widget mb-40">
              <div className="footer-title">
                <h4>ABOUT US</h4>
              </div>
              <div className="footer-about">
                <p>
                  MS School is committed to providing quality education and nurturing young minds for a brighter future. We believe in holistic development and excellence in academics.
                </p>
                <div className="f-contact-info">
                  <div className="single-f-contact-info">
                    <i className="fa fa-home" />
                    <span>Near Osmaniya Masjid, Times Colony, Aurangabad</span>
                  </div>
                  <div className="single-f-contact-info">
                    <i className="fa fa-envelope-o" />
                    <span>
                      <a href="#">info@msschool.edu.in</a>
                    </span>
                  </div>
                  <div className="single-f-contact-info">
                    <i className="fa fa-phone" />
                    <span>+91 481 123 4567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="footer-widget mb-40">
              <div className="footer-title">
                <h4>QUICK LINKS</h4>
              </div>
              <div className="footer-list">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About Us</a>
                  </li>
                  <li>
                    <a href="/facilities">Facilities</a>
                  </li>
                  <li>
                    <a href="/admission">Admission</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="footer-widget mb-40">
              <div className="footer-title">
                <h4>GALLERY</h4>
              </div>
              <div className="footer-gallery">
                <ul>
                  <li>
                    <a href="#">
                      <img src="/gallery/CIN00200_1.JPG" alt="School Activity" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/gallery/CIN00201_1.JPG" alt="School Activity" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/gallery/CIN00202_1.JPG" alt="School Activity" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/gallery/CIN00203_1.JPG" alt="School Activity" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="footer-widget mb-40">
              <div className="footer-title">
                <h4>Newsletter</h4>
              </div>
              <div className="subscribe-style">
                <p>
                  Subscribe to our newsletter to stay updated with school news, events, and announcements.
                </p>
                <div id="mc_embed_signup" className="subscribe-form">
                  <form
                    id="mc-embedded-subscribe-form"
                    className="validate"
                    noValidate=""
                    target="_blank"
                    name="mc-embedded-subscribe-form"
                    method="post"
                    action="#"
                  >
                    <div id="mc_embed_signup_scroll" className="mc-form">
                      <input
                        className="email"
                        type="email"
                        required=""
                        placeholder="Your E-mail Address"
                        name="EMAIL"
                        defaultValue=""
                      />
                      <div className="mc-news" aria-hidden="true">
                        <input
                          type="text"
                          defaultValue=""
                          tabIndex={-1}
                          name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"
                        />
                      </div>
                      <div className="clear">
                        <input
                          id="mc-embedded-subscribe"
                          className="button"
                          type="submit"
                          name="subscribe"
                          defaultValue="SUBMIT"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom pt-15 pb-15">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 col-md-12">
            <div className="copyright">
              <p>
                Made by <a href="https://bilimtechnologies.com">Bilim Technologies</a>
              </p>
            </div>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="footer-menu-social">
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="#">Privecy &amp; Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions of Use</a>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
    )
}
