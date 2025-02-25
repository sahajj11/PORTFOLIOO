import React from "react";
import "./About.css";
import {useNavigate} from "react-router"
import Skills from "../components/Skills";

const About = () => {
  const navigate=useNavigate()
  return (
    <>
    <button className="back-button" onClick={() => navigate("/")}>
        Back
      </button>
      <div className="d-flex justify-content-center">
      <h4 className="border abt mt-4 bg-light text-dark d-inline-block p-2 rounded shadow-sm">
  About Me
</h4>


      </div>

      <div className="info">
        <p className="text-center p-4 fs-5">
          -Hi there! I'm Sahaj Rajput, a MERN Stack Developer with a passion for
          building scalable web applications.I focus on creating seamless user
          experiences, ensuring that web applications are efficient and easy to use.

        </p>
      </div>

      <Skills />

      <div className="end text-center">
          <p>
            Feel free to contact on{" "}
            <a className="text-decoration-none" href="https://www.linkedin.com/in/sahaj-rajput"><span >Linkedln</span></a>
          </p>
        </div>

    </>
  );
};

export default About;
