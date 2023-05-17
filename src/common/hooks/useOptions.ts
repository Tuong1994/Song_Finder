import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { ETrackExplicitness } from "../interface/Song";
import { ISelectOption } from "../interface/Base";

export interface IOptions {
  songFilter: ISelectOption[];
}

const useOptions = () => {
  const { langs } = useSelector((state: RootState) => state.LangReducer);

  const options: IOptions = {
    songFilter: [
      { label: langs?.common.options.all ?? "", value: -1 },
      {
        label: langs?.common.options.explicit ?? "",
        value: ETrackExplicitness.EXPLICIT,
      },
      {
        label: langs?.common.options.notExplicit ?? "",
        value: ETrackExplicitness.NOT_EXPLICIT,
      },
      {
        label: langs?.common.options.cleaned ?? "",
        value: ETrackExplicitness.CLEANED,
      },
    ],
  };

  return options;
};

export default useOptions;
