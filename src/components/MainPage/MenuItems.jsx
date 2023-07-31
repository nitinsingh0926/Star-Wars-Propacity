
import { useNavigate } from "react-router-dom";

import "./sidemenu.css";
import MovieIcon from ".././../assets/MovieIcon.png";
import Users from ".././../assets/Users.png";
import Planet from ".././../assets/Planet.png";
import Alien from ".././../assets/Alien.png";
import RocketLaunch from ".././../assets/RocketLaunch.png";
import CarProfile from ".././../assets/CarProfile.png";
function MenuItems({ nameOfMenu,Films,People,Planets,Species,StarShips,Vehicles,isError }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="dropdown">
        <button 
          className="button dropdown-toggle MenuTitle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder" viewBox="0 0 16 16">
   <path d="M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z"/>
  </svg>{nameOfMenu}
        </button>
        <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
          {isError !== "" && <h2>{isError}</h2>}
          {Films[0] ? 
            "" //Loading animation for api
           : 
           <>
            <div className="spinner-border" role="status">
              
            </div>
            <span > Loading...</span>
            </>
          }

          {nameOfMenu == "Films" &&
            Films.map((films, index) => {
              const { title } = films;
              return (
                <li key={index}>
                  <button
                    type="button"
                    className="button"
                    onClick={() => {
                      navigate("/films");
                    }}
                  >
                   <img src={MovieIcon} className="menuLogo"></img> {title}
                  </button>
                </li>
              );
            })}

          {nameOfMenu == "People" &&
            People.map((people, index) => {
              const { name } = people;
              return (
                <li key={index}>
                  <button
                    type="button"
                    className="button"
                    onClick={() => {
                      navigate("/PeopleListView");
                    }}
                  >
                    <img src={Users} className="menuLogo" />{name}
                  </button>
                </li>
              );
            })}

          {nameOfMenu == "Planets" &&
            Planets.map((planets, index) => {
              const { name } = planets;
              return (
                <li key={index}>
                  <button
                    type="button"
                    className="button"
                    onClick={() => {
                      navigate("/planets");
                    }}
                  >
                    <img src={Planet} className="menuLogo"></img>{name}
                  </button>
                </li>
              );
            })}

          {nameOfMenu == "Species" &&
            Species.map((species, index) => {
              const { name } = species;
              return (
                <li key={index}>
                  <button
                    type="button"
                    className="button"
                    onClick={() => {
                      navigate("/species");
                    }}
                  >
                    <img src={Alien} className="menuLogo"></img>{name}
                  </button>
                </li>
              );
            })}

          {nameOfMenu == "Starships" &&
            StarShips.map((starships, index) => {
              const { name } = starships;
              return (
                <li key={index}>
                  <button
                    type="button"
                    className="button"
                    onClick={() => {
                      navigate("/starships");
                    }}
                  >
                    <img src={RocketLaunch} className="menuLogo"></img>{name}
                  </button>
                </li>
              );
            })}

          {nameOfMenu == "vehicles" &&
            Vehicles.map((vehicles, index) => {
              const { name } = vehicles;
              return (
                <li key={index}>
                  <button
                    type="button"
                    className="button"
                    onClick={() => {
                      navigate("/vehicles");
                    }}
                  >
                    <img src={CarProfile} className="menuLogo"></img>{name}
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
export default MenuItems;
