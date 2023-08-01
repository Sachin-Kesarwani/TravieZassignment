import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

import "../Style/carousel.css";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import SingleImage from "./SingleImage";
import imagedata from "../data.json"

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
        : "480px";
    }
  };
  useLayoutEffect(() => {
    updateMaxHeight();
  }, [images, expanded]);
  return (
    <>
      <div className="vertical-carousel">
        <div
          className={`carousel ${expanded ? "expanded" : ""}`}
          ref={carouselRef}
        >
          {images.map((imageUrl, index) => (
            <SingleImage imageUrl={imageUrl} index={index} />
           
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
    </>
  );
};

export default VerticalCarousel;
