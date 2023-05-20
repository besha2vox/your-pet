import React, { useState, useEffect } from 'react';
import { AdData } from './AdData';
import { AdTitle, AdList, AdItem, AdImage, AdText } from './Slider.styled';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(5);

  useEffect(() => {
    const updateIndex = () => {
      setCurrentIndex((prevIndex) => (prevIndex + visibleSlides) % AdData.length);
    };

    const timer = setInterval(updateIndex, 5000);

    return () => clearInterval(timer);
  }, [visibleSlides]);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      if (windowWidth >= 1280) {
        setVisibleSlides(5);
      } else if (windowWidth < 1280 && windowWidth >= 768) {
        setVisibleSlides(3);
      } else {
        setVisibleSlides(3);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
    <AdTitle>Advertising section</AdTitle>
      <AdList visibleSlides={visibleSlides}>
        {AdData.slice(currentIndex, currentIndex + visibleSlides).map(ad => (
          <AdItem key={ad.id}>
            <AdImage src={ad.image} alt="" />
            <AdText>{ad.text}</AdText>
          </AdItem>
        ))}
      </AdList>
    </>
  );
};

export { Slider };
