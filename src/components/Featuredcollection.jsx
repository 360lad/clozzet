// import Leatherjacket from"../assets/images/leather-jacket.png"
// import Featuredcollections from "./Featuredcollections"

function Featuredcollection({img,title,price,cart,setCart}){
return(
<div className=" group w-[400px] h-[400px]">
<div className="w-[300px] h-[300px] bg-[#f5f0f0] flex justify-center items-center object-contain p-[2em]">
    <img className="object-contain" src={img} alt="" /></div>
    <div>
<button className="bg-[#45C9A1] rounded  p-[1em] text-[white] w-[88%] justify-center hidden group-hover:block">Add to Cart</button>
</div>
<div>

<p>{title}</p>
<p>{price}</p>

</div>

</div>
    
)
}

export default Featuredcollection