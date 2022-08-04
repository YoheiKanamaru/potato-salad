//ページ遷移をreact-router-domで実現
//Headerだけは固定で出す
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom"
import SignIn from './SignIn';
import Header from './Header ';

const Home = () =>{
    return(
        <div>
            <Header />
            <BrowserRouter>

            <ul>
                <li>
                <Link to="/signin">Login</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/post">投稿</Link>
                </li>
             </ul>

             <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route path="/about" element={<About />} />
             </Routes>

             </BrowserRouter>
            
        </div>    
    )
}

const About = () =>{
    return(
        <h2>About</h2>
    )
}

export default Home;