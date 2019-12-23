import React, { useState, useEffect } from "react";
import {
  Switch,
  Route,
  useRouteMatch,
  useHistory,
  useLocation
} from "react-router-dom";

import { NameForm } from "../forms/NameForm";
import { EmailForm } from "../forms/EmailForm";
import { TitleandAccessForm } from "../forms/TitleandAccessForm";
import { BusinessIdentifierForm } from "../forms/BusinessIdentifierForm";
import { BusinessIndustryForm } from "../forms/BusinessIndustryForm";
import { BusinessSizeForm } from "../forms/BusinessSizeForm";
import { BusinessAddressForm } from "../forms/BusinessAddressForm";

import { WizardStep } from "../WizardStep";

const styles = {
  backgroundColor: "#ceddce",
  padding: "8px"
};

const hasStep = path => {
  return /step-[1-7]$/.test(path);
};

export const Onboarding = () => {
  const { path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  const [ formData, setFormData ] = useState({});

  useEffect(() => {
    if (!hasStep(location.pathname)) {
      history.push(`${path}/step-1`);
    }
  }, [path, history, location]);

  const nextStep = step => formValues => {
    setFormData({
      ...formData, 
      ...formValues
    });
    history.push(`${path}/step-${(step += 1)}`);
  };

  const prevStep = step => formValues => {
    setFormData({
      ...formData, 
      ...formValues
    });
    history.push(`${path}/step-${(step -= 1)}`)
  };

  return (
    <div style={styles}>
      <h1>Onboarding</h1>
      <div>
        {JSON.stringify(formData, null, 4)}
      </div>
      <Switch>
        <Route path={`${path}/step-1`}>
          <WizardStep title="Step-1">
            <NameForm formKey="names" next={nextStep(1)} formData={formData}/>
          </WizardStep>
        </Route>
        <Route path={`${path}/step-2`}>
          <WizardStep title="step-2">
            <EmailForm formKey="email" formData={formData} prev={prevStep(2)} next={nextStep(2)} />
          </WizardStep>
        </Route>
        <Route path={`${path}/step-3`}>
          <WizardStep title="step-3">
            <TitleandAccessForm formKey="titleAndAccess" formData={formData} prev={prevStep(3)} next={nextStep(3)}/>
          </WizardStep>
        </Route>
        <Route path={`${path}/step-4`}>
          <WizardStep title="step-4">
            <BusinessIdentifierForm formKey="businessIdentifier" formData={formData} prev={prevStep(4)} next={nextStep(4)}/>
          </WizardStep>
        </Route>
        <Route path={`${path}/step-5`}>
          <WizardStep title="step-5">
            <BusinessAddressForm formKey="businessAddress" formData={formData} prev={prevStep(5)} next={nextStep(5)}/>
          </WizardStep>
        </Route>
        <Route path={`${path}/step-6`}>
          <WizardStep title="step-6">
            <BusinessIndustryForm formKey="businessIndustry" formData={formData} prev={prevStep(6)} next={nextStep(6)}/>
          </WizardStep>
        </Route>
        <Route path={`${path}/step-7`}>
          <WizardStep title="step-7">
            <BusinessSizeForm formKey="businessSize" formData={formData} prev={prevStep(7)} next={nextStep(7)} />
          </WizardStep>
        </Route>
      </Switch>
    </div>
  );
};
