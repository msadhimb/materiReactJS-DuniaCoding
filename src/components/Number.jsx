import React from "react";

const Number = (props) => {
  const { className, children } = props;
  return <p className={className}>{children}</p>;
};

export default Number;
