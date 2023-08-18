import React from "react";

function Works() {
  return (
    <section className="container-fluid d-flex align-items-center justify-content-center flex-column py-5">
      {/* <div className="indAndBiz-wave">
        <svg
          data-name="Layer 2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          />
        </svg>
      </div> */}
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
