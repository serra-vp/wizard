import React from 'react';

export const InputError = ({ error }) => {
  return error ? <span>{error.message}</span> : null;
};