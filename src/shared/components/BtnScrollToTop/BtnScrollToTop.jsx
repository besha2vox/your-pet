import React, { useRef } from 'react';
import { ScrollToTop } from './btn-scroll-to-top.styled';

import { ChevronUpIcon } from 'shared/utils/icons';

const BtnScrollToTop = () => {
  const buttonScrollToTop = useRef();
  window.onscroll = () => scrollToTopFunction();

  function scrollToTopFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      buttonScrollToTop.current.style.display = 'flex';
    } else {
      buttonScrollToTop.current.style.display = 'none';
    }
  }

  const onClickBtn = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ScrollToTop
      ref={buttonScrollToTop}
      id="BtnScrollToTop"
      onClick={onClickBtn}
      type="button"
    >
      <ChevronUpIcon />
    </ScrollToTop>
  );
};

export default BtnScrollToTop;
