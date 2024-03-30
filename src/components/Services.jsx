import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";

const services = () => {
  return(
   <div className="services">
    <Carousel 
    infiniteLoop 
    autoPlay 
    showStatus={false} 
    showArrows={false} 
    interval={2000}
    showIndicators={false}
    >
      
     <div>
     <img src={img1} alt="item1" />
     <p>Full Stack Services</p>
     </div>

     <div>
        <img src={img2} alt = "item2" />
        <p>Peer-Peer Services</p>
     </div>

    </Carousel>
   </div>
  );

};

export default services;