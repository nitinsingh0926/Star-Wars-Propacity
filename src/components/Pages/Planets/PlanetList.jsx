import Navbar from "../navbar";
import { useEffect, useState } from "react";
import axios from "../../MainPage/axiosApi";
import Instance from "./instance";
import { useNavigate } from "react-router-dom";

function PlanetList() {
  const [myData, setData] = useState([]);
  const [isError, setIsError] = useState("");
  const navigate = useNavigate();
const handleNavigate = (val) => {
  if(val == "grid"){
    navigate("/planets")
  }else{
    navigate("/planetList")
  }
}


  const getApiData = async () => {
    try {
      const res = await axios.get("/planets/");
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
      {isError ? console.log("Error In Api Call") : ""}
      <Navbar name={"Planets"} handleNavigate={handleNavigate} />
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
export default PlanetList;