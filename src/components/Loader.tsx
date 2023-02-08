import React from "react";

interface Props {
  message: string;
}
const Loader = ({message}:Props) => {
  return (
    <div className="center">
      <p>{message}...</p>
      <span className="loader"></span>
    </div>
  );
};

export default Loader;
