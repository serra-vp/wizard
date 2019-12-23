import React from 'react';
import useForm from 'react-hook-form';
import { getDefaultFormValues } from './utils';
import { InputContainer } from './input/InputContainer';
import { InputError } from './input/InputError';
import { StepControl } from '../StepControl'; 

export const BusinessIndustryForm = ({formKey, formData, next, prev}) => {
  const { errors, register, formState, getValues } = useForm({ mode: 'onBlur', defaultValues: getDefaultFormValues(formKey,formData)})
  return (
    <form name="businessIndustryForm">
      <InputContainer>
        <fieldset>
          <legend>industry</legend>
          <select name="industry" ref={register({required: "Industry is required"})}>
            <option value="Enterprise Software">Enterprise Software</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Ecommerce">Ecommerce</option>
            <option value="Construction">Construction</option>
            <option value="Logistics">Logistics</option>
            <option value="SAAS">SAAS</option>
            <option value="Telephony">Telephony</option>
            <option value="Consumer Electronics">Consumer Electronics</option>
            <option value="Transportation">Transportation</option>
          </select>
          <InputError error={errors.industry} />
        </fieldset>
      </InputContainer>
      <InputContainer>
        <fieldset>
          <legend>Customer Segment</legend>
          <select name="customerSegment" ref={register({required: "Customer Segment is required"})}>
            <option value="Consumer">Consumer</option>
            <option value="Enterprise">Enterprise</option>
            <option value="Both">Both</option>
          </select>
          <InputError error={errors.customerSegment} />
        </fieldset>
      </InputContainer>
      <StepControl 
        valid={formState.isValid} 
        onNext={() => next({ [formKey]: getValues() })} 
        onPrev={() => prev({ [formKey]: getValues() })}
      />
    </form>
  )
}