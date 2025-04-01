export default function Slider() {
    return (
        <div className="slider-area">
        <div className="slider-active owl-carousel">
          <div
            className="single-slider slider-height-2 bg-img align-items-center d-flex slider-overlay2-1 default-overlay"
            style={{ backgroundImage: "url(mschoolbg.jpg)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-12 col-sm-12">
                  <div className="slider-content slider-content-2 slider-animated-2 text-center">
                    <h1 className="animated">Welcome to MS School</h1>
                    <p className="animated">
                      Discover a unique educational experience where Islamic values and academic excellence 
                      come together. At MS School, we nurture both the minds and hearts of our students,
                      preparing them for success in this world and the hereafter.
                    </p>
                    <div className="slider-btn">
                      <a
                        className="animated default-btn btn-green-color"
                        href="about-us.html"
                      >
                        ABOUT US
                      </a>
                      <a
                        className="animated default-btn btn-white-color"
                        href="contact.html"
                      >
                        CONTACT US
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="single-slider slider-height-2 align-items-center d-flex bg-img slider-overlay2-2 default-overlay"
            style={{ backgroundImage: "url(mschoolbg2.jpg)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-12 col-sm-12">
                  <div className="slider-content slider-content-2 slider-animated-2 text-center">
                    <h1 className="animated">Excellence in Education</h1>
                    <p className="animated">
                      Our comprehensive curriculum integrates Islamic studies with modern academics,
                      fostering critical thinking and moral character. Join us in building a
                      foundation for lifelong learning and spiritual growth.
                    </p>
                    <div className="slider-btn">
                      <a
                        className="animated default-btn btn-green-color"
                        href="about-us.html"
                      >
                        ABOUT US
                      </a>
                      <a
                        className="animated default-btn btn-white-color"
                        href="contact.html"
                      >
                        CONTACT US
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="single-slider slider-height-2 align-items-center d-flex bg-img slider-overlay2-3 default-overlay"
            style={{ backgroundImage: "url(assets/img/slider/slider-4.jpg)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-12 col-sm-12">
                  <div className="slider-content slider-content-2 slider-animated-2 text-center">
                    <h1 className="animated">Building Future Leaders</h1>
                    <p className="animated">
                      At MS School, we empower students with knowledge, values, and leadership skills.
                      Our dedicated faculty and supportive environment ensure every student reaches
                      their full potential while maintaining strong Islamic principles.
                    </p>
                    <div className="slider-btn">
                      <a
                        className="animated default-btn btn-green-color"
                        href="about-us.html"
                      >
                        ABOUT US
                      </a>
                      <a
                        className="animated default-btn btn-white-color"
                        href="contact.html"
                      >
                        CONTACT US
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
