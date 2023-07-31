import Navbar from "../navbar";
import { useEffect, useState } from "react";
import axios from "../../MainPage/axiosApi";
import CommonContent from "../commanContent";
function Vehicles() {
  const [myData, setData] = useState([]);
  const [isError, setIsError] = useState("");
  const getApiData = async () => {
    try {
      const res = await axios.get("/vehicles/");
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
      <Navbar name={"Vehicles"} link={"/vehicles"} link1={"/VehiclesList"} />
      {myData[0] ? 
            "" //Loading animation for api
           : 
           <>
            <div className="spinner-border" role="status">
            </div>
            <span > Fetching data from StarWar Api</span>
            </>
          }
      <CommonContent isError={isError} myData={myData} index={4} />
    </>
  );
}
export default Vehicles;
