import React from "react";

import "./Trending.scss";

export function Trending({ component, page }) {
  const { bgHex, bgImg, fontColor, headline } = component.getParameters();
  const { trendingItems: documentRef } = component.getModels();
  const document = documentRef && page.getContent(documentRef);
  if (!document) return page.isPreview() ? <div id="noDoc-error"></div> : null;

  const { analyticsImage: items } = document.getData();

  const css = `
  .trending {
    ${bgHex && `background-color: ${bgHex};`}
    ${bgHex && `background-image: url(${bgImg});`}
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  ${
    fontColor &&
    `.trending a, .trending a:hover {
    color: ${fontColor};
  }`
  }`;

  return (
    <section className="dc_mod trending">
      <style>{css}</style>
      <div className="container w-1280px">
        <div className="row min-gutters">
          <div className="col-12 pb-0">
            <div className="text-center">
              <h2
                className="card-title section_headline"
                dangerouslySetInnerHTML={{ __html: headline }}
              ></h2>
            </div>
          </div>
          {items.map((item, ind) => {
            const { ctLabel, label, image, analytics } = item;
            return (
              <div
                key={ind}
                className={ind > 0 ? "col-6 col-md-4" : "col-12 col-md-4"}
              >
                <a
                  href={image.href}
                  data-gtm-id={analytics.data_gtm_id}
                  data-gtm-position={analytics.data_gtm_position}
                  data-gtm-name={analytics.data_gtm_name}
                  data-gtm-creative={analytics.data_gtm_creative}
                  className={`card d-flex flex-column${
                    !analytics.hpPlacement
                      ? " plp-espot-gtm-tag plp-espot-gtm-view"
                      : " hp-espot-gtm-tag hp-espot-gtm-view"
                  }`}
                >
                  <div className="card_image_container">
                    <img
                      src={image.imageDesktop}
                      alt={image.imageAlt}
                      className="d-block w-100"
                    />
                  </div>
                  <div className="card-body d-flex flex-column text-center">
                    <h3
                      className="card-title mb-2"
                      dangerouslySetInnerHTML={{ __html: label }}
                    />
                    <div className="card-button">
                      <span
                        className="link-primary"
                        dangerouslySetInnerHTML={{ __html: ctLabel }}
                      />
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
          {/* col-6 col-md-4 */}
        </div>
      </div>
    </section>
  );
}
