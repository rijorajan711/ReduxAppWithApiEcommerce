import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="mt-5 bg:black">
      <div
        style={{ width: "100%", height: "300px" }}
        className="d-flex flex-column justify-content-center align-items-center flex-wrap"
      >
        <div
          style={{ width: "100%" }}
          className="d-flex justify-content-evenly mb-5 flex-wrap"
        >
          <div style={{ width: "400px" }} className="wesite">
            <Link to="/" style={{ textDecoration: "none" }}>
              <i className="fa-solid fa-cloud-arrow-up"></i> E-Commerce
            </Link>
            <p style={{ textAlign: "justify" }}>
              Media is the very source of mass communication. Media plays the
              most informative role in our society. It is the main thing of mass
              communication. It has various forms, such as the internet, through
              which we can get updated news about the world in our grab just
              with a click of a finger.
            </p>
          </div>
          <div className="Link d-flex flex-column justify-content-evenly flex-wrap">
          <p className="fs-5 fw-bold">Link</p>
            <Link to="/" style={{ textDecoration: "none" }}>
              landing page
            </Link>
            <Link to="/home" style={{ textDecoration: "none" }}>
              Home
            </Link>
            <Link to="/watch_history" style={{ textDecoration: "none" }}>
              History
            </Link>
          </div>
          <div className="guids d-flex flex-column justify-content-evenly flex-wrap">
                <p className="fs-5 fw-bold">Guids</p>
            <Link
              to="https://legacy.reactjs.org/docs/getting-started.html"
              style={{ textDecoration: "none" }}
            >
              React
            </Link>
            <Link
              to="https://react-bootstrap.netlify.app"
              style={{ textDecoration: "none" }}
            >
              Bootstrap
            </Link>
            <Link
              to="https://fontawesome.com/"
              style={{ textDecoration: "none" }}
            >
              Fontawesome
            </Link>
            <Link
              to="https://www.npmjs.com/package/react-router-dom"
              style={{ textDecoration: "none" }}
            >
              react-router-dom
            </Link>
          </div>
          <div className="contact">
          <p className="fs-5 fw-bold">Contact</p>
            <div className="d-flex gap-2">
              <input className="form-control" placeholder="Email"></input>
              <button className="btn btn-primary">Submit</button>
            </div>
            <div className="fs-5 d-flex gap-5 mt-5 flex-wrap">
              <Link
                style={{ color: "white" }}
                to="https://github.com/rijorajan711"
              >
                <i className="fa-brands fa-github"></i>
              </Link>
              <Link
                style={{ color: "white" }}
                to="https://github.com/rijorajan711"
              >
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link
                style={{ color: "white" }}
                to="https://github.com/rijorajan711"
              >
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link
                style={{ color: "white" }}
                to="https://github.com/rijorajan711"
              >
                <i className="fa-brands fa-google"></i>
              </Link>
              <Link
                style={{ color: "white" }}
                to="https://github.com/rijorajan711"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </Link>
            </div>
          </div>
        </div>
        <p>
          If you are a real human being, never break promises, trust and heart
          in your relationships
        </p>
      </div>
    </div>
  );
}

export default Footer;

