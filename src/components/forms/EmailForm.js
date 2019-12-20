import React from "react";
import useForm from "react-hook-form";

import { getDefaultFormValues } from "./utils";

import { InputError } from "./input/InputError";
import { InputContainer } from "./input/InputContainer";
import { StepControl } from "../StepControl";

export const EmailForm = ({ formKey, formData, next, prev }) => {
  const { register, errors, formState, getValues } = useForm({
    mode: "onBlur",
    defaultValues: getDefaultFormValues(formKey, formData)
  });

  return (
    <form name="emailForm">
      <InputContainer>
        <input
          name="email"
          type="email"
          placeholder="john.doe@gmail.com"
          ref={register({ required: "Email Address is required" })}
        />
        <InputError error={errors.email} />
      </InputContainer>
      <StepControl
        valid={formState.isValid}
        onNext={() => next({ [formKey]: getValues() })}
        onPrev={() => prev({ [formKey]: getValues() })}
      />
    </form>
  );
};
