import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Layout from './Layout'
import SchoolsData from './SchoolsData';
import Notifications from './Notifications'
const Main=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout></Layout>}>
                    <Route index element={
                        <>  
                            <h1>Home</h1>
                        </>
                    }></Route>
                    <Route path='/notifications' element={<Notifications></Notifications>}>

                    </Route>
                </Route>
                
                <Route path='/schools' element={<SchoolsData></SchoolsData>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Main;