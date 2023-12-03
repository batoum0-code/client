import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa'






const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisibility);

  return (
    <button
      className={`fixed bottom-12 right-[3rem] z-50 bg-bSpink text-white  p-4 rounded-[8px] transition duration-300 ease-in-out transform ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
      
    </button>
  );
};

export default ScrollToTopButton;
