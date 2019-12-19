import React, {useEffect, Children} from 'react' 
import { Switch, Route, useRouteMatch, useHistory, useLocation } from 'react-router-dom'

import {NameForm} from '../forms/NameForm';
import {EmailForm} from '../forms/EmailForm';
import {TitleandAccessForm} from '../forms/TitleandAccessForm';
import {BusinessIdentifierForm} from '../forms/BusinessIdentifierForm'
import {BusinessIndustryForm} from '../forms/BusinessIndustryForm'
import {BusinessSizeForm} from '../forms/BusinessSizeForm'
import {BusinessAddressForm} from '../forms/BusinessAddressForm'

const styles = {
  backgroundColor: '#ceddce',
  padding: '8px',
}

const stepStyles = {
  backgroundColor: '#f19485',
  padding: '8px',
  margin: '8px'
}

const Step = ({step, nextStep, prevStep, children}) => {
  //const {step} = props;
  return (
    <div style={stepStyles}>
      <h1>Step {step}</h1 >
      {children}
      {!!prevStep && <button onClick={() => prevStep(step)}>Prev</button>}
      {!!nextStep && <button onClick={() => nextStep(step)}>Next</button>}
    </div>
  )
}

const hasStep = path => {
  return /step-[1-7]$/.test(path)
}

export const Onboarding = () => {
  const { path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if(!hasStep(location.pathname)){
      history.push(`${path}/step-1`)
    }
  }, [path, history]);

  const nextStep = (step) => history.push(`${path}/step-${step+=1}`)

  const prevStep = (step) => history.push(`${path}/step-${step-=1}`)

  return (
    <div style={styles}>
      <h1>Onboarding</h1>
      <Switch>
        <Route path={`${path}/step-1`}>
          <Step step={1} nextStep={nextStep}>
            <NameForm />
          </Step>
        </Route>
        <Route path={`${path}/step-2`}>
          <Step step={2} prevStep={prevStep} nextStep={nextStep}>
            <EmailForm/>
          </Step>
        </Route>
        <Route path={`${path}/step-3`}>
          <Step step={3} prevStep={prevStep} nextStep={nextStep}>
            <TitleandAccessForm/>
          </Step>
        </Route>
        <Route path={`${path}/step-4`}>
          <Step step={4} prevStep={prevStep} nextStep={nextStep}>
            <TitleandAccessForm />
          </Step>
        </Route>
        <Route path={`${path}/step-5`}>
          <Step step={5} prevStep={prevStep} nextStep={nextStep}>
          </Step>
        </Route>
        <Route path={`${path}/step-6`}>
          <Step step={6} prevStep={prevStep} nextStep={nextStep}>
          </Step>
        </Route>
        <Route path={`${path}/step-7`}>
          <Step step={7} prevStep={prevStep}>
            <BusinessSizeForm/>
          </Step>
        </Route>
      </Switch>
    </div>
  );
}