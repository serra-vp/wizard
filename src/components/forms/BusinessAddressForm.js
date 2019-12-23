import React from 'react';
import useForm from 'react-hook-form';

import { getDefaultFormValues } from './utils';
import { InputContainer } from './input/InputContainer';
import { InputError } from './input/InputError';
import { StepControl } from '../StepControl';

export const BusinessAddressForm = ({formKey, formData, next, prev}) => {
  const { errors, register, formState, getValues } = useForm({ mode: 'onBlur', defaultValues: getDefaultFormValues(formKey,formData)})

  return (
    <form name="businessAddressForm">
      <InputContainer>
        <input type="text" placeholder="Street" name="street" ref={register({required: "Street is required"})}/>
        <InputError error={errors.street} />
      </InputContainer>
      <InputContainer>
        <input type="text" placeholder="City" name="city" ref={register({required: "City is required"})}/>
        <InputError error={errors.city} />
      </InputContainer>
      <InputContainer>
        <select name="state" ref={register({required: "State is required"})}>
          <option value="Utah">Utah</option>
          <option value="Albay">Albay</option>
        </select>
        <InputError error={errors.state} />
      </InputContainer>
      <InputContainer>
        <select name="country" ref={register({required: "Country is required"})}>
          <option value="U.S.A">U.S.A</option>
          <option value="Philippines">Philippines</option>
        </select>
        <InputError error={errors.country} />
      </InputContainer>
      <InputContainer>
        <input type="text" placeholder="Postal Code" name="postalcode" ref={register({required: "Postal Code is required"})}/>
        <InputError error={errors.postalcode} />
      </InputContainer>
      <StepControl 
        valid={formState.isValid} 
        onNext={() => next({ [formKey]: getValues() })} 
        onPrev={() => prev({ [formKey]: getValues() })}
      />
    </form>
  )
}