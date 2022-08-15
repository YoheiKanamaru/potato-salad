//ページ遷移をreact-router-domで実現
//Headerだけは固定で出すのでHeader側で何をmainで出すかを管理する
import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import SignIn from './SignIn';
import Header from './Header ';
import Profile from "./Profile";
import Search from "./Search";
import About from "./About";
import ContactForm from "./Contact";
import Footer from "./Footer";
import SignUp from "./SignUp";
import HomeTop from "./HomeTop";
import SignUpOK from "./SignUpOK";
import Admin from "./Admin";

//ユーザーのサインイン/サインアウト監視のためにAuthProviderを準備
//AuthProvideで監視したいrouteをAuthProviderで囲む
import { AuthProvider } from '../AuthContext';

//BrowserRouterの中でRouteを設置、Reactアプリの中で一度しか使えないのでここでページ遷移を管理
//v6なので参考サイトとやり方が異なってくるので、詰まったらv6の資料読んだ方が良い
const Home = () =>{

    return(
        <div> 
            
            <BrowserRouter>
            <header>
                <Header />
            </header>

            <AuthProvider>
             <Routes>
                <Route path="/" element={<HomeTop />} />
                <Route path="/search" element={<Search />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/signup/signupok" element={<SignUpOK />} />
                <Route path="/admin" element={<Admin />} />
             </Routes>
             </AuthProvider>

            <footer>
                <Footer />
            </footer>
            </BrowserRouter>
             
        </div>    
    )
}

export default Home;