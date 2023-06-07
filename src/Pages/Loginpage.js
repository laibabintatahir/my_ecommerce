import React, { useState } from "react";
import LoginForm from "../components/login/Login";
import SignupForm from "../components/login/Signup";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Loginpage = () => {
  const [formType, setFormType] = useState("login");

  const handleFormSwitch = (type) => {
    setFormType(type);
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
        <LoginForm onFormSwitch={handleFormSwitch} />
      ) : (
        <SignupForm onFormSwitch={handleFormSwitch} />
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
