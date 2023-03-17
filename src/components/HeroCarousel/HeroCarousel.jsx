import React, {useState} from "react";

const carouselArr = [
  {
    href:
      "https://www.bjs.com/search?visualVariant.nonvisualVariant.gbi_program_availability.gbi_shipping_and_pickup=Same-day%20Delivery",
    images: {
      mobile: "https://bjs.scene7.com/is/image/bjs/230206_SDD_Slider_Mobile",
      desktop: "https://bjs.scene7.com/is/image/bjs/230206_SDD_Slider_Full",
    },
    alt:
      "Free same-day for game-day. Spend $100 on BJs.com and get free same-day delivery.* click to shop now",
    position: "1",
  },
  {
    href:
      "https://www.bjs.com/search?visualVariant.nonvisualVariant.gbi_attributes.Campbellssuperbowl2023=Campbells+Superbowl&rmp=no&utm_source=48&utm_medium=Onsite+Display&utm_campaign=MS_Snyder%27s_F23+BJ%27S+Super+Bowl+Multi-brand+Media+Activation+%7C+1.24.2023&utm_id=205286",
    images: {
      mobile:
        "https://pubsaf.global.ssl.fastly.net/prmt/301a0fdb1dfa3a813eda692c36a19669",
      desktop:
        "https://pubsaf.global.ssl.fastly.net/prmt/301a0fdb1dfa3a813eda692c36a19669",
    },
    alt: "Sponsored Banner",
    position: "2",
  },
  {
    href:
      "https://www.bjs.com/category/seasonal-home/new-year/home-refresh/3000000000000242488",
    images: {
      mobile:
        "https://bjs.scene7.com/is/image/bjs/230210_PresidentsDay_Slider_Mobile",
      desktop:
        "https://bjs.scene7.com/is/image/bjs/230210_PresidentsDay_Slider_Full",
    },
    alt:
      "Presidents' Day savings. Save up to 40%, plus get FREE shipping on select furniture and mattresses. Click to shop now.",
    position: "3",
  },
  {
    href:
      "https://www.bjs.com/category/seasonal-home/valentine-s-day/3000000000000236488",
    images: {
      mobile:
        "https://bjs.scene7.com/is/image/bjs/230126_Valentines_Slider_Mobile",
      desktop:
        "https://bjs.scene7.com/is/image/bjs/230126_Valentines_Slider_Full",
    },
    alt:
      "Share the love for less. Save on Valentine's Day gifts to spoil your sweethearts. Click here to shop Valentines Day",
    position: "4",
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  return ();
}
