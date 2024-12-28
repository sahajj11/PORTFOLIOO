import React from "react";
import { useNavigate } from "react-router";
import proj from "./proj.jpg";
import "./Projects.css"

const Projects = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="projects">

    <button className="back-buttonn" onClick={() => navigate("/")}>
        Back
      </button>

      {/* <div className="d-flex justify-content-center">
        <p className="border abt mt-4 bg-light fs-4 text-dark d-inline-block px-4">
          Projects
        </p>
      </div> */}

      <p className="text-center fs-4 first">cd projects</p>

      <div className="container mt-4">
  <div className="row">
    {/* Card 1 */}
    <div className="col-md-4">
      <div className="card" style={{ width: "100%" }}>
        <img src={proj} className="card-img-top" alt="..." />
        <div className="card-body  st">
          <h5 className="card-title fw-bold t">ReactX</h5>
          <p className="card-text fw-bold bod">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <div className="linkss d-flex gap-4">
          <a href="#" className="linkss fw-bold">Live Demo</a>
          <a href="#" className="linkss fw-bold">GitHub Repo</a>
          </div>
        </div>
      </div>

    </div>

    {/* Card 2 */}
    <div className="col-md-4">
      <div className="card" style={{ width: "100%" }}>
        <img src={proj} className="card-img-top" alt="..." />
        <div className="card-body st">
          <h5 className="card-title fw-bold t">FaceConnect</h5>
          <p className="card-text fw-bold bod">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <div className="linkss d-flex gap-4">
          <a href="#" className="linkss fw-bold">Live Demo</a>
          <a href="#" className="linkss fw-bold">GitHub Repo</a>
          </div>
         
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-md-4">
      <div className="card" style={{ width: "100%" }}>
        <img src={proj} className="card-img-top" alt="..." />
        <div className="card-body st ">
          <h5 className="card-title fw-bold t">StayInn</h5>
          <p className="card-text fw-bold  bod">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <div className="linkss d-flex gap-4">
          <a href="#" className="linkss fw-bold">Live Demo</a>
          <a href="#" className="linkss fw-bold">GitHub Repo</a>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  
    
      
    </>
  );
};

export default Projects;
