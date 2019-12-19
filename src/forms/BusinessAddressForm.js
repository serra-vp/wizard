import React from 'react';

export const BusinessAddressForm = () => {
  return (
    <form name="businessAddressForm">
      <input type="text" placeholder="Street"/>
      <input type="text" placeholder="City"/>
      <select>
        <option>Utah</option>
        <option>Albay</option>
      </select>
      <select>
        <option>U.S.A</option>
        <option>Philippines</option>
      </select>
      <input type="text" placeholder="Postal Code"/>
    </form>
  )
}