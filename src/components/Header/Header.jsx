import React from "react";
import "./Style.css";
import Head from "./Head";
import { Link } from "react-router-dom";

const Header = () => {
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
    </>
  );
};

export default Header;





// import React from "react";
// import { Link } from "react-router-dom";
// import "./Style.css";
// import Head from "./Head";

// const Header = () => {
//   return (
//     <>
//     <Head/>
//     <header>
//       <div className="left-links">
//         <div className="logo">
//           <Link to="/">
//             <img src="images/logo.jpg" alt="Logo" />
//           </Link>
//         </div>
//       </div>
//       <nav>
//         <ul className="center-links">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/products/abayas">Abayas</Link>
//           </li>

//           <li>
//             <Link to="/products/hijabs">Hijabs</Link>
//           </li>
//           <li>
//             <Link to="/products/accessories">Accessories</Link>
//           </li>
//           <li>
//             <Link to="/about">About Us</Link>
//           </li>
//           <li>
//             <Link to="/contact">Contact Us</Link>
//           </li>
//         </ul>
//       </nav>
//       <div className="right-links">
//         <ul>
//           <li className="cart-link">
//             <Link to="/cart">Cart</Link>
//           </li>
//           <li className="login-link">
//             <Link to="/login">Login</Link>
//           </li>
//         </ul>
//       </div>
//     </header>
//     </>
//   );
// };

// export default Header;
