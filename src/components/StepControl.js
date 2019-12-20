import React from 'react';

export const StepControl = ({valid, onNext, onPrev}) => {
  return (
    <>
      {onPrev && <button onClick={onPrev}>Previous</button>}
      {onNext && <button disabled={!valid} onClick={onNext}>Next</button>}
    </>
  )
}