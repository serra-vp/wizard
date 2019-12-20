import React from "react";
import useForm from "react-hook-form";

import { InputError } from "./input/InputError";
import { InputContainer } from "./input/InputContainer";
import {StepControl} from '../StepControl';

const getDefaultValues = (formKey = '', formData = {}) => {
  if(formData[formKey]){
    return {...formData[formKey]};
  }
}

export const NameForm = ({ next, prev, formKey, formData }) => {
  const { register, errors, formState, getValues } = useForm({
    mode: "onBlur",
    defaultValues: getDefaultValues(formKey, formData)
  });

  return (
    <form name="nameForm">
      <InputContainer>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          ref={register({ required: "First Name is required" })}
        />
        <InputError error={errors.firstName} />
      </InputContainer>
      <InputContainer>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          ref={register({ required: "Last Name is required" })}
        />
        <InputError error={errors.lastName} />
      </InputContainer>
      <StepControl valid={formState.isValid} onNext={() => next({ [formKey]: getValues()})}/>
    </form>
  );
};
