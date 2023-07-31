import Navbar from "../navbar";
import axios from '../../MainPage/axiosApi'
import { useState, useEffect } from "react";
import EpisodeList from "./episodeList";
// import './episodegrid.css'
function ListEpisode() {
    const [Films , setFilms] = useState([]);
    const [isError,setIsError] =useState("")
    const getFilmsApiData = async () => {
        try{
          const res = await axios.get("/films/");
          setFilms(res.data.results);
        }catch(err){
          setIsError(err.message)
        }
      }

      useEffect(() => {
        getFilmsApiData();
      },[])
  return (
    <div className="listAll">
    <Navbar name={"Films"} link={"/films"} link1={"/listEpisodes"} />
    {isError !== "" && <h2>{isError}</h2>}
    <div className="list">
    {Films[0] ?  //Loading animation for api
          ""
          : 
           <>
           <div className="spinner-border" role="status"></div>
           <span >Loading...</span>
           </>
          }
    <EpisodeList Films={Films} setFilms={setFilms}/>
    </div>
    </div>
  );
}
export default ListEpisode;
