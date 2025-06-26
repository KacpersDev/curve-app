import Header from "../components/header/Header";
import Leaderboards from "../components/leaderboards/Leaderboards";
import Body from "../components/body/Body";
import Footer from "../components/footer/Footer";

export default function Home() {
    return(
        <>
            <Header/>
            <Body/>
            <Leaderboards/>
            <Footer/>
        </>
    )
}