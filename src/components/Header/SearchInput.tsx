import React from "react";
import { FaSearch } from "react-icons/fa";
import { Langs } from "../../common/lang";
import { IListQuery } from "../../common/interface/Base";
import Input from "../Fields/Input";

interface SearchInputProps {
  langs: Langs;
  query: IListQuery;
  setQuery: React.Dispatch<React.SetStateAction<IListQuery>>;
}

const SearchInput: React.FC<SearchInputProps> = ({
  langs,
  query,
  setQuery,
}) => {
  return (
    <Input
      placeholder={langs?.common.form.placeholder.search}
      suffix={<FaSearch />}
      value={query.term}
      onChange={(e) => setQuery({ ...query, term: e.target.value })}
    />
  );
};

export default SearchInput;
