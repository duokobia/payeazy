/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from "react";
import IndividualForm from "../../components/forms/individualForm";
import CompanyForm from "../../components/forms/companyForm";

function GetDemoForms() {
  const [individualSignup, setIndividualSignup] = useState(true);

  const handleSwitchingOfForms = (val) => {
    setIndividualSignup(val);
  };
  return (
    <>
      {individualSignup ? (
        <IndividualForm toggleIndividualForm={handleSwitchingOfForms} />
      ) : (
        <CompanyForm toggleCompanyForm={handleSwitchingOfForms} />
      )}
    </>
  );
}

export default GetDemoForms;
