import './navbar.scss'
import {Link} from 'react-router-dom'
const Navbar = () => {
    return(
        <div className="navbar">
            <div className="navbar__items">
                <Link to="/about">Main</Link>
            </div>
            <div className="navbar__items">
                <Link to="/post">Posts</Link>
            </div>
        </div>
    )
}

export default Navbar;