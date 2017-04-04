import React from 'react'

export default (props) => {
  return (
    <footer className="main">
      <div className="container-fluid main-container">
        <div className="home-footer">
            <div className="home-wrapper">
                <div className="row">
                    <div className={"col-xs-6 col-sm-6 col-md-3 col-lg-3"}>
                        <div className={"osLight footer-header"}>Company</div>
                        <ul className="footer-nav pb20">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Policies</a></li>
                            <li><a href="#">Terms & Privacy</a></li>
                        </ul>
                    </div>
                    <div className={"col-xs-6 col-sm-6 col-md-3 col-lg-3"}>
                        <div className={"osLight footer-header"}>Discover</div>
                        <ul className={"footer-nav pb20"}>
                            <li><a href="#">Become a Member</a></li>
                            <li><a href="/products">Products</a></li>
                            <li><a href="#">Sign In</a></li>
                        </ul>
                    </div>
                    <div className={"col-xs-12 col-sm-6 col-md-3 col-lg-3"}>
                        <div className={"osLight footer-header"}>Get in Touch</div>
                        <ul className={"footer-nav pb20"}>
                            <li className="footer-phone"><span class="fa fa-phone"></span> 800 234 67 89</li>
                            <li className={"footer-address osLight"}>
                                <p>516 Green St</p>
                                <p>San Francisco, CA 94133</p>
                                <p>United States</p>
                            </li>
                            <li>
                              <a href="#" className={"btn btn-sm btn-icon btn-round btn-o btn-white"}><span className={"fa fa-facebook"}></span></a>
                              <a href="#" className={"btn btn-sm btn-icon btn-round btn-o btn-white"}><span className={"fa fa-twitter"}></span></a>
                              <a href="#" className={"btn btn-sm btn-icon btn-round btn-o btn-white"}><span className={"fa fa-google-plus"}></span></a>
                              <a href="#" className={"btn btn-sm btn-icon btn-round btn-o btn-white"}><span className={"fa fa-linkedin"}></span></a>
                            </li>
                        </ul>
                    </div>
                    <div className={"col-xs-12 col-sm-6 col-md-3 col-lg-3"}>
                        <div className={"osLight footer-header"}>Subscribe to Our Newsletter</div>
                        <form role="form">
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email Address" />
                            </div>
                            <div className="form-group">
                                <a href="#" className={"btn btn-green btn-block"}>Subscribe</a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="copyright">9stock &copy; 2017 <br/> All rights reserved</div>
            </div>
        </div>
      </div>
    </footer>
  )
}
