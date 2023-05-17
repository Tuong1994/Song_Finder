import React from "react";
import SongCard from "./SongCard";
import { FaSpinner } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { filterSongs } from "../../redux/slice/SongSlice";
import { IResponse } from "../../common/interface/Base";
import { ISong } from "../../common/interface/Song";
import Select from "../../components/Fields/Select";
import Divider from "../../components/Divider";
import useOptions from "../../common/hooks/useOptions";

interface HomeProps {
  songs: IResponse<ISong>;
}

const Home: React.FC<HomeProps> = ({ songs }) => {
  const { langs } = useSelector((state: RootState) => state.LangReducer);

  const [filter, setFilter] = React.useState<number | string>(-1);

  const options = useOptions();

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(filterSongs(filter));
  }, [filter]);

  const onChange = (value: number | string) => setFilter(value);

  return (
    <div className="home">
      {/* Body header */}
      <div className="home-header">
        <h2 className="header-title">
          {langs?.home.title} &#x2768;{songs.resultCount ?? 0}&#x2769;
        </h2>
        <div className="header-control">
          <Select
            value={options.songFilter.find((f) => f.value === filter)}
            options={options.songFilter}
            onChange={onChange}
          />
        </div>
      </div>

      <Divider />

      {/* Song list */}
      {!songs.loading ? (
        songs.resultCount > 0 ? (
          <div className="home-list">
            {songs.results.map((song, idx) => (
              <SongCard key={idx} song={song} langs={langs} />
            ))}
          </div>
        ) : (
          <div className="home-empty">
            <p>{langs?.common.form.empty}</p>
          </div>
        )
      ) : (
        <div className="home-loading">
          <FaSpinner size={60} className="loading-icon" />
        </div>
      )}
    </div>
  );
};

export default Home;
