import {
  ChevronDownIcon,
  ChevronUpIcon,
  RoundIcon,
  CheckRoundIcon,
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
} from './FilterSubMenu.styled';

const ageFilterData = ['3-12 m', '1 year', '2 year'];
const genderFilterData = ['female', 'male'];

const FilterSubMenu = ({ isAgeMenuOpen, isGenderMenuOpen, toggleMenu }) => {
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
            <ItemText key={item}>
              <ItemCheckbox type="checkbox" />
              <Icon isShown={isAgeMenuOpen}>
                <RoundIcon />
              </Icon>
              <CheckedIcon isShown={isAgeMenuOpen}>
                <CheckRoundIcon />
              </CheckedIcon>
              {item}
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
              <ItemCheckbox type="checkbox" />
              <Icon isShown={isGenderMenuOpen}>
                <RoundIcon />
              </Icon>
              <CheckedIcon isShown={isGenderMenuOpen}>
                <CheckRoundIcon />
              </CheckedIcon>
              {item}
            </ItemText>
          ))}
        </GenderSubMenu>
      </Menu>
    </>
  );
};

export default FilterSubMenu;
