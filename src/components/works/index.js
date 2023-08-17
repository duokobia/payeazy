import React from "react";

function Works() {
  return (
    <section className="container-fluid d-flex align-items-center justify-content-center flex-column py-5">
      <div className="row my-5">
        <h2 className="works-heading fw-bold pb-3">How PayEazy Works</h2>
        <p className="works-caption">Get started in 3 simple steps.</p>
      </div>
      <div className="row my-5">
        <img className="col-6" alt="works-hero" />
        <article className="col-6 d-flex align-items-center justify-content-center flex-row">
          <nav className="col-4 px-4">
            <ul className="list-unstyled">
              <li className="navBtn px-3 my-5">
                <a
                  href="/"
                  className="text-decoration-none text-white fw-bold my-5">
                  1
                </a>
              </li>
              <li className="navBtn px-3 my-5">
                <a
                  href="/"
                  className="text-decoration-none text-white fw-bold my-5">
                  2
                </a>
              </li>
              <li className="navBtn px-3 my-5">
                <a
                  href="/"
                  className="text-decoration-none text-white fw-bold my-5">
                  3
                </a>
              </li>
            </ul>
          </nav>
          <div className="col-8 d-flex align-items-center justify-content-center flex-column text-blackishgreen">
            <div className="row my-3">
              <div className="col-12">
                <h4 className="text-blackishgreen">Create your free account</h4>
                <p>Click here to set up your Payeazy account.</p>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-12">
                <h4 className="text-blackishgreen">Add Employee Data</h4>
                <p>Your employee information is 100% safe and secure.</p>
              </div>
            </div>
            <div className="row my-3">
              <div className="col-12">
                <h4 className="text-blackishgreen">Prepare your Transaction</h4>
                <p>
                  Run payroll: Bulk Salaries and Compliance are done at once!
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Works;
