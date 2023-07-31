import DropdownList from "../Pages/Films/DropDown/Dropdown";
import Users from ".././../assets/Users.png";
import '../Pages/common.css'
function CommonContent({isError,myData,index}) {
  {
    var Array = [
      "https://cdn-icons-png.flaticon.com/512/219/219983.png",
      "https://img.freepik.com/premium-psd/imagery-imaginary-planets-your-cosmic-image-ai-generated_103740-2416.jpg?w=2000",
      "https://www.nicepng.com/png/detail/227-2279199_elite-pirate-metroid-fusion-alien-species.png",
      "https://clipart-library.com/images/8ixKx8XLT.png",
      "https://w7.pngwing.com/pngs/591/74/png-transparent-cars-towmater-art-cars-mater-national-championship-lightning-mcqueen-pixar-cars-vintage-car-car-vehicle-thumbnail.png"
    ];
  }

  return (
    <>
      {isError !== "" && <h2>{isError}</h2>} 
      <div className="grid">
        {myData.map((ele) => {
          const { name } = ele;
          return (
            <div className="card" key={crypto.randomUUID()}>
              <img
                src={Array[index]}
                className="card-img-top"
                alt={Array[index]}
                 />
            <div className="card-body" >
                <div className="flex-item-left">
                  <img src={Users} id="movieIcon" />
                </div>
                <div className="flex-item-middle">
                  <h5 className="title">{name} </h5>
                </div>
                <div className="flex-item-right">
                  <DropdownList title={name} />
                </div>
              </div>
              </div>
          );
        })}
      </div>
    </>
  );
}

export default CommonContent;
