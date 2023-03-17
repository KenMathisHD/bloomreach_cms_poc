import "./Trending.scss";

const Trending = () => {
  return (
    <section className="dc_mod trending">
      <div className="container w-1280px">
        <div className="row min-gutters">
          <div className="col-12 pb-0">
            <div className="text-center">
              <h2 className="card-title section_headline">
                Save on essentials to
                <span className="text-nowrap"> last the season</span>
              </h2>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <a
              href="https://www.bjs.com/category/patio-and-outdoor-living/3000000000000117105?ShopAll=Y&template=clp"
              data-gtm-id="HP22"
              data-gtm-position="HP Trending Category 1"
              data-gtm-name="Patio and Outdoor Living"
              data-gtm-creative="Patio and Outdoor Living"
              data-gtm-type="category"
              data-gtm-value=""
              className="card d-flex flex-column hp-espot-gtm-tag hp-espot-gtm-view"
            >
              <div className="card_image_container">
                <img
                  className="d-block w-100"
                  src="https://bjs.scene7.com/is/image/bjs/230314_PatioOutdoor_Trending"
                  alt="Berkley Jensen Corner Patio Set. Save up to $500 + FREE shipping on select styles"
                />
              </div>
              <div className="card-body d-flex flex-column text-center">
                <h3 className="card-title mb-2">All decked out in savings</h3>
                <div className="card-button">
                  <span className="link-primary">Shop patio &amp; outdoor</span>
                </div>
              </div>
            </a>
          </div>
          <div className="col-6 col-md-4">
            <a
              href="https://www.bjs.com/category/grocery-household-and-pet/cleaning-and-household-goods/3000000000000117335?ShopAll=Y&template=clp"
              data-gtm-id="HP23"
              data-gtm-position="HP Trending Category 2"
              data-gtm-name="Spring - Cleaning"
              data-gtm-creative="Spring - Cleaning"
              data-gtm-type="category"
              data-gtm-value=""
              className="card d-flex flex-column hp-espot-gtm-tag hp-espot-gtm-view"
            >
              <div className="card_image_container">
                <img
                  className="d-block w-100"
                  src="https://bjs.scene7.com/is/image/bjs/230314_SpringCleaning_Trending"
                  alt="Mother and daughter cleaning and polishing their wood floor"
                />
              </div>
              <div className="card-body d-flex flex-column justify-content-between text-center">
                <h3 className="card-title mb-2">Clean up on spring savings</h3>
                <div className="card-button">
                  <span className="link-primary">
                    Shop cleaning &amp; household
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="col-6 col-md-4">
            <a
              href="https://www.bjs.com/category/health-and-beauty/medicine-cabinet/939?ShopAll=Y&template=clp"
              data-gtm-id="HP24"
              data-gtm-position="HP Trending Category 3"
              data-gtm-name="Spring - Allergies"
              data-gtm-creative="Spring - Allergies"
              data-gtm-type="category"
              data-gtm-value=""
              className="card d-flex flex-column hp-espot-gtm-tag hp-espot-gtm-view"
            >
              <div className="card_image_container">
                <img
                  className="d-block w-100"
                  src="https://bjs.scene7.com/is/image/bjs/230314_SpringAllergy_Trending"
                  alt="Zyrtec and Berkley Jensen allergy relief tablets"
                />
              </div>
              <div className="card-body d-flex flex-column justify-content-between text-center">
                <h3 className="card-title mb-2">
                  Outsmart <br className="d-md-none" />
                  allergies
                </h3>
                <div className="card-button">
                  <span className="link-primary">
                    Shop cough, cold <br className="d-md-none" />
                    &amp; allergy
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
