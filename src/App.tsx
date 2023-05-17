import React from "react";
import { RootState, useAppDispatch } from "./redux/store";
import { getSongByTerm } from "./redux/services/SongService";
import { IListQuery } from "./common/interface/Base";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import Home from "./page/Home";
import useDebounce from "./common/hooks/useDebounce";
import "./style/main.scss";
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC<{}> = () => {
  const { songs } = useSelector((state: RootState) => state.SongReducer);

  const [query, setQuery] = React.useState<IListQuery>({ term: "eminem" });

  const [showSide, setShowSide] = React.useState<boolean>(false);

  const dispatch = useAppDispatch();

  const debounce = useDebounce(query.term ?? "");

  // Refetch when search text is change
  React.useEffect(() => {
    dispatch(getSongByTerm({ term: debounce }));
  }, [debounce]);

  // Close side bar when search is complete
  React.useEffect(() => {
    if (!songs.loading && showSide) setShowSide(false);
  }, [songs.loading]);

  return (
    <React.Fragment>
      <Header
        query={query}
        setQuery={setQuery}
        showSide={showSide}
        setShowSide={setShowSide}
      />
      <Home songs={songs} />

      <ToastContainer />
    </React.Fragment>
  );
};

export default App;
