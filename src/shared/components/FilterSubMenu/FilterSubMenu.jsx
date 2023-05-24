import PropTypes from 'prop-types';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  RoundIcon,
  CheckRoundIcon,
  PawPrintIcon,
} from 'shared/utils/icons';
import {
  Menu,
  MenuBtn,
  AgeSubMenu,
  GenderSubMenu,
  Icon,
  CheckedIcon,
  ItemText,
  ItemCheckbox,
  KotikiBtn,
} from './FilterSubMenu.styled';

const ageFilterData = [
  { text: '3-12 m', filter: '3m-12m' },
  { text: '1 year', filter: '1y' },
  { text: '2 year', filter: '2y' },
];
const genderFilterData = ['female', 'male'];

const FilterSubMenu = ({
  isAgeMenuOpen,
  isGenderMenuOpen,
  toggleMenu,
  setGenderFilter,
  setAgeFilter,
  setKotikiFilter,
  age,
  gender,
}) => {
  return (
    <>
      <Menu>
        <MenuBtn type="button" id="By age" onClick={toggleMenu}>
          {!isAgeMenuOpen && <ChevronDownIcon />}
          {isAgeMenuOpen && <ChevronUpIcon />}
          By age
        </MenuBtn>
        <AgeSubMenu isShown={isAgeMenuOpen}>
          {ageFilterData.map(item => (
            <ItemText key={item.text}>
              <ItemCheckbox
                type="checkbox"
                checked={age === item.filter}
                onChange={() =>
                  setAgeFilter(age === item.filter ? '' : item.filter)
                }
              />
              {age === item.filter && (
                <CheckedIcon isShown={isAgeMenuOpen}>
                  <CheckRoundIcon />
                </CheckedIcon>
              )}
              {age !== item.filter && (
                <Icon isShown={isAgeMenuOpen}>
                  <RoundIcon />
                </Icon>
              )}

              {item.text}
            </ItemText>
          ))}
        </AgeSubMenu>
      </Menu>
      <Menu>
        <MenuBtn type="button" id="By gender" onClick={toggleMenu}>
          {!isGenderMenuOpen && <ChevronDownIcon />}
          {isGenderMenuOpen && <ChevronUpIcon />}
          By gender
        </MenuBtn>
        <GenderSubMenu isShown={isGenderMenuOpen}>
          {genderFilterData.map(item => (
            <ItemText key={item}>
              <ItemCheckbox
                type="checkbox"
                checked={gender === item}
                onChange={() => setGenderFilter(gender === item ? '' : item)}
              />
              {gender === item && (
                <CheckedIcon isShown={isGenderMenuOpen}>
                  <CheckRoundIcon />
                </CheckedIcon>
              )}
              {gender !== item && (
                <Icon isShown={isGenderMenuOpen}>
                  <RoundIcon />
                </Icon>
              )}

              {item}
            </ItemText>
          ))}
        </GenderSubMenu>
      </Menu>
      <Menu>
        <KotikiBtn type="button" onClick={() => setKotikiFilter(true)}>
          <PawPrintIcon />
          IT-kotiki
        </KotikiBtn>
      </Menu>
    </>
  );
};

FilterSubMenu.propTypes = {
  isAgeMenuOpen: PropTypes.bool.isRequired,
  isGenderMenuOpen: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  setGenderFilter: PropTypes.func.isRequired,
  setAgeFilter: PropTypes.func.isRequired,
};

export default FilterSubMenu;
