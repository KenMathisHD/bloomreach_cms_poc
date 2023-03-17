import React from "react";

export function SimpleImageComponent({ component, page }) {
  const { imageSrc, imageAlt } = component.getParameters();
  return (
    <div>
      <p>
        Expression of the image alt tag: <br />
        {imageAlt}
      </p>
      <img src={imageSrc} alt={imageAlt} />
    </div>
  );
}
