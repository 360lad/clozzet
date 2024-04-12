import Footer from "../components/Footer"
import Nav from "../components/Nav"

function Layout({children}){
    return(
        <div className="flex flex-col ">
            <Nav/>
            <main className=" flex-1 min-h-[100vh]">
                {children}
            </main>
          <Footer/>
        </div>
    )
}
export default Layout