import React from "react";

export function OpenHTML({ component, page }) {
  const { document: documentRef } = component.getModels();
  const document = documentRef && page.getContent(documentRef);

  if (!document) return page.isPreview() ? <div id="noDoc-error"></div> : null;

  const { html } = document.getData();

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
