import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

function ScrollIcon() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a href="#about" className={`absolute left-1/2 -translate-x-1/2 top-[90%] transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <FontAwesomeIcon icon={faAnglesDown} className="fa-3x text-[#1A274B] hover:text-[#A94D0F] transition" />
    </a>
  );
}

export default ScrollIcon;
