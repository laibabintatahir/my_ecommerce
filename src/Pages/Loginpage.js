import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/login/Login";
import SignupForm from "../components/login/Signup";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Loginpage = () => {
  const navigate = useNavigate();
  const [formType, setFormType] = useState("login");

  const handleFormSwitch = (type) => {
    setFormType(type);
  };

  const handleLogin = () => {
    navigate("/"); 
  };

  const handleSignup = () => {
    navigate("/"); 
  };

  return (
    <div>
      <Header />
      <div>
        <br />
        <br />
        <br />
      </div>

      {formType === "login" ? (
        <LoginForm onFormSwitch={handleFormSwitch} onLogin={handleLogin} />
      ) : (
        <SignupForm onFormSwitch={handleFormSwitch} onSignup={handleSignup} />
      )}

      <div>
        <br />
        <br />
        <br />
      </div>

      <Footer />
    </div>
  );
};

export default Loginpage;

