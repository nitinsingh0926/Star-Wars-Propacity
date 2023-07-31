import GridEpisode from "./episodeGrid";
import Navbar from "../navbar";
import axios from "../../MainPage/axiosApi";
import { useState } from "react";
import "./episodegrid.css";
import { useEffect } from "react";
function FilmsEpisode() {
  const [Films, setFilms] = useState([]);
  const [isError, setIsError] = useState("");
  const getFilmsApiData = async () => {
    try {
      const res = await axios.get("/films/");
      setFilms(res.data.results);
    } catch (err) {
      setIsError(err.message);
    }
  };
  useEffect(() => {
    getFilmsApiData();
  }, []);

  return (
    <>
      <Navbar name={"Films"} link={"/films"} link1={"/listEpisodes"} />
      {isError !== "" && <h2>{isError}</h2>}
      <div className="film-grid">
        {Films[0] ? ( //Loading animation for api
          ""
        ) : (
          <>
            <div className="spinner-border" role="status"></div>
            <span> Fetching Data From Api</span>
          </>
        )}
        <GridEpisode Films={Films} />
      </div>
    </>
  );
}
export default FilmsEpisode;
