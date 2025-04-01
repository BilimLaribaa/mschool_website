export default function AboutUsSection() {
    return (
        <div className="about-us pt-130 pb-130">
        <div className="container">
          <div className="section-title-3 section-shape-hm2-1 text-center mb-100">
            <h2>
              About <span>Us</span>
            </h2>
            <p>
              Welcome to MS School - Where Islamic Values Meet Academic Excellence. <br />
              Nurturing hearts and minds through faith-based education.
            </p>
          </div>
          <div className="row align-items-center">
          <div class="col-lg-6 col-md-12">
                <div class="about-img about-img-2  mr-70">
                    <img src="./aboutimg.jpg" alt=""/>
                    
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="about-content-2 pr-70">
                <p>
                MS School is a distinguished Islamic educational institution committed to nurturing the hearts and minds of young learners through a balanced integration of religious values and modern academic excellence. Established under the guidance of Salam Educational and Other Welfare Society, MS School is more than just a place of learning—it is a space where children grow into morally upright, intellectually equipped, and spiritually aware individuals.
                </p>
                <p>
With a carefully designed curriculum that merges Islamic Studies with contemporary subjects like Mathematics, Science, English, and Social Sciences, we prepare students to excel in both duniya and aakhirah. Our dedicated faculty, nurturing environment, and value-based education system make MS School a trusted name in holistic child development.
                </p>
                
                {/* <div className="about-btn mt-45">
                  <a className="default-btn" href="about-us.html">
                    ABOUT US
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
