/* eslint-disable no-console */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from "react";
import IndividualForm from "../../components/forms/individualForm";
import CompanyForm from "../../components/forms/companyForm";

function GetDemoForms() {
  const [individualSignup, setIndividualSignup] = useState(true);

  // const showIndividualForm = () => {
  //   setIndividualSignup(true);
  //   console.log("individualSignupvale", individualSignup);
  // };
  // const showCompanyForm = () => {
  //   setIndividualSignup(false);
  //   console.log("companySignupvale", individualSignup);
  // };
  const handleSwitchingOfForms = (val) => {
    console.log("val", val);
    setIndividualSignup(val);
  };
  return (
    <>
      {individualSignup ? (
        <IndividualForm toggleForm={handleSwitchingOfForms} />
      ) : (
        <CompanyForm toggleForm={handleSwitchingOfForms} />
      )}
    </>
  );
}

export default GetDemoForms;
