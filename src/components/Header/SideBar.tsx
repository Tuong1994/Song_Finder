import React from "react";
import { IListQuery } from "../../common/interface/Base";
import { Langs } from "../../common/lang";
import SearchInput from "./SearchInput";
import Translate from "./Translate";

interface SideBarProps {
  type: number;
  langs: Langs;
  showSide: boolean;
  query: IListQuery;
  setQuery: React.Dispatch<React.SetStateAction<IListQuery>>;
  setShowSide: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar: React.FC<SideBarProps> = ({
  type,
  langs,
  showSide,
  query,
  setShowSide,
  setQuery,
}) => {
  return (
    <React.Fragment>
      <div
        className={`header-side-backdrop ${
          showSide ? "header-side-backdrop--active" : ""
        }`}
        onClick={() => setShowSide(false)}
      ></div>
      <div
        className={`header-side-actions ${
          showSide ? "header-side-actions--active" : ""
        }`}
      >
        <SearchInput langs={langs} query={query} setQuery={setQuery} />
        <Translate type={type} setShowSide={setShowSide} />
      </div>
    </React.Fragment>
  );
};

export default SideBar;
