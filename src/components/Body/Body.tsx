import React from "react";
import "./Body.css";

const Body: React.FC = ({ children, ...props }) => {
  return (
    <div className="jan-Body" style={{ fontSize: "100px" }}>
      {children}
    </div>
  );
};

export default Body;
