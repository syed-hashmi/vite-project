import React from "react";
export const ChildComp = React.memo(function ChildComp({ name,handleClick }) {
  console.log("child Component Called " + name);
  handleClick(name);
  return (
    <div>
      <h2>This is a child component</h2>
    </div>
  );
});
