import Navbar from "./Navbar"
import Footer from "./Footer"
import {Outlet} from 'react-router-dom'
const Layout=()=>{
    return(
        <>  
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    )
}
export default Layout;