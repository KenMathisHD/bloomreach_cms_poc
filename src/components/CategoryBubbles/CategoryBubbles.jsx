import { useState } from "react";
import "./CategoryBubbles.scss";

const CategoryBubbles = () => {
  let [clpPage, setClpPage] = useState(false);
  function toggleclpPage() {
    console.log(clpPage);
    setClpPage(!clpPage);
  }
  console.log(clpPage);

  const stripHtml = (string) => {
    return string.replace(/<[^>]*>|&\w+;/g, "");
  };

  const bgHex = "";
  const bgImage = "";
  const titleColor = "";

  const headline = "So much more to explore";
  const HPitems = [
    {
      title: "Cough, Cold &amp; Allergy",
      image: {
        href: "https://www.bjs.com/category/health-and-beauty/medicine-cabinet/cough-cold-and-flu/941",
        desktopImage:
          "https://bjs.scene7.com/is/image/bjs/CoughColdAllergy?fmt=png-alpha",
        altTag: "",
      },
      analytics: {
        data_gtm_id: "HP51",
        data_gtm_position: "HP Category 1",
        data_gtm_name: "Cough and Cold",
        data_gtm_creative: "Cough and Cold",
        data_gtm_type: "category",
      },
    },
    {
      title: "Baby &amp; Kids",
      image: {
        href: "https://www.bjs.com/category/baby-and-kids/3000000000000117158",
        desktopImage:
          "https://bjs.scene7.com/is/image/bjs/BabyKids?fmt=png-alpha",
        altTag: "",
      },
      analytics: {
        data_gtm_id: "HP52",
        data_gtm_position: "HP Category 2",
        data_gtm_name: "Baby and Kids",
        data_gtm_creative: "Baby and Kids",
        data_gtm_type: "category",
      },
    },
    {
      title: "Personal Care",
      image: {
        href: "https://www.bjs.com/category/health-and-beauty/personal-care/884",
        desktopImage:
          "https://bjs.scene7.com/is/image/bjs/PersonalCare?fmt=png-alpha",
        altTag: "",
      },
      analytics: {
        data_gtm_id: "HP53",
        data_gtm_position: "HP Category 3",
        data_gtm_name: "Personal Care",
        data_gtm_creative: "Personal Care",
        data_gtm_type: "category",
      },
    },
    {
      title: "Paper &amp; Plastic",
      image: {
        href: "https://www.bjs.com/category/grocery-household-and-pet/paper-and-plastic/3000000000000182488",
        desktopImage:
          "https://bjs.scene7.com/is/image/bjs/PaperPlastic?fmt=png-alpha",
        altTag: "",
      },
      analytics: {
        data_gtm_id: "HP54",
        data_gtm_position: "HP Category 4",
        data_gtm_name: "Paper and Plastic",
        data_gtm_creative: "Paper and Plastic",
        data_gtm_type: "category",
      },
    },
    {
      title: "Vitamins &amp; Supplements",
      image: {
        href: "https://www.bjs.com/category/health-and-beauty/vitamins-and-supplements/3000000000000117214",
        desktopImage:
          "https://bjs.scene7.com/is/image/bjs/VitaminsSupplements?fmt=png-alpha",
        altTag: "",
      },
      analytics: {
        data_gtm_id: "HP55",
        data_gtm_position: "HP Category 5",
        data_gtm_name: "Vitamins and Supplements",
        data_gtm_creative: "Vitamins and Supplements",
        data_gtm_type: "category",
      },
    },
    {
      title: "Produce",
      image: {
        href: "https://www.bjs.com/category/grocery-household-and-pet/fresh-and-refrigerated-food/produce/3000000000000117249",
        desktopImage:
          "https://bjs.scene7.com/is/image/bjs/Produce?fmt=png-alpha",
        altTag: "",
      },
      analytics: {
        data_gtm_id: "HP56",
        data_gtm_position: "HP Category 6",
        data_gtm_name: "Produce",
        data_gtm_creative: "Produce",
        data_gtm_type: "category",
      },
    },
    {
      title: "Frozen Foods",
      image: {
        href: "https://www.bjs.com/category/grocery-household-and-pet/frozen-food/3000000000000117306",
        desktopImage:
          "https://bjs.scene7.com/is/image/bjs/FrozenFoods?fmt=png-alpha",
        altTag: "",
      },
      analytics: {
        data_gtm_id: "HP57",
        data_gtm_position: "HP Category 7",
        data_gtm_name: "Frozen Foods",
        data_gtm_creative: "Frozen Foods",
        data_gtm_type: "category",
      },
    },
    {
      title: "Beverages",
      image: {
        href: "https://www.bjs.com/category/grocery-household-and-pet/beverages/3000000000000018003",
        desktopImage:
          "https://bjs.scene7.com/is/image/bjs/Beverages?fmt=png-alpha",
        altTag: "",
      },
      analytics: {
        data_gtm_id: "HP58",
        data_gtm_position: "HP Category 8",
        data_gtm_name: "Beverages",
        data_gtm_creative: "Beverages",
        data_gtm_type: "category",
      },
    },
    {
      title: "Coffee &amp; Tea",
      image: {
        href: "https://www.bjs.com/category/grocery-household-and-pet/coffee-tea-and-creamer/3000000000000117029",
        desktopImage:
          "https://bjs.scene7.com/is/image/bjs/CoffeeTea?fmt=png-alpha",
        altTag: "",
      },
      analytics: {
        data_gtm_id: "HP59",
        data_gtm_position: "HP Category 9",
        data_gtm_name: "Coffee and Tea",
        data_gtm_creative: "Coffee and Tea",
        data_gtm_type: "category",
      },
    },
    {
      title: "Pet",
      image: {
        href: "https://www.bjs.com/category/grocery-household-and-pet/pet/3000000000000117369",
        desktopImage: "https://bjs.scene7.com/is/image/bjs/Pet?fmt=png-alpha",
        altTag: "",
      },
      analytics: {
        data_gtm_id: "HP60",
        data_gtm_position: "HP Category 10",
        data_gtm_name: "Pet",
        data_gtm_creative: "Pet",
        data_gtm_type: "category",
      },
    },
  ];
  const CLPitems = [
    {
      title: "Laundry & Clothing Care",
      image: {
        href: "https://www.bjs.com/category/grocery-household-and-pet/cleaning-and-household-goods/laundry-and-clothing-care/3000000000000117094",
        desktopImage: "https://bjs.scene7.com/is/image/bjs/220823_Laundry",
        altTag: "Laundry & Clothing Care",
      },
      analytics: {
        data_gtm_id: "HP51",
        data_gtm_position: "HP Category 1",
        data_gtm_name: "Cough and Cold",
        data_gtm_creative: "Cough and Cold",
        data_gtm_type: "category",
      },
    },
    {
      title: "Dish Soap & Detergent",
      image: {
        href: "https://bjs.scene7.com/is/image/bjs/Clean_Up",
        desktopImage: "https://bjs.scene7.com/is/image/bjs/Clean_Up",
        altTag: "Dish Soap & Detergent",
      },
      analytics: {
        data_gtm_id: "HP51",
        data_gtm_position: "HP Category 1",
        data_gtm_name: "Cough and Cold",
        data_gtm_creative: "Cough and Cold",
        data_gtm_type: "category",
      },
    },
    {
      title: "Cleaning Products",
      image: {
        href: "https://www.bjs.com/category/grocery-household-and-pet/cleaning-and-household-goods/cleaning-products/1335",
        desktopImage:
          "https://bjs.scene7.com/is/image/bjs/220823_CleaningSupplies",
        altTag: "Cleaning Products",
      },
      analytics: {
        data_gtm_id: "HP51",
        data_gtm_position: "HP Category 1",
        data_gtm_name: "Cough and Cold",
        data_gtm_creative: "Cough and Cold",
        data_gtm_type: "category",
      },
    },
    {
      title: "Trash Bags & Liners",
      image: {
        href: "https://www.bjs.com/category/grocery-household-and-pet/paper-and-plastic/trash-bags-and-liners/1369",
        desktopImage:
          "https://bjs.scene7.com/is/image/bjs/200728_Subcategories_TrashBags_Liners",
        altTag: "Trash Bags & Liners",
      },
      analytics: {
        data_gtm_id: "HP51",
        data_gtm_position: "HP Category 1",
        data_gtm_name: "Cough and Cold",
        data_gtm_creative: "Cough and Cold",
        data_gtm_type: "category",
      },
    },
    {
      title: "Paper Products",
      image: {
        href: "https://www.bjs.com/category/grocery-household-and-pet/paper-and-plastic/paper-products/3000000000000117351",
        desktopImage:
          "https://bjs.scene7.com/is/image/bjs/200728_Subcategories_PaperProducts",
        altTag: "Paper Products",
      },
      analytics: {
        data_gtm_id: "HP51",
        data_gtm_position: "HP Category 1",
        data_gtm_name: "Cough and Cold",
        data_gtm_creative: "Cough and Cold",
        data_gtm_type: "category",
      },
    },
    {
      title: "Air Fresheners",
      image: {
        href: "https://www.bjs.com/category/grocery-household-and-pet/cleaning-and-household-goods/air-fresheners/3000000000000117336",
        desktopImage:
          "https://bjs.scene7.com/is/image/bjs/200728_Subcategories_AirFresheners",
        altTag: "Air Fresheners",
      },
      analytics: {
        data_gtm_id: "HP51",
        data_gtm_position: "HP Category 1",
        data_gtm_name: "Cough and Cold",
        data_gtm_creative: "Cough and Cold",
        data_gtm_type: "category",
      },
    },
    {
      title: "Vacuums & Floor Care",
      image: {
        href: "https://www.bjs.com/category/appliances/vacuums-and-floor-care/1354",
        desktopImage:
          "https://bjs.scene7.com/is/image/bjs/200728_Subcategories_Vacuums_FloorCare",
        altTag: "Vacuums & Floor Care",
      },
      analytics: {
        data_gtm_id: "HP51",
        data_gtm_position: "HP Category 1",
        data_gtm_name: "Cough and Cold",
        data_gtm_creative: "Cough and Cold",
        data_gtm_type: "category",
      },
    },
    {
      title: "Storage & Organization",
      image: {
        href: "https://www.bjs.com/category/home/storage-and-organization/3000000000000117092",
        desktopImage:
          "https://s7d6.scene7.com/is/image/bjs/Storage_Organization",
        altTag: "Storage & Organization",
      },
      analytics: {
        data_gtm_id: "HP51",
        data_gtm_position: "HP Category 1",
        data_gtm_name: "Cough and Cold",
        data_gtm_creative: "Cough and Cold",
        data_gtm_type: "category",
      },
    },
  ];

  const css = `
  .BJsCategories {
    ${bgHex && `background-color: ${bgHex};`}
    ${bgHex && `background-image: url(${bgImage});`}
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  .BJsCategories a, .BJsCategories a:hover {
    color: ${titleColor ? titleColor : "#000"};
  }`;

  let items = clpPage ? [...CLPitems] : [...HPitems];

  return (
    <>
      <style>{css}</style>
      <button onClick={toggleclpPage} className="mx-auto p-4">
        Toggle clpPage
      </button>
      <section className="dc_mod BJsCategories pb-5 text-center">
        <div className="w-1280px container">
          <div className="row justify-content-center">
            <div
              className={`${clpPage ? "tile-heading " : ""}col-12 pb-4 pb-md-5`}
            >
              <h2>{headline}</h2>
            </div>
            {items.map((bubble, ind) => {
              const { title, image, analytics } = bubble;
              return (
                <div
                  key={ind}
                  className={`col-4 ${
                    clpPage ? "col-md-3" : "col-sm-3 col-md-5c"
                  }`}
                >
                  <a
                    href={image.href}
                    data-gtm-id={analytics.data_gtm_id}
                    data-gtm-position={analytics.data_gtm_position}
                    data-gtm-name={analytics.data_gtm_name}
                    data-gtm-creative={analytics.data_gtm_creative}
                    className="d-flex flex-column hp-espot-gtm-tag hp-espot-gtm-view"
                  >
                    <div className="category_item d-flex p-0">
                      <img
                        src={image.desktopImage}
                        alt={image.altTag}
                        className="d-block w-100"
                      />
                    </div>
                    {title && (
                      <h3
                        className="p-2 pt-3"
                        dangerouslySetInnerHTML={{ __html: title }}
                      />
                    )}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryBubbles;
