import React from "react";
import "./Style.css";
import Head from "./Head";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Testimonial from "./Testimonial";
import Footer from "../Footer/Footer";

const Header = () => {
  const categories = [
    {name: "Impressions", image: "images/impressions.jpg", link: "/impressions",
    },
    { name: "Abayas", image: "images/abayas.jpg", link: "/abayas" },
    { name: "Kimonos", image: "images/kimonos1.jpg", link: "/kimonos" },
    { name: "Hijabs", image: "images/h13.jpg", link: "/hijabs" },
  ];

  const Newarrivals = [
    {
      name: "OPULENT CHARM",
      price: "from Rs.6,990.00",
      image: "images/charm.jpg",
    },
    {
      name: "VINTAGE GLAM",
      price: "Rs.12,450.00",
      image: "images/vintageglam.jpg",
    },
    { name: "LUXE", price: "Rs.22,750.00", image: "images/luxe.jpg" },
    { name: "SERENE", price: "Rs.14,250.00", image: "images/serene.jpg" },
  ];
  return (
    <>
      <Head />

      <header>
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img src="images/logo.jpg" alt="Logo" />
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/">ABAYAS</Link>
              </li>
              <li>
                <Link to="/">HIJABS</Link>
              </li>
              <li>
                <Link to="/">ACCESSORIES</Link>
              </li>
              <li>
                <Link to="/">BLOG</Link>
              </li>
              <li>
                <Link to="/">ABOUT US</Link>
              </li>
              <li>
                <Link to="/">CONTACT US</Link>
              </li>
              <li className="cart-icon">
                <Link to="/">
                  <i className="fa fa-shopping-cart"></i>
                </Link>
              </li>
              <li className="user-icon">
                <Link to="/">
                  <i className="fa fa-user"></i>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="banner-container">
        <Carousel autoPlay infiniteLoop showThumbs={false}>
          <div>
            <img src="images/ss1.jpg" alt="Banner 1" />
          </div>
          <div>
            <img src="images/ss1.jpg" alt="Banner 2" />
          </div>
        </Carousel>

        <div className="banner-content">
          <h1>Welcome to our store!</h1>
          <p>Discover the latest fashion trends and shop with us.</p>
          <Link to="/shop" className="banner-button">
            Shop Now
          </Link>
        </div>
      </div>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> <br /> <br />
        <br />
      </div>

      <div style={{ fontSize: "20px" }}>
        <p>
          The Elegance & Modesty, You All Crave For — Pakistan's Only & <br />{" "}
          Largest Modest Attire Brand.
        </p>
      </div>
      <div className="category-section">
        <h2>SHOP BY CATEGORY</h2>
        <ul className="category-list">
          {categories.map((category, index) => (
            <li key={index}>
              <div className="category-item">
                <img src={category.image} alt={category.name} />
                <Link to={category.link} className="category-button">
                  {category.name}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="new-arrivals">
        <h2>NEW ARRIVALS</h2>
        <div className="view-all-section">
          <Link to="/view-all" className="view-all-button">
            View All
          </Link>
        </div>
        <div className="product-list">
          {Newarrivals.map((product, index) => (
            <div className="product" key={index}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      </div>

      <Testimonial />

      <div className="banner">
        <img src="images/malbus1.jpg" alt="Banner" />
        <div className="banner-text">
          <h2>LUXE MALBUS</h2>
          <p>
            Head Office: Plot #2, Industrial Triangle, Humak, Model Town,
            Islamabad
          </p>
          <p>Outlet: Shop # 254, 2nd Floor, The Centaurus Mall, Islamabad</p>
          <p>Monday - Thursday, 11:00 AM (PST) - 11:00 PM (PST)</p>
          <p>Friday - Sunday, 11:00 AM (PST) - 12:00 AM (PST)</p>
        </div>
      </div>
      <div>
        <br />
        <br />
        <br />
        <br />
      </div>

      <Footer/>
    </>
  );
};

export default Header;
