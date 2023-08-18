import React from "react";
// import { Link } from "react-router-dom";

function CompanyForm(props) {
  // eslint-disable-next-line no-console
  console.log("companyform", props);
  function xyz() {
    props.toggleForm(true);
  }
  return (
    <section>
      <form className="getDemo-form col-12 p-5">
        <div className="row pb-2">
          <h3 className="getDemo-form-header fw-bold">First things first</h3>
          <p className="getDemo-form-parag text-blackishgreen">
            We want to serve you better. Tell us a bit about yourself or company
          </p>
        </div>
        <div className="row">
          <div className="py-2">
            <div className="getDemo-form-duo-btns row d-flex align-items-center justify-content-center">
              <button
                type="button"
                onClick={props.toggleForm(true)}
                className="getDemo-form-duo-btn col">
                {/* <Link
                  to={{}}
                  // onClick={props.toggleForm}
                  className="text-warning"
                  role="button"> */}
                Individual
                {/* </Link> */}
              </button>{" "}
              <button
                type="button"
                onClick={xyz}
                className="getDemo-form-duo-btn col">
                {/* <Link
                  to={{}}
                  // onClick={props.toggleForm}
                  className="text-warning"
                  role="button"> */}
                Company
                {/* </Link> */}
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
    </section>
  );
}

export default CompanyForm;
