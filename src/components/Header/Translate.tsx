import React from "react";
import { useAppDispatch } from "../../redux/store";
import { changeLang } from "../../redux/slice/LangSlice";
import { ELang } from "../../common/enum/lang";

interface TranslateProps {
  type: number;
  setShowSide: React.Dispatch<React.SetStateAction<boolean>>;
}

const Translate: React.FC<TranslateProps> = ({ type, setShowSide }) => {
  const dispatch = useAppDispatch();

  const handleChangeLang = (l: number) => {
    dispatch(changeLang(l));
    setShowSide(false);
  };

  return (
    <div className="header-translate">
      <button
        className={`translate-action ${
          type === ELang.VN ? "translate-action--active" : ""
        }`}
        onClick={() => handleChangeLang(ELang.VN)}
      >
        VN
      </button>
      <button
        className={`translate-action ${
          type === ELang.ENG ? "translate-action--active" : ""
        }`}
        onClick={() => handleChangeLang(ELang.ENG)}
      >
        ENG
      </button>
    </div>
  );
};

export default Translate;
