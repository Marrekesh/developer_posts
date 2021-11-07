
import Navbar from "../Navbar/Navbar";

import './app.scss'


import {BrowserRouter as Router} from 'react-router-dom'
import About from "../pages/About";
import AppRuote from "../UI/appRouter/AppRoute";

const App = () => {

    return (
        <Router>
            <Navbar/>
            <AppRuote/>
        </Router>

    )
 

}

export default App;