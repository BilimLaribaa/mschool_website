export default function Header() {
    return (
        <header className="header-area">
    <div
      className="header-top bg-img"
      style={{ backgroundImage: "url(assets/img/icon-img/header-shape.png)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7 col-12 col-sm-8">
            <div className="header-contact">
              <ul>
                <li>
                  <i className="fa fa-phone" /> +98 558 547 589
                </li>
                <li>
                  <i className="fa fa-envelope-o" />
                  <a href="#">education@email.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-5 col-12 col-sm-4">
     
          </div>
        </div>
      </div>
    </div>
    <div className="header-bottom sticky-bar clearfix">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-6 col-4">
            <div className="logo m-0">
              <a href="/">
                <img alt="" src="./logo-verticle.png" style={{width: "220px"}}/>
              </a>
            </div>
          </div>
          <div className="col-lg-10 col-md-6 col-8">
            <div className="menu-cart-wrap">
              <div className="main-menu">
                <nav>
                  <ul>
                    <li>
                      <a href="/">HOME</a>
                    </li>
                    <li>
                      <a href="about">ABOUT</a>
                    </li>
                    <li>
                      <a href="gallery">GALLERY</a>
                    </li>
                    <li>
                      <a href="contact">CONTACT US</a>
                    </li>
                  </ul>
                </nav>
              </div>
             
            </div>
          </div>
        </div>
        <div className="mobile-menu-area">
          <div className="mobile-menu">
            <nav id="mobile-menu-active">
              <ul className="menu-overflow">
                <li>
                  <a href="/">HOME</a>
                </li>
                <li>
                  <a href="about">ABOUT</a>
                </li>
                <li>
                  <a href="gallery">GALLERY</a>
                </li>
                <li>
                  <a href="contact">CONTACT US</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
    );
}
