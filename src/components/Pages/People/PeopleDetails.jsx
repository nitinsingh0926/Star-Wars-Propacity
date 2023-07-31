import Navbar from "../navbar";
import { useEffect, useState } from "react";
import axios from "../../MainPage/axiosApi";
// import '../common.css'
import CommonContent from "../commanContent";
function People() {
  const [myData, setData] = useState([]);
  const [isError, setIsError] = useState("");

  const getApiData = async () => {
    try {
      const res = await axios.get("/people/");
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
      <Navbar name={"People"} link={"/people"} link1={"/PeopleListView"} />
      {myData[0] ? 
            "" //Loading animation for api
           : 
           <>
            <div className="spinner-border" role="status">
              
            </div>
            <span > Fetching Data From Star-war Api</span>
            </>
          }
      <CommonContent isError={isError} myData={myData} index={0} />
    </>
  );
}
export default People;
