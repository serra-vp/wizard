import React from 'react';
import useForm from 'react-hook-form';

import {getDefaultFormValues} from './utils';

import { InputContainer } from './input/InputContainer';
import { InputError } from './input/InputError';
import { StepControl } from '../StepControl';

export const BusinessSizeForm = ({formData, formKey, prev}) => {
  const { errors, register, getValues, formState } = useForm({ mode: "onBlur", defaultValues: getDefaultFormValues(formKey, formData)});
  return (
    <form name="businessSizeForm">
      <InputContainer>
        <fieldset>
          <legend>Number of Employees</legend>
          <select name="employeeNum" ref={register({ required: "Number of Employees is required"})}>
            <option value="1-50">1-50</option>
            <option value="51-100">51-100</option>
            <option value="101-500">101-500</option>
            <option value="501-1000">501-1000</option>
            <option value="501-1000">1000</option>
          </select>
          <InputError error={errors.employeeNum} />
        </fieldset>
      </InputContainer>
      <InputContainer>
        <fieldset>
          <legend>Typical Deal Size</legend>
          <select name="dealSize" ref={register({required: "Typical Deal Size is required"})}>
            <option value="$1-$50">$1-$50</option>
            <option value="$51-$100">$51-$100</option>
            <option value="$101-$500">$101-$500</option>
            <option value="$501-$1,000">$501-$1,000</option>
            <option value="$1,000-$10,000">$1,000-$10,000</option>
            <option value="$10,000">$10,000</option>
          </select>
          <InputError error={errors.dealSize} />
        </fieldset>
      </InputContainer>
      <InputContainer>
        <fieldset>
          <legend>Publicly Traded</legend>
          <label>
            <input value="yes" type="radio" name="publiclyTraded" ref={register({required: "Public Traded is required"})}/>
            Yes
          </label>
          <label>
            <input value="no" type="radio" name="publiclyTraded" ref={register({required: "Public Traded is required"})}/>
            No
          </label> 
          <InputError error={errors.publiclyTraded} />
        </fieldset>
      </InputContainer>
      <StepControl 
        valid={formState.isValid} 
        onPrev={() => prev({ [formKey]: getValues() })}
      />
    </form>
  )
}