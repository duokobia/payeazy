import React from "react";

function GetDemo() {
  return (
    <section className="getDemo-container container d-flex align-items-center justify-content-center flex-row my-5 py-5">
      {/* <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAA…g9NsDod8eCP32QOi3B0L/J/0e9wN06zjaAAAAAElFTkSuQmCC"
        alt="getDemo-dots"
        className="getDemo-dots"
      /> */}
      <div className="row">
        <article className="col-6">
          <div className="d-flex invisible" style={{ height: "290px" }}>
            <div className="vr" />
          </div>
          <div className="row d-flex align-items-center justify-content-center">
            <h2 className="salary-heading fw-bold pb-5">
              Get an Exclusive Demo of PayEazy
            </h2>
            <span className="d-inline-block text-blackishgreen fs-4 pb-2">
              Our greatest priority is to put you and your business
            </span>
            <span className="d-inline-block text-blackishgreen fs-4 pb-2">
              first. Let&apos;s show you how we can help.
            </span>
          </div>
        </article>
        <form className="getDemo-form col-6 p-5">
          <div className="row pb-2">
            <h3 className="getDemo-form-header fw-bold">First things first</h3>
            <p className="getDemo-form-parag text-blackishgreen">
              We want to serve you better. Tell us a bit about yourself or
              company
            </p>
          </div>
          <div className="row">
            <div className="py-2">
              <div className="getDemo-form-duo-btns row d-flex align-items-center justify-content-center">
                <button type="button" className="getDemo-form-duo-btn col">
                  Individual
                </button>{" "}
                <button type="button" className="getDemo-form-duo-btn col">
                  Company
                </button>
              </div>
              <input
                className="form-control my-4"
                type="text"
                placeholder="First Name"
                aria-label="default input example"
              />
              <input
                className="form-control my-4"
                type="text"
                placeholder="Last Name"
                aria-label="default input example"
              />
              <input
                className="form-control my-4"
                type="text"
                placeholder="Email"
                aria-label="default input example"
              />
              <input
                className="form-control my-4"
                type="text"
                placeholder="Job Title"
                aria-label="default input example"
              />
              <input
                className="form-control my-4"
                type="text"
                placeholder="Company Name"
                aria-label="default input example"
              />
              <input
                className="form-control my-4"
                type="text"
                placeholder="Company Size"
                aria-label="default input example"
              />
              <button
                type="button"
                className="getDemo-form-request-btn rounded-pill w-100">
                Request Demo
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default GetDemo;
