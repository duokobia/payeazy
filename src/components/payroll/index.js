import React from "react";

function Payroll() {
  return (
    <section className="container-fluid d-flex align-items-center justify-content-center flex-row border py-5">
      <div className="row my-5">
        <article className="col-6">
          <h1>
            <span>Run your</span>
            <span>payroll</span>
            <span>easily</span>
            <span>in</span>
            <span>seconds</span>
          </h1>
          <p>
            We &apos;ve built an all-inclusive simple solution for individual
            and businesses to manage staff, pay salaries, bills and relevant
            taxes all at once.
          </p>
          <button type="button" className="btn btn-success">
            Start Using Free, Forever
          </button>
          <div>
            <h3>Download the Payeasy App</h3>
            <button type="button" className="btn btn-success">
              Register
            </button>{" "}
            <button type="button" className="btn btn-success">
              Register
            </button>
          </div>
        </article>
        <img className="col-6" alt="payroll-hero" />
      </div>
    </section>
  );
}

export default Payroll;
