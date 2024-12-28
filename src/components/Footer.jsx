import React from "react";

const Footer = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        {/* Instagram */}
        <div className="col-12 col-md-3 mb-3">
          <a
            className="text-decoration-none text-black d-flex align-items-center gap-2"
            href="https://www.instagram.com/developerr_here/"
          >
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/3d-fluency/94/instagram-logo.png"
              alt="instagram-logo"
            />
            <span>developerr_here</span>
          </a>
        </div>

        {/* LinkedIn */}
        <div className="col-12 col-md-3 mb-3">
          <a
            className="text-decoration-none text-black d-flex align-items-center gap-2"
            href="https://www.linkedin.com/in/sahaj-rajput"
          >
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/linkedin.png"
              alt="linkedin"
            />
            <span>sahaj rajput</span>
          </a>
        </div>

        {/* GitHub */}
        <div className="col-12 col-md-3 mb-3">
          <a
            className="text-decoration-none text-black d-flex align-items-center gap-2"
            href="https://github.com/sahajj11"
          >
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/ios-glyphs/30/github.png"
              alt="github"
            />
            <span>sahajj11</span>
          </a>
        </div>

        {/* Gmail */}
        <div className="col-12 col-md-3 mb-3">
          <a
            className="text-decoration-none text-black d-flex align-items-center gap-2"
            href="mailto:sahajrajput1112@gmail.com"
          >
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/gmail-new.png"
              alt="gmail-new"
            />
            <span>sahajrajput1112@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
