import React from "react";

function Header() {
  return (
    <header className="container d-flex align-items-baseline justify-content-between flex-row border">
      <div className="row">
        <h1 className="col-3">Payeazy</h1>
      </div>
      <nav className="col-6">
        <ul className="d-flex align-items-center justify-content-between flex-row list-unstyled">
          <li>Individual</li>
          <li>Business</li>
          <li>Pricing</li>
          <li>Set your Payroll</li>
        </ul>
      </nav>
      <div className="col-2 offset-1">
        <button type="button" className="btn btn-outline-success">
          Login
        </button>
        <button type="button" className="btn btn-success">
          Register
        </button>
      </div>
    </header>
  );
}

export default Header;
