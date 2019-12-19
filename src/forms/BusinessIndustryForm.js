import React from 'react';

export const BusinessIndustryForm = () => {
  return (
    <form name="businessIndustryForm">
      <fieldset>
        <legend>industry</legend>
        <select>
          <option>Enterprise Software</option>
          <option>Sales</option>
          <option>Marketing</option>
          <option>Ecommercve</option>
          <option>Construction</option>
          <option>Logistics</option>
          <option>SAAS</option>
          <option>Telephony</option>
          <option>Consumer Electronics</option>
          <option>Transportation</option>
        </select>
      </fieldset>
      <fieldset>
        <legend>Customer Segment</legend>
        <select>
          <option>Consumer</option>
          <option>Enterprise</option>
          <option>Both</option>
        </select>
      </fieldset>
    </form>
  )
}