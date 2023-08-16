import React from "react";

function SalaryAndPayment() {
  return (
    <section className="container-fluid d-flex align-items-center justify-content-center flex-row border py-5">
      <div className="row my-5">
        <article className="col-6">
          <h1>
            <span>Free forever for your </span>
            <span>salary payment</span>
          </h1>
          <div>
            <h3>Subscribe to the PayLife today</h3>
            <button type="button" className="btn btn-success">
              Register
            </button>{" "}
            <button type="button" className="btn btn-success">
              Register
            </button>
          </div>
        </article>
        <img className="col-6" alt="salary-hero" />
      </div>
    </section>
  );
}

export default SalaryAndPayment;
