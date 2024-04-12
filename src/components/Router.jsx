import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Layout from "../pages/Layout"
import Shop from "../pages/Shop"

function Router(){
return(
    <BrowserRouter>
<Routes>

    <Route path="/" element= {<Layout><Home/></Layout>}/> 
    <Route path="/Shop" element={<Layout><Shop/></Layout>}/>
   

<Route path="*" element={<Layout><NotFound/></Layout>}/>

</Routes>
</BrowserRouter>
)
}
export default Router

