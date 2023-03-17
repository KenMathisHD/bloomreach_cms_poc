import React from "react";

export function KenTestComponent({ component, page }) {
  const { testProp } = component.getParameters();
  return (
    <div>
      <p>Title here below</p>
      <h2>{testProp}</h2>
    </div>
  );
}
