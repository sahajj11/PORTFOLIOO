import React from "react";
import resume from "./resumep.jpeg"
import pdf from "./portpdf.pdf"
import { useNavigate } from "react-router";

const Resume = () => {

  const navigate=useNavigate()
  return (
    <>

<button className="back-button" onClick={() => navigate("/")}>
        Back
      </button>



<section className="container text-center my-5" id="resume">
      <h2 className="mb-4">My Resume</h2>

      {/* Resume Image */}
      <div className="d-flex justify-content-center">
        <img
          src={resume} // Replace with the path to your resume image
          alt="My Resume"
          className="img-fluid border rounded shadow"
          style={{ maxWidth: "80%", height: "auto" }}
        />
      </div>

      {/* Download Button */}
      <div className="mt-4">
        <a
          href={pdf} // Path to your resume PDF
          download
          className="btn btn-success btn-lg"
        >
          Download Resume
        </a>
      </div>
    </section>
    </>
    
  );
};

export default Resume;
