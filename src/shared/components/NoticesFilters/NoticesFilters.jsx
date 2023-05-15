import FilterSubMenu from '../FilterSubMenu/FilterSubMenu';

import { useState } from 'react';
import { useWindowSize } from 'hooks/useResize';
import { FilterIcon } from 'shared/utils/icons';
import {
  FilterWrapper,
  Btn,
  Filters,
  FiltersText,
} from './NoticesFilters.styled';

const NoticesFilters = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAgeMenuOpen, setAgeIsMenuOpen] = useState(false);
  const [isGenderMenuOpen, setGenderIsMenuOpen] = useState(false);
  const [screenWidth] = useWindowSize();

  const filtersToggle = e => {
    if (e.currentTarget.id === 'By age') {
      setAgeIsMenuOpen(prevState => !prevState);

      return;
    }

    if (e.currentTarget.id === 'By gender') {
      setGenderIsMenuOpen(prevState => !prevState);

      return;
    }

    setAgeIsMenuOpen(false);
    setGenderIsMenuOpen(false);
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <FilterWrapper>
      <Btn type="button" onClick={filtersToggle} isOpen={isMenuOpen}>
        {screenWidth >= 768 && 'Filter'} <FilterIcon />
      </Btn>

      <Filters
        isOpen={isMenuOpen}
        isAgeMenuOpen={isAgeMenuOpen}
        isGenderMenuOpen={isGenderMenuOpen}
      >
        <FiltersText>Filters</FiltersText>
        <FilterSubMenu
          isAgeMenuOpen={isAgeMenuOpen}
          isGenderMenuOpen={isGenderMenuOpen}
          toggleMenu={filtersToggle}
        />
      </Filters>
    </FilterWrapper>
  );
};

export default NoticesFilters;
