import React from 'react'

export const InputContainer = ({ children }) => {
  const styles = {
    display: "flex",
    flexDirection: "column"
  };
  return <div style={styles}>{children}</div>;
};