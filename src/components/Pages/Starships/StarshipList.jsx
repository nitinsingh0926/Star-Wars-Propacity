import Navbar from "../navbar";
import { useEffect, useState } from "react";
import axios from "../../MainPage/axiosApi";
import Instance from "./instance";
// import '../common.css'

function StarshipList() {
  const [myData, setData] = useState([]);
  const [isError, setIsError] = useState("");
  const getApiData = async () => {
    try {
      const res = await axios.get("/starships/");
      setData(res.data.results);
    } catch (err) {
      setIsError(err.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
    {isError ? "Error In Api Call" : ""}
      <Navbar name={"Starships"} link={"/starships"} link1={"/StarshipList"} />
      {myData[0] ? 
            "" //Loading animation for api
           : 
           <>
            <div className="spinner-border" role="status">
              
            </div>
            <span > Loading...</span>
            </>
          }
      <Instance myData={myData} isError={isError}/>
    </>
  );
}
export default StarshipList;