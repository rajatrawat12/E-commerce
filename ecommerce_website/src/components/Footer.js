import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
const Footer = () => {
  const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      <div className="footerNaviagteTopContainer">
        <p className="NaviagateTop" onClick={scrollToTop}>Back to Top</p>
      </div>
      <div className="CustomerInteractionMainDiv">
        <div className="CustomerIntractionContainer mx-auto">
          <div>
            <h5 className="CustomerInteraction">Get to Know Us</h5>
            <p>About Us</p>
            <p>careers</p>
            <p>Press Releases</p>
            <p>Amazon Science</p>
          </div>
          <div>
            <h5 className="CustomerInteraction">Contact with Us</h5>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
          <div>
            <h5 className="CustomerInteraction">Make Money with Us</h5>
            <p>Sell on Amazon</p>
            <p>Sell under Amazon Accelerator</p>
            <p>Protect and build your Brand</p>
            <p>Amazon Global Setting</p>
            <p>Become an Affiliate</p>
            <p>Fullfilment by Amazon</p>
            <p>Advertise Your products </p>
          </div>
          <div>
            <h5 className="CustomerInteraction">Let Us Help You</h5>
            <p>COVID-19 and Amazon</p>
            <p>Your Account</p>
            <p>Return Centre</p>
            <p>100% Purchase Protection</p>
            <p>Amazon App Download</p>
            <p>Help</p>
          </div>
        </div>

        <div className="d-flex justify-content-evenly w-50 mx-auto m-3">
          <img
            className="logoImage"
            src="https://www.taxscan.in/wp-content/uploads/2023/02/Amazon-CA-students-Vacancy-In-Amazo-CA-Vacancy-CA-financial-analyst-intern-financial-intern-vacancy-financial-analyst-inrern-trainee-vacancy-jobscan.jpg"
          />
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{
                background: "transparent",
                border: "1px solid white",
                fontSize: "10px",
                fontWeight: "bold",
              }}
            >
              <img
                className=""
                style={{ height: "25px", width: "25px", marginRight: "10px" }}
                src="https://static.vecteezy.com/system/resources/previews/012/909/514/original/internet-icon-in-black-circle-free-png.png"
              />
              ENGLISH-ENG
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  HINDI-HIN
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  TAMIL-TN
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  TELGU-TG
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className=" d-flex justify-content-between mx-auto p-2"
          style={{
            backgroundColor: "#232f3e",
            color: "#f2f2f2",
            fontWeight: "bold",
            fontSize: "10px",
            width: "80vw",
          }}
        >
          <span>Australia</span>
          <span>Canada</span>
          <span>China</span>
          <span>France</span>
          <span>Germany</span>
          <span>Italy</span>
          <span>Japan</span>
          <span>Mexico </span>
          <span>Neitherlands</span>
          <span>poland</span>
          <span>Singapore</span>
          <span>Spain</span>
          <span>Turkey</span>
          <span>United Kindom</span>
          <span>United states</span>
          <span>United arab Emirates</span>
        </div>
      </div>
    </>
  );
};
export default Footer;
