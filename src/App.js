import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Hijabs from "./components/Products/Hijabs";
import Acessories from "./components/Products/Acessories";
import BlogPage from "./components/Blogs/Blogpage";
import Abaya from "./components/Products/Abayas";
import DetailedBlog from "./components/Blogs/Detailedblog";
import BlogItem from "./components/Blogs/Blogitem";
import ContactUs from "./components/Contactus/ContactUs";
import Footer from "./components/Footer/Footer";
import AboutUsPage from "./components/Aboutus/Aboutus";
import LoginForm from "./components/login/Login";
import SignupForm from "./components/login/Signup";
import Header from "./components/Header/Header";
import Home from "./Pages/Home";

import Abayapage from "./Pages/Abayapage";
import Hijabpage from "./Pages/Hijabpage";
import  Accessoriespage from "./Pages/Accessoriespage";
import Aboutpage from "./Pages/Aboutpage";
import Contactpage from "./Pages/Contactpage";

const App = () => {
  // const [formType, setFormType] = useState("login");

  // const handleFormSwitch = (type) => {
  //   setFormType(type);
  // };

  return (
    <div>
      <Routes>

        <Route path="/" element={ <Home/>}/>
        <Route path="/abayapage" element={<Abayapage/> }/>
        <Route path="/hijabs" element={ <Hijabpage/> }/>
        <Route path="/accessories" element={<Accessoriespage/> }/>
        <Route path="/contactus" element={ <Contactpage/>}/>
        <Route path="/aboutus" element={  <Aboutpage/>}/>

      </Routes>
      <br />
      <br />

      {/* {formType === "login" ? (
        <LoginForm onFormSwitch={handleFormSwitch} />
      ) : (
        <SignupForm onFormSwitch={handleFormSwitch} />
      )} */}
      <br />
      <br />

    </div>
  );
};

export default App;
