import { Link,NavLink } from 'react-router-dom';
import './index.scss'
import LogoS from '../../assets/images/fan.png';
// import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleList, faSearch, faRectangleTimes, faCircle, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () =>{
 return <>
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img className="bigLogo" src={LogoS} alt="sorry" />
            
        </Link>
       
        <nav>
            <div className="top1">
            <NavLink exact="true" activeclassname="active" className="aboutLink" to="/">
            <FontAwesomeIcon icon={faRectangleList} color="#5b6b77" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/" className="homeLink">
                <FontAwesomeIcon icon={faSearch} color="#5b6b77" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/skills" className="skillsLink">
                <FontAwesomeIcon icon={faRectangleTimes} color="#5b6b77" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/contact" className="contactLink">
            
                <FontAwesomeIcon icon={faCircle} color="#5b6b77" />
            </NavLink>
            </div>
            <div className="bottom">
            <NavLink exact="true" activeclassname="active" to="/contact" className="contactLink">
            
            <FontAwesomeIcon icon={faArrowRightLong} color="#5b6b77" />
        </NavLink>
            </div>
        </nav>
    </div>    
 
 
 </>
}

export default Sidebar;