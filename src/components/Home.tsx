//ページ遷移をreact-router-domで実現
//Headerだけは固定で出す
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom"
import SignIn from './SignIn';
import Header from './Header ';
import Profile from "./Profile";
import Search from "./Search";
import About from "./About";
import ContactForm from "./Contact";
import Footer from "./Footer";

//BrowserRouterの中でRouteを設置、Reactアプリの中で一度しか使えないのでここでページ遷移を管理
//v6なので参考サイトとやり方が異なってくるので、詰まったらv6の資料読んだ方が良い
const Home = () =>{
    return(
        <div> 
            
            <BrowserRouter>
            <header>
                <Header />
            </header>

             <Routes>
                <Route path="/" element={<Search />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/profile" element={<Profile />} />
             </Routes>

            <footer>
                <Footer />
            </footer>
            </BrowserRouter>
             
        </div>    
    )
}

export default Home;