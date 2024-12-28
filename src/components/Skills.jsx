import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div className="text-center">
        <h3 className="fw-bold">-Technical Skills</h3>
      </div>

      {/* Technical Skills Grid */}
      <div className="container mt-5">
        {/* First Row (5 Skills Centered on Larger Screens, 2 per row on Phones) */}
        <div className="row justify-content-center g-4">
          <div className="col-6 col-md-4 col-lg-2 text-center">
            <div className="border icon-card p-2 bg-light">
              <img
                width="90"
                height="90"
                src="https://img.icons8.com/color/48/html-5--v1.png"
                alt="html-5--v1"
              />
              <p>HTML</p>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2 text-center">
            <div className="border icon-card p-2 bg-light">
              <img
                width="90"
                height="90"
                src="https://img.icons8.com/color/48/css3.png"
                alt="css3"
              />
              <p>CSS</p>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2 text-center">
            <div className="border icon-card p-2 bg-light">
              <img
                width="90"
                height="90"
                src="https://img.icons8.com/color/48/javascript--v1.png"
                alt="javascript--v1"
              />
              <p>JavaScript</p>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2 text-center">
            <div className="border icon-card p-2 bg-light">
              <img
                width="90"
                height="90"
                src="https://img.icons8.com/ios/50/react-native.png"
                alt="react-native"
              />
              <p>React</p>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2 text-center">
            <div className="border icon-card p-2 bg-light">
              <img
                width="90"
                height="90"
                src="https://img.icons8.com/color/48/bootstrap--v2.png"
                alt="bootstrap--v2"
              />
              <p>Bootstrap</p>
            </div>
          </div>
        </div>

        {/* Second Row (3 Skills Centered on Larger Screens, 2 per row on Phones) */}
        <div className="row justify-content-center g-4 mt-4">
          <div className="col-6 col-md-4 col-lg-2 text-center">
            <div className="border icon-card p-2 bg-light">
              <img
                width="90"
                height="90"
                src="https://img.icons8.com/color/48/nodejs.png"
                alt="Node.js"
              />
              <p>Node.js</p>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2 text-center">
            <div className="border icon-card p-2 bg-light">
              <img
                width="90"
                height="90"
                src="https://img.icons8.com/color/48/mongo-db.png"
                alt="mongo-db"
              />
              <p>MongoDB</p>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-2 text-center">
            <div className="border icon-card p-2 bg-light">
              <img
                width="90"
                height="90"
                src="https://img.icons8.com/fluency/48/github.png"
                alt="github"
              />
              <p>GitHub</p>
            </div>
          </div>
        </div>
      </div>

      {/* Else than Coding Section */}
      <div className="text-center mt-5">
        <h3 className="fw-bold">-Else than Coding..</h3>
        <p className="p-3 fs-5">
          When I'm not coding, I enjoy playing sports, particularly cricket, and
          exploring my interest in video editing as a creative outlet.
        </p>
      </div>
    </>
  );
};

export default Skills;
