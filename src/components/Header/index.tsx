import React from "react";
import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IListQuery } from "../../common/interface/Base";
import Translate from "./Translate";
import SearchInput from "./SearchInput";
import Side from "./SideBar";

interface HeaderProps {
  query: IListQuery;
  showSide: boolean;
  setQuery: React.Dispatch<React.SetStateAction<IListQuery>>;
  setShowSide: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({
  query,
  showSide,
  setQuery,
  setShowSide,
}) => {
  const { type, langs } = useSelector((state: RootState) => state.LangReducer);

  return (
    <header className="header">
      <div className="header-logo">Music.</div>
      <div className="header-features">
        <div className="features-item">
          <SearchInput langs={langs} query={query} setQuery={setQuery} />
          <Translate type={type} setShowSide={setShowSide} />
        </div>

        <button className="features-side" onClick={() => setShowSide(true)}>
          <FaBars />
        </button>
      </div>

      {/* Responsive side bar */}
      <Side
        type={type}
        langs={langs}
        showSide={showSide}
        query={query}
        setQuery={setQuery}
        setShowSide={setShowSide}
      />
    </header>
  );
};

export default Header;
