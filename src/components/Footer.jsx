function Footer(){
    return(
    <footer className="bg-[#f5f0f0]">
        <div className="flex  items-center flex-col flex-wrap px-[3em] gap-10 sm:p-0 ">
            <div>
        <h1 className="text-[2em]">Subscribe &get upto 30% OFF</h1>
        </div>
        <div className="gap-[1em]">
        <input className="border border-[#45C9A1] rounded-full p-[1em] w-[100%]" type="text" placeholder="Enter  your email" />
        <button className="border rounded-full p-[1em] bg-[#45C9A1] text-white w-[100%] ">Subscribe</button>
        </div>
        </div>
        <div className="flex px-[2em] justify-evenly flex-col sm:flex-row m-[4em]  gap-[2em]">
        <div>
            <img src="src/assets/images/logo.svg" alt="logo" />
            <p className="w-60">Offering a unique and
stylish perspective on
fashion is our number
one priority. Confuse
your mirror by our
trendy outfits</p>
        </div>
        <div>
            <h2>Store</h2>
            <p>Women’s Fashion</p>
            <p>Men’s Fashion</p>
            <p>Store Sale</p>
            <p>Collections</p>
        </div>
        <div>
            <h2>Help</h2>
            <p> Customer</p>
            <p>  Support</p>
            <p>Terms& Conditions</p>
            <p>Privacy Policy</p>
          

CollectionsTrack Your Order
        </div>
        <div>
            <h2>Contact us</h2>
            <p>contact@clozzet.com</p>
            <p className="flex"><img className="w-[25px]" src="src/assets/images/phone.png" alt="phone" />254-700-333-333</p>
            <h2>Follow us</h2>
            <p className="flex gap-[20px]">
                <img className="w-[25px]" src="src/assets/images/facebook.png" alt="facebook" />
                <img className="w-[25px]" src="src/assets/images/instagram.png" alt="instagram" />
                <img className="w-[25px]" src="src/assets/images/twitter.png" alt="twiter" />
            </p>
        </div>
        </div>
    </footer>
    )
}
export default Footer