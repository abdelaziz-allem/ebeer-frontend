import React from "react";
import { AnimatedTestimonials } from "@/components/testimonalanime";

import Pic1 from "@/components/images/pic1.jpg";
import Pic2 from "@/components/images/pic2.jpg";
import Pic3 from "@/components/images/pic3.jpg";
import Pic4 from "@/components/images/pic4.jpg";

export default function testimonal() {
  const testimonials = [
    {
      quote:
        "Waxan suuqan ka hela khudaar nadiifa oo jaban. waxan si sahlan ula xidhiidha beerta",
      name: "Abdi Ali",
      designation: "cagaaran shop",
      src: Pic1,
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Saamia Abdi",
      designation: "CTO at InnovateSphere",
      src: Pic3,
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: Pic2,
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: Pic4,
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: Pic1,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
