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
          <WizardStep step={3} prevStep={prevStep} nextStep={nextStep}>
            <TitleandAccessForm />
          </WizardStep>
        </Route>
        <Route path={`${path}/step-4`}>
          <WizardStep step={4} prevStep={prevStep} nextStep={nextStep}>
            <BusinessIdentifierForm />
          </WizardStep>
        </Route>
        <Route path={`${path}/step-5`}>
          <WizardStep step={5} prevStep={prevStep} nextStep={nextStep}>
            <BusinessAddressForm />
          </WizardStep>
        </Route>
        <Route path={`${path}/step-6`}>
          <WizardStep step={6} prevStep={prevStep} nextStep={nextStep}>
            <BusinessIndustryForm />
          </WizardStep>
        </Route>
        <Route path={`${path}/step-7`}>
          <WizardStep step={7} prevStep={prevStep}>
            <BusinessSizeForm />
          </WizardStep>
        </Route>
      </Switch>
    </div>
  );
};
