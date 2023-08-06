import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const GoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const heightToHide = 250;
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > heightToHide) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className='fixed bottom-16 right-10 w-12 h-12 text-light text-2xl bg-dark rounded-full cursor-pointer flex items-center justify-center z-10'
          onClick={goToTop}
        >
          <FaArrowUp className='animate-bounce' />
        </div>
      )}
    </>
  );
};

export default GoTop;
