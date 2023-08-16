import React from "react";

function GetDemo() {
  return (
    <section className="container-fluid d-flex align-items-center justify-content-center flex-row border py-5">
      <div className="row my-5">
        <article className="col-6">
          <h1>Get an Exclusive Demo of PayEazy</h1>
          <p>
            Our greatest priority is to put you and your business first.
            Let&apos;s show you how we can help.
          </p>
        </article>
        <form className="col-6 border border-secondary rounded p-5">
          <h2>First things first</h2>
          <p>
            We want to serve you better. Tell us a bit about yourself or company
          </p>
          <div>
            <button type="button" className="btn btn-success rounded-pill">
              Individual
            </button>{" "}
            <button type="button" className="btn btn-success rounded-pill">
              Company
            </button>
            <input
              className="form-control my-3"
              type="text"
              placeholder="Default input"
              aria-label="default input example"
            />
            <input
              className="form-control my-3"
              type="text"
              placeholder="First Name"
              aria-label="default input example"
            />
            <input
              className="form-control my-3"
              type="text"
              placeholder="Last Name"
              aria-label="default input example"
            />
            <input
              className="form-control my-3"
              type="text"
              placeholder="Email"
              aria-label="default input example"
            />
            <input
              className="form-control my-3"
              type="text"
              placeholder="Job Title"
              aria-label="default input example"
            />
            <input
              className="form-control my-3"
              type="text"
              placeholder="Company Size"
              aria-label="default input example"
            />
            <button type="button" className="btn btn-success rounded-pill">
              Request Demo
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default GetDemo;
