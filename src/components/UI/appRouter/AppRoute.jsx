import {Route, Routes} from 'react-router-dom'
import About from "../../pages/About";
import Posts from '../../pages/Post';
import SinglePost from '../../pages/SinglePost/SinglePost'

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/post" element={<Posts/>}/>
            <Route path="/post/:id" element={<SinglePost/>}/>    
        </Routes>
    )
}

export default AppRoute;