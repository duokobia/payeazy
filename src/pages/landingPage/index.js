import React from "react";
import LandingSection from "../../sections/landing";
import IndAndBusiness from "../../components/indAndBusiness";
import Works from "../../components/works";
import SalaryAndPayment from "../../components/salaryAndPayment";
import GetDemo from "../../components/getDemo";
import Footer from "../../components/footer";

function LandingPage() {
  return (
    <>
      <LandingSection />
      <IndAndBusiness />
      <Works />
      <SalaryAndPayment />
      <GetDemo />
      <Footer />
    </>
  );
}

export default LandingPage;
