import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

import "../Style/carousel.css";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import SingleImage from "./SingleImage";
import imagedata from "../data.json";

const VerticalCarousel = () => {
  const [images, setImages] = useState(imagedata.imagedata);
  const [expanded, setExpanded] = useState(false);
  const carouselRef = useRef(null);

  const toggleExpanded = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const updateMaxHeight = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.style.maxHeight = expanded
        ? `${carousel.scrollHeight}px`
        : "350px";
    }
  };
  useLayoutEffect(() => {
    updateMaxHeight();
  }, [images, expanded]);
  return (
    <>
      {/* <div className="vertical-carousel"> */}
        {/* <div
          className={`carousel ${expanded ? "expanded" : ""}`}
          ref={carouselRef}
        >
          {images.map((imageUrl, index) => (
            <SingleImage imageUrl={imageUrl} index={index} />
          ))}
        </div> */}
        <div   className={`vertical-carousel ${expanded ? "expanded" : ""}`}
          ref={carouselRef}>
          <div className="carousel-row">
            {images.slice(0, 6).map((image, index) => (
              <div key={index} className="carousel-item">
                <img src={image} alt={`Image ${index}`} />
              </div>
            ))}
          </div>
          <div className="carousel-row">
            {images.slice(6).map((image, index) => (
              <div key={index} className="carousel-item">
                <img src={image} alt={`Image ${index + 2}`} />
              </div>
            ))}
          </div>

          <button className="dropdown-btn" onClick={toggleExpanded}>
            {expanded ? (
              <UpOutlined style={{ fontSize: "30px" }} />
            ) : (
              <DownOutlined style={{ fontSize: "30px" }} />
            )}
          </button>
        </div>
      {/* </div> */}
    </>
  );
};

export default VerticalCarousel;
