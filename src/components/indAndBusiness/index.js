import React from "react";

function IndAndBusiness() {
  return (
    <section className="indAndBiz-container container-fluid d-flex align-items-center justify-content-center my-5 py-5">
      <div className="row my-5 py-5">
        <div className="d-flex invisible" style={{ height: "150px" }}>
          <div className="vr" />
        </div>
        <div className="col-12">
          <h2 className="ind-and-biz-heading fw-bold mb-5">
            For Individuals and Businesses
          </h2>
          <p className="ind-and-biz-caption">
            Join 200+ businesses using PayEazi&apos;s solution
          </p>
          <div className="row d-flex align-items-center justify-content-center flex-row ms-5 ps-5 mb-3 py-5">
            <div className="row">
              <card className="notify-card notify-card-1 col-5 p-5">
                <h3 className="fw-bold text-white pb-3">
                  Tamper-proof Payment
                </h3>
                <ul className="list-unstyled">
                  <li className="pb-2">
                    Your staff payroll history is kept in one place forever.
                  </li>
                  <li className="pb-2">
                    No more excel sheet or manual records.
                  </li>
                  <li className="pb-2">
                    Download your payroll history anytime you need it.
                  </li>
                </ul>
              </card>
              <card className="notify-card notify-card-2 col-4 p-5">
                <h3 className="fw-bold text-white pb-3">
                  All Payroll, Anytime
                </h3>
                <ul className="list-unstyled">
                  <li className="pb-2">
                    Wherever you are, Payeazy has got you covered on ALL your
                    Payroll tasks.
                  </li>
                  <li className="pb-2">
                    Whether it is Taxes, Pension insurances HMOs,
                    trustfunds,Payeazy handles all your compliances in one place
                    and easily, in seconds!
                  </li>
                </ul>
              </card>
              <card className="notify-card notify-card-3 col-5 p-5">
                <h3 className="fw-bold text-white pb-3">Payroll in Seconds</h3>
                <ul className="list-unstyled">
                  <li className="pb-2">
                    Never again will you spend more than 2 minutes on payroll.
                  </li>
                  <li className="pb-2">
                    Just click on your staff and bulk-pay that at once.
                  </li>
                  <li className="pb-2">Payment is done permanently</li>
                </ul>
              </card>
            </div>
          </div>
          <p className="d-flex align-items-center justify-content-center flex-row">
            <div className="row">
              <div className="col">
                <span className="d-block">
                  We are happy to answer your queries. Please, reach us at
                </span>
                <span className="d-block">
                  <a href="/" className="text-danger pe-1">
                    hello@mypayeazy.com
                  </a>
                  and expect our response shortly after.
                </span>
              </div>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
}

export default IndAndBusiness;
