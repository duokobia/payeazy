import React from "react";

function IndividualForm(props) {
  function toggleOn() {
    props.toggleIndividualForm(true);
  }
  function toggleOff() {
    props.toggleIndividualForm(false);
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
                onClick={toggleOn}
                className="getDemo-form-duo-btn col">
                Individual
              </button>{" "}
              <button
                type="button"
                onClick={toggleOff}
                className="getDemo-form-duo-btn col">
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

export default IndividualForm;
