import React from "react";
import AppleCard from "../cards/applecard";
import GoogleCard from "../cards/googlecard";

function Payroll() {
  return (
    <section className="payroll-container container d-flex align-items-center justify-content-between flex-row py-5">
      <div className="row py-5">
        <article className="col-6 py-5 mt-3">
          <h2 className="payroll-heading">
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
            className="btn btn-success btn-shadow rounded-pill mb-5 px-5 py-2 fs-5">
            Start Using Free, Forever
          </button>
          <div className="col-8 d-flex align-items-start justify-content-between flex-column">
            <p className="mb-4 fs-5">Download the Payeasy App</p>
            <div className="d-flex align-items-center justify-content-center gap-4 flex-row">
              <AppleCard />
              <GoogleCard />
            </div>
          </div>
        </article>
        <img
          className="col-6"
          // src="https://www.myeazipay.com/img/gradients.fdc2f6b1.png"
          src=""
          alt="payroll-hero"
        />
      </div>
    </section>
  );
}

export default Payroll;
