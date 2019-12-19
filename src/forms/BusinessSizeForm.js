import React from 'react';

export const BusinessSizeForm = () => {
  return (
    <form name="businessSizeForm">
      <fieldset>
        <legend>Number of Employees</legend>
        <select>
          <option>1-50</option>
          <option>51-100</option>
          <option>101-500</option>
          <option>501-1000</option>
          <option>1000</option>
        </select>
      </fieldset>
      <fieldset>
        <legend>Typical Deal Size</legend>
        <select>
          <option>$1-$50</option>
          <option>$51-$100</option>
          <option>$101-$500</option>
          <option>$501-$1000</option>
          <option>$1000-$10000</option>
          <option>$10,000</option>
        </select>
      </fieldset>
      <fieldset>
        <legend>Publicly Traded</legend>
        <label>
          <input value="yes" type="radio" name="publiclyTraded" />
          Yes
        </label>
        <label>
          <input value="no" type="radio" name="publiclyTraded" />
          No
        </label>       
      </fieldset>
    </form>
  )
}