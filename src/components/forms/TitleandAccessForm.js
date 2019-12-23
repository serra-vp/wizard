import React from 'react';
import useForm from 'react-hook-form';

import { getDefaultFormValues } from './utils';
import {InputContainer} from './input/InputContainer';
import {InputError }from './input/InputError';
import {StepControl} from '../StepControl'

export const TitleandAccessForm = ({formKey, formData, next, prev}) => {
  const { register, errors, formState, getValues } = useForm({
    mode: "onBlur",
    defaultValues: getDefaultFormValues(formKey, formData)
  });
  return (
    <form name="nameForm">
      <InputContainer>
        <input 
          type="text" 
          placeholder="Job Title" 
          name="jobTitle" 
          ref={register({required: "Job Title is required"})}
        />
        <InputError error={errors.jobTitle} />
      </InputContainer>
      <InputContainer>
        <select 
          name="accessLevel" 
          ref={register({required: 'Access Level is required'})}
        >
          <option value="administrator">Administrator</option>
          <option value="employee">Employee</option>
        </select>
        <InputError error={errors.accessLevel} />
      </InputContainer>
      <StepControl 
        valid={formState.isValid} 
        onNext={() => next({ [formKey]: getValues() })} 
        onPrev={() => prev({ [formKey]: getValues() })}
      />
    </form>
  )
}