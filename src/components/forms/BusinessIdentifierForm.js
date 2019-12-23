import React from 'react';
import useForm from 'react-hook-form';
import { getDefaultFormValues } from './utils';
import { InputContainer } from './input/InputContainer';
import { InputError } from './input/InputError';
import { StepControl } from '../StepControl'; 

export const BusinessIdentifierForm = ({formKey, formData, next, prev}) => {
  const { errors, register, formState, getValues } = useForm({ mode: 'onBlur', defaultValues: getDefaultFormValues(formKey,formData)})
  return (
    <form name="businessIdentifierForm">
      <InputContainer>
        <input type="text" placeholder="Business Name" name="businessName" ref={register({required: "Business Name is required"})}/>
        <InputError error={errors.businessName}/>
      </InputContainer>
      <InputContainer>
        <input type="url" placeholder="Business URL" name="businessURL" ref={register({required: "Business URL is required"})}/>
        <InputError error={errors.businessURL} />
      </InputContainer>
      <InputContainer>
        <input type="text" placeholder="Business Phone Number" name="businessPhone" ref={register({required: "Business Phone Number is required"})}/>  
        <InputError error={errors.businessPhone}/>
      </InputContainer>
      <StepControl 
        valid={formState.isValid} 
        onNext={() => next({ [formKey]: getValues() })} 
        onPrev={() => prev({ [formKey]: getValues() })}
      />
    </form>
  )
}