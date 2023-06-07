import "./App.css";
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
// import Login from "./components/Login";

function App() {
  return (
    <div>
       <Routes>

       
        <Route exact path="/" element={<BlogPage/>} />
        <Route path="/blog/:id" element={<DetailedBlog/>} />

      </Routes>
      {/* <Login/> */}
      <Abaya />
      <Hijabs/>
     {/* <AboutUsPage/> */}
      <Acessories />
      {/* <ContactUs/> */}
      <Footer/>
    </div>
  );
}

export default App;
