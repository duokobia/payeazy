import React from "react";

function Footer() {
  return (
    <footer className="container-fluid d-flex align-items-center justify-content-center flex-row border py-5">
      <div className="row my-5">
        <div className="col-3">
          <h1>Payeazy</h1>
          <p>copyright@ 2023 Payeazy</p>
          <p>All right reserved</p>
          <div>
            <span>Instagram</span>
            <span>Twitter</span>
            <span>Linkedin</span>
            <span>Facebook</span>
          </div>
        </div>
        <div className="col-2">
          <ul className="list-unstyled">
            <li>Product</li>
            <li>Individual</li>
            <li>Businesses</li>
            <li>Request Demo</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="col-2">
          <ul className="list-unstyled">
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
        <div className="col-2">
          <ul className="list-unstyled">
            <li>Resources</li>
            <li>FAQs</li>
            <li>Blog</li>
            <li>Career</li>
            <li>Customer Stories</li>
          </ul>
        </div>
        <div className="col-3">
          <ul className="list-unstyled">
            <li>Contact us</li>
            <li>payeazy@gmail.com</li>
            <li>+2340700000000</li>
          </ul>
          <input />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
