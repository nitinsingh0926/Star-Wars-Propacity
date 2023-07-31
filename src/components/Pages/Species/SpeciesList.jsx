import Navbar from "../navbar";
import { useEffect, useState } from "react";
import axios from "../../MainPage/axiosApi";
import Instance from "./instance";
// import '../common.css'
function SpeciesList() {
  const [myData, setData] = useState([]);
  const [isError, setIsError] = useState("");
  const getApiData = async () => {
    try {
      const res = await axios.get("/species/");
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
      <Navbar name={"Species"} link={"/species/"} link1={"/SpeciesList"} />
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
export default SpeciesList;