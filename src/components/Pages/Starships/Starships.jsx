import Navbar from "../navbar";
import { useEffect, useState } from "react";
import axios from "../../MainPage/axiosApi";
// import '../common.css'
import CommonContent from "../commanContent";
function Starships() {
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
      <Navbar name={"Starships"} link={"/starships"} link1={"/StarshipList"} />
      {myData[0] ? 
            "" //Loading animation for api
           : 
           <>
            <div className="spinner-border" role="status">
              
            </div>
            <span > Fetching Data From StarWar Api</span>
            </>
          }
      <CommonContent isError={isError} myData={myData} index={3}/>
    </>
  );
}
export default Starships;
