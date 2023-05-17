import React from "react";
import { FaAngleDown, FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ISelectOption } from "../../common/interface/Base";
import useClickOutSide from "../../common/hooks/useClickOutSide";

interface SelectProps {
  value?: ISelectOption;
  options?: ISelectOption[];
  placeholder?: string;
  onChange?(value: number | string): void;
}

const Select: React.FC<SelectProps> = ({
  value,
  options = [],
  placeholder,
  onChange,
}) => {
  const { langs } = useSelector((state: RootState) => state.LangReducer);

  const [isDropdown, setIsDropdown] = React.useState<boolean>(false);

  const [searchText, setSearchText] = React.useState<string>("");

  const [selectValue, setSelectValue] = React.useState<ISelectOption | null>(
    null
  );

  const selectRef = React.useRef<HTMLDivElement | null>(null);

  useClickOutSide(selectRef, setIsDropdown);

  React.useEffect(() => {
    if (value) setSelectValue(value);
  }, [value]);

  const renderValue = () => {
    if (selectValue) return selectValue.label;
    if (searchText !== "") return searchText;
    return "";
  };

  const filterOptions = (options: ISelectOption[]) => {
    if (searchText !== "") {
      return options.filter((op) =>
        op.label.toLowerCase().includes(searchText.toLowerCase())
      );
    } else return options;
  };

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    setSelectValue(null);
  };

  const onSelect = (op: ISelectOption) => {
    setSelectValue(op);
    setSearchText("");
    setIsDropdown(false);
    onChange && onChange(op.value);
  };

  return (
    <div className="input-wrap" ref={selectRef}>
      <div className="wrap-group" onClick={() => setIsDropdown(!isDropdown)}>
        <input
          type="text"
          className="group-control"
          placeholder={placeholder}
          value={renderValue()}
          onChange={onSearch}
        />
        <div className="group-suffix">
          <FaAngleDown />
        </div>
      </div>

      <div
        className={`wrap-dropdown ${isDropdown ? "wrap-dropdown--active" : ""}`}
      >
        {filterOptions(options).length ? (
          filterOptions(options).map((op, idx) => (
            <div
              key={idx}
              className={`dropdown-item ${
                selectValue?.value === op.value ? "dropdown-item-selected" : ""
              }`}
              onClick={() => onSelect(op)}
            >
              <span className="item-title">{op.label}</span>
              {selectValue?.value === op.value && (
                <FaCheck className="item-icon" />
              )}
            </div>
          ))
        ) : (
          <div className="dropdown-empty">{langs?.common.form.empty}</div>
        )}
      </div>
    </div>
  );
};

export default Select;
