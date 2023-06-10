import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBCarousel
      showIndicators
      showControls
      fade
      style={{ padding: "40px 7%" }}
    >
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src="/images/cor_image3.JPG"
        alt="..."
      ></MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src="/images/cor_image2.JPG"
        alt="..."
      ></MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="/images/cor_image4.JPG"
        alt="..."
      ></MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="/images/cor_image5.JPG"
        alt="..."
      ></MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="/images/cor_image6.JPG"
        alt="..."
      ></MDBCarouselItem>

      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="/images/cor_image7.JPG"
        alt="..."
      ></MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="/images/cor_image8.JPG"
        alt="..."
      ></MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="/images/cor_image9.JPG"
        alt="..."
      ></MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={3}
        src="/images/cor_image10.JPG"
        alt="..."
      ></MDBCarouselItem>
    </MDBCarousel>
  );
}
