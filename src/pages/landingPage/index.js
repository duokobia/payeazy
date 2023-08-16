import React from "react";
import Header from "../../components/header";
import Payroll from "../../components/payroll";
import IndAndBusiness from "../../components/indAndBusiness";
import Works from "../../components/works";
import SalaryAndPayment from "../../components/salaryAndPayment";
import GetDemo from "../../components/getDemo";
import Footer from "../../components/footer";

function LandingPage() {
  return (
    <>
      <Header />
      <Payroll />
      <IndAndBusiness />
      <Works />
      <SalaryAndPayment />
      <GetDemo />
      <Footer />
    </>
  );
}

export default LandingPage;
