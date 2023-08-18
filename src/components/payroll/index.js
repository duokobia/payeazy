import React from "react";
import AppleCard from "../cards/applecard";
import GoogleCard from "../cards/googlecard";

function Payroll() {
  return (
    <section className="payroll-container container d-flex align-items-center justify-content-between flex-row">
      <div className="row">
        <article className="col-6">
          <h2 className="payroll-heading fw-bold">
            <span className="d-inline-block">
              <span className="pe-3 text-blackishgreen">Run your</span>
              <span className="text-payeazy-green">payroll</span>
            </span>
            <span className="d-inline-block">
              <span className="pe-3 text-beige">easily</span>
              <span className="pe-3 text-blackishgreen">in</span>
              <span className="text-strawberry">seconds</span>
            </span>
          </h2>
          <p className="fs-5 text-secondary py-3">
            <span className="d-block">
              We&apos;ve built an all-inclusive simple solution for individual
            </span>
            <span className="d-block">
              and businesses to manage staff, pay salaries, bills and
            </span>
            <span className="d-block">relevant taxes all at once.</span>
          </p>
          <button
            type="button"
            className="btn btn-success btn-shadow rounded-pill mb-5 px-5 py-3 fs-5">
            Start Using Free, Forever
          </button>
          <div className="col-8 d-flex align-items-start justify-content-between flex-column mt-5">
            <p className="mb-4 fs-5">Download the Payeasy App</p>
            <div className="d-flex align-items-center justify-content-center gap-4 flex-row">
              <AppleCard />
              <GoogleCard />
            </div>
          </div>
        </article>
        <img className="col-6" src="" alt="payroll-hero" />
        <div className="payroll-wave">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none">
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Payroll;
