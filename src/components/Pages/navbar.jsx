import { useNavigate } from "react-router-dom";
function Navbar({name,link,link1}){
  const navigate = useNavigate();
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <h1>{name}</h1>
            <form className="d-flex">
              <button className="btn btn-outline-success m-2" onClick={() => navigate(link)}>Grid</button>
              <button className="btn btn-outline-success m-2" onClick={() => navigate(link1)}>list</button>
            </form>
        </div>
      </nav>
      );
}
export default Navbar;