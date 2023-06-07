import "./App.css";
import React, { useState } from "react";
import Hijabs from "./components/Hijabs";
import Acessories from "./components/Acessories";
import BlogPage from "./components/Blogpage";
import Abaya from "./components/Abayas";
import DetailedBlog from "./components/Detailedblog";
import BlogItem from "./components/Blogitem";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer/Footer";
import AboutUsPage from "./components/Aboutus/Aboutus";
import LoginForm from "./components/login/Login";
import SignupForm from "./components/login/Signup";

const App = () => {
  const [formType, setFormType] = useState("login");

  const handleFormSwitch = (type) => {
    setFormType(type);
  };

  return (
    <div>
      <br/><br/>
      {formType === "login" ? (
        <LoginForm onFormSwitch={handleFormSwitch} />
      ) : (
        <SignupForm onFormSwitch={handleFormSwitch} />
      )}

      <Abaya />
      <Hijabs />
      {/* <AboutUsPage/> */}
      <Acessories />
      {/* <ContactUs/> */}
      <Footer />
    </div>
  );
};

export default App;
