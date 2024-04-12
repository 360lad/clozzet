import mens from "../assets/images/mens.png"
import { IoMdArrowDropright } from "react-icons/io";

function Collection({design,img}) {
  return (
    <div>
        <div className="flex items-end justify-center ">
      <div>
        <p>Casual Collection</p>
        <h3>{design}</h3>
        <h5> Shop Now <IoMdArrowDropright />
</h5>
      </div>
      <div>
        <img  src={img} alt="" />
      </div>
      </div>
    </div>
  );
}
export default Collection
