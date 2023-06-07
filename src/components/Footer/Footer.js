import React from "react";
import "./Style.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h3 className="footer-heading">Luxe<span>Malbus</span></h3>
            <p className="footer-description">
              <strong>Malbus</strong> MALBUS derived from urdu word "malboos" the plural of libas which means cloth/clothing. Indeed we all need to cover ourselves as per the directives of Allah (SWT) but unfortunately in today's world this concept has started to vanish so identifying the gap now a days to dress with modesty gave birth to MALBUS.
            </p>
            <div className="footer-icons">
              <a href="#" className="footer-icon">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="footer-icon">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" className="footer-icon">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#" className="footer-icon">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="footer-icon">
                <i className="fa fa-youtube"></i>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Message From the CEO</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3 className="footer-heading">Contact Info</h3>
            <ul className="footer-contact">
              <li><i className="fa fa-map-marker"></i>Abbottabad, Pakistan</li>
              <li><i className="fa fa-phone"></i>+92 3365613777</li>
              <li><i className="fa fa-envelope"></i>
              <a href="mailto:sagar00001.co@gmail.com" style={{color: "white"}}>malbus@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">
          &copy; © 2012 - 2023 Malbus All Rights Reserved. | Designed by laiba
        </p>
      </div>
    </footer>
  );
};

export default Footer;

