import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import axios from "axios";
import "../Style/carousel.css";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import SingleImage from "./SingleImage";

const VerticalCarousel = () => {
  const [images, setImages] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const carouselRef = useRef(null);
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    getImages();
  }, []);

  useLayoutEffect(() => {
    updateMaxHeight();
  }, [images, expanded]);
  const getImages = async () => {
    setLoading(true);
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const imageUrls = response.data.map((product) => product.image);
      let newdata = imageUrls.slice(0, 12);
      console.log(imageUrls);
      setImages(newdata);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

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

  return loading ? (
    <div></div>
  ) : (
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
