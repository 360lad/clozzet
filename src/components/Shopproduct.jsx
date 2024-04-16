// import jeans from "../assets/images/jeans.png"


function Shopproduct({img,title,price,cart,setCart}){
    const handleAddToCart=(e,product)=>{
if(e.target.textcontent.toLowerCase()==="add to cart"){
    setCart(prev=>[...prev,product]) ;{
        e.target.textcontent==="Remove from Cart"

    }
}
    }
    return(
<div className="flex flex-wrap m-[1em]">
    
    <div className=" group ">
<div className="w-[250px] h-[300px] bg-[#f5f0f0] flex justify-center items-center object-contain p-[1em] m-[1em]">
    <img className="object-contain" src={img} alt="" /></div>
    <div>
<button onClick={e=>handleAddToCart(e,{img,title,price})}  className="bg-[#45C9A1] rounded  p-[1em] text-[white] w-[80%] justify-center items-center hidden group-hover:block">Add to Cart</button>
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