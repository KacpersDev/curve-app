import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import Login from "../components/auth/login/Login"

export default function Home() {
    return(
        <div>
           <Header/>
           <Login/>
           <Footer/> 
        </div>
    )
}