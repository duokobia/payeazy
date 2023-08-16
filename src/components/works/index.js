import React from "react";

function Works() {
  return (
    <section className="container-fluid d-flex align-items-center justify-content-center flex-column border py-5">
      <div className="row my-5">
        <h1>How PayEazy Works</h1>
        <p>Get started in 3 simple steps.</p>
      </div>
      <div className="row my-5">
        <img className="col-6" alt="works-hero" />
        <article className="col-6">
          <div>
            <button>1</button>
            <h3>Create your free account</h3>
            <p>Click here to set up your Payeazy account.</p>
          </div>
          <div>
            <button>2</button>
            <h3>Add Employee Data</h3>
            <p>Your employee information is 100% safe and secure.</p>
          </div>
          <div>
            <button>3</button>
            <h3>Prepare your Transaction</h3>
            <p>Run payroll: Bulk Salaries and Compliance are done at once!</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Works;
