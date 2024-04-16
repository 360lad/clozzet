import Footer from "../components/Footer"
import Nav from "../components/Nav"
function Layout({children, cart, setCart}){
    
    return(
        <div className="flex flex-col ">
            <Nav cart={cart} setCart={setCart}  />
            <main className=" flex-1 min-h-[100vh]">
                {children}
            </main>
          <Footer/>
        </div>
    )
}
export default Layout