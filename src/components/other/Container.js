import React from "react";

<<<<<<< HEAD
export default function Container({ type, children }) {
  const renderContainerType = (type) => {
    switch (type) {
      case "fluid":
        return "container-fluid";
      default:
        return "container";
    }
  };
  return <div className={renderContainerType(type)}>{children}</div>;
=======
export default function Container({ fluid, children }) {
  return (
    <div className={fluid ? "container-fluid" : "container"}>{children}</div>
  );
>>>>>>> dev01
}
