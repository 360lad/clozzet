import { FaSearch } from "react-icons/fa";

function Hero(){
    return(
        <div className="container"> 
            <div className="flex"> 
            <div className="w-[40%]">
            <h1>Choose the look that <span className="text-[#45C9A1]">suits</span> you best.</h1>
            <p>Every day is a fashion show & the world is your runway.
Clozzet will elevate your wardrobe with the best collections.

Be exclusive, Be Devine, Be yourself. Explore outfits that will
make you comfortably beautiful.True style never dies.
</p>
<div>
    <button className=" border rounded-full p-[2em] text-[white] bg-[#45C9A1]">Shop Now</button>
    <button className=" border rounded-full p-[2em] text-[#45C9A1] bg-[white]" >About Us</button>
    </div>
    <div className=" flex items-center border rounded-full p-[1em] w-[100%]">
    <FaSearch />

        <input className="" type="text" placeholder="Search" />
    </div>
    </div>
    <div>
        <img className="relative bottom-[5em] right-0" src="src/assets/images/hero-background.png" alt="" />
        <img className="absolute top-10 right-20" src="src/assets/images/hero-image.png" alt="" />
        </div>
    </div>
        </div>
    )
}
export default Hero