import React from "react";
import Header from "../../components/header";
import Payroll from "../../components/payroll";

function LandingSection() {
  return (
    <section className="landingSection-container container-fluid">
      <Header />
      <Payroll />
    </section>
  );
}

export default LandingSection;
