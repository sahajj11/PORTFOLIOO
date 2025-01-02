import React from "react";
import myImage from "./pic 3.png";
import photo from "./photo.png"
import "./Hero.css"
import portp from "./port_pic.png"
import final from "./final-removebg-preview.png"
import { SplitText } from "./SplitText";

const Hero = () => {
  return (
    <>
      <div className="hero  d-flex  justify-content-center align-items-center">
        
        <div className="text-container  p-2 mt-5 ml-3">
          <p className="fw-bold display-1 text-center">Hello!</p>
          {/* <p className="display-1 fw-bold text-center sah">Sahaj Rajput Here</p> */}
          <SplitText text="Sahaj Rajput Here" className="custom-class display-1 fw-bold text text-center sah" delay={90} />
          <p className="display-5 mt-3 text-center">
            Full Stack Web Developer
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/laptop--v1.png"
              alt="laptop--v1"
            />
          </p>
        </div>

        
        <div className="image-container p-3 d-none d-md-block ">
          <img src={final} alt="Hero" style={{ maxWidth: "80%", height: "auto" }} />
        </div>
      </div>
    </>
  );
};

export default Hero;
