import React from 'react';

export const BusinessIdentifierForm = () => {
  return (
    <form name="businessIdentifierForm">
      <input type="text" placeholder="Business Name"/>
      <input type="url" placeholder="Business URL"/>
      <input type="text" placeholder="Business Phone Number"/>
    </form>
  )
}