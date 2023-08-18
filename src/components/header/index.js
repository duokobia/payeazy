import React from "react";

function Header() {
  return (
    <header className="container offset-1 d-flex align-items-baseline justify-content-between flex-row py-4">
      <nav className="col-6 d-flex align-items-baseline justify-content-between flex-row">
        <h1 className="col-3">
          <a href="/" className="header-logo text-decoration-none fw-bold">
            Payeazy
          </a>
        </h1>
        <ul className="col-9 d-flex align-items-center justify-content-between flex-row list-unstyled ps-3">
          <li>
            <a href="/" className="text-decoration-none">
              Individual
            </a>
          </li>
          <li>
            <a href="/" className="text-decoration-none">
              Business
            </a>
          </li>
          <li>
            <a href="/" className="text-decoration-none">
              Pricing
            </a>
          </li>
          <li>
            <a href="/" className="text-decoration-none">
              Set your payroll
            </a>
          </li>
        </ul>
      </nav>
      <div className="col-4 d-flex align-items-center gap-4">
        <button className="my-btn-outline rounded-pill px-5 py-2 ">
          <span className="px-2">Log in</span>
        </button>
        <button
          type="button"
          className="btn btn-shadow btn-success rounded-pill px-5 py-2">
          Register
        </button>
      </div>
    </header>
  );
}

export default Header;
