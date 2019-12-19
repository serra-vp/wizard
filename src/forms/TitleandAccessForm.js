import React from 'react';

export const TitleandAccessForm = () => {
  return (
    <form name="nameForm">
      <input type="text" placeholder="Job Title"/>
      <select>
        <option>Administrator</option>
        <option>Employee</option>
      </select>
    </form>
  )
}