import './index.scss';
import Sidebar from '../Sidebar/index.js'
import Midpage from '../Midpage/index.js'
import RightCards from '../RightCards/index.js'
const Layout = ()=>{
    return <>
    <div className="app">
        <Sidebar/>
        
        <Midpage/>
        <RightCards/>
       

    </div>

    </>
}


export default Layout;



