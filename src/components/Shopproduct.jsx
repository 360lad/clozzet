import jeans from "../assets/images/jeans.png"


function Shopproduct({img,title,price}){
    return(
<div>
    
    <div className=" group ">
<div className="w-[300px] h-[300px] bg-[#f5f0f0] flex justify-center items-center object-contain p-[2em] m-[1.5em]">
    <img className="object-contain" src={img} alt="" /></div>
    <div>
<button className="bg-[#45C9A1] rounded  p-[1em] text-[white] w-[80%] justify-center items-center hidden group-hover:block">Add to Cart</button>
</div>
<div>

<p>{title}</p>
<p>{price}</p>

</div>

</div>
    </div>

    )
}
export default Shopproduct