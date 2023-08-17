import React from "react";
import AppleCard from "../cards/applecard";
import GoogleCard from "../cards/googlecard";

function SalaryAndPayment() {
  return (
    <section className="salary-container container-fluid d-flex align-items-center justify-content-center flex-row py-5">
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAA…g9NsDod8eCP32QOi3B0L/J/0e9wN06zjaAAAAAElFTkSuQmCC"
        alt="salary-dots"
        className="salary-dots"
      />
      <div className="row my-5">
        <article className="col-7">
          <h2 className="salary-heading fw-bold pb-5">
            <span className="d-inline-block text-blackishgreen pb-3">
              Free forever for your
            </span>
            <span className="d-inline-block text-strawberry">
              salary payments
            </span>
          </h2>
          <div>
            <h5 className="text-blackishgreen pb-2">
              Subscribe to the PayLife today
            </h5>
            <div className="d-flex align-items-center justify-content-start gap-4 flex-row">
              <GoogleCard />
              <AppleCard />
            </div>
          </div>
        </article>
        <img className="col-5" alt="salary-hero" />
      </div>
    </section>
  );
}

export default SalaryAndPayment;
