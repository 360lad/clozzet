import { RiDeleteBinFill } from "react-icons/ri";
import { useEffect, useState } from "react";

function Cartproduct({img,title,price,cart}){
    const [cartCopy,setCartCopy]=useState([])
    useEffect(()=>{
        setCartCopy([...cart])
    },[])
    function handleCartActions(action,product){
        if(action==="increment"){
            setCartCopy(prev=>[...prev,product])
        }
    }
    return(
        
        <div>
              <div className="flex items-center justify-evenly ">
           
                
            {console.log(cartCopy)}
                        
                        <div className="h-[100px] w-[100px]"> <img src={img} alt="" /></div>
                    <div>
                        <h2>{title}</h2>
                        
                        <h4>{price}</h4>
                    </div>
                
                <div className="flex items-center">
                    <button className="border rounded p-[1em] ">+</button>
                    <h2>0</h2>
                    <button className="border rounded p-[1em] ">-</button>
                    </div>
                   <div className="flex items-center gap-[2em]">
                    <h2>{price}</h2>
                    <p><RiDeleteBinFill />
</p>
</div>
                    </div> 
            </div>
        
            
                        

            
  

    )
}
export default Cartproduct