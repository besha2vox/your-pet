import PropTypes from 'prop-types';
//import s from './newsFilter.module.scss';
import {SearchComponent, SearchInput} from './NewsFilter.styled';
import { SearchIcon } from 'shared/utils/icons';


export default function NewsFilter({
  input,
  onChange,
  resetInput,
  inputValue,
}) 

{
  return (
    <SearchComponent >
      <SearchInput
       
        type="text"
        placeholder="Search"
        name="filter"
        onInput={onChange}
        value={input}
      />
      {inputValue && (
        <div onClick={() => resetInput()}>
          <SearchIcon id="icon-reset-search" />
        </div>
      )}
      {!inputValue && <SearchIcon id="icon-search-news" />}
    </SearchComponent>
  );
}

NewsFilter.propTypes = {
  input: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};