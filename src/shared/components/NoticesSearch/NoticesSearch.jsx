import { SearchIcon, CrossIcon } from 'shared/utils/icons';
import { useState } from 'react';
import { Form, Input, CleareUpBtn, SubmitBtn } from './NoticesSearch.styled';

const NoticesSearch = ({ onFormSubmit }) => {
  const [query, setQuery] = useState('');

  const submitHandler = e => {
    e.preventDefault();

    onFormSubmit(query);
  };

  const onInputChange = e => {
    const searchQuery = e.target.value;

    setQuery(searchQuery);
  };

  return (
    <Form onSubmit={submitHandler}>
      <Input
        type="text"
        name="query"
        id="searchQquery"
        onChange={onInputChange}
        value={query}
        placeholder="Search"
      />
      <SubmitBtn type="submit" query={query}>
        <SearchIcon />
      </SubmitBtn>
      <CleareUpBtn type="button" onClick={() => setQuery('')} query={query}>
        <CrossIcon />
      </CleareUpBtn>
    </Form>
  );
};

export default NoticesSearch;
