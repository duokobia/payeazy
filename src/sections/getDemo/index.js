import React from "react";
import GetDemoCaption from "../getDemoCaption";
import GetDemoForms from "../getDemoForms";

function GetDemoSection() {
  return (
    <section className="getDemo-container container d-flex align-items-center justify-content-center flex-column my-5 py-5">
      <div className="row">
        <div className="col">
          <GetDemoCaption />
        </div>
        <div className="col">
          <GetDemoForms />
        </div>
      </div>
    </section>
  );
}

export default GetDemoSection;
