import Collection from "./Collection";
import mens from "../assets/images/mens.png";
import watch from "../assets/images/watches.png";
import handbags from "../assets/images/hbags.png";
import ladies from "../assets/images/ladies.png";

function Collections() {
  return (
    <div>
      <div className="grid grid-cols-2 grid-row-3 gap-[1em]">
        <div className=" bg-[#F0EFEF] row-start-1 row-end-3">
          <Collection design="Mens Collection" img={mens} />
        </div>
        <div className=" bg-[#E3F9FB]">
          <Collection design="Luxury watches" img={watch} />
        </div>

        <div className=" bg-[#FFF1F1]">
          <Collection design="Designer Handbags" img={handbags} />
        </div>
        <div className="bg-[#FEDBDB] row-start-2 row-end-4">
          <Collection design="Ladies Collection " img={ladies} />
        </div>
      </div>
    </div>
  );
}
export default Collections;
