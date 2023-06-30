import "./Home.style.css"
import UserList from "../ProtectorList/ProtectorList";
import Header from "./Header/Header";
import Carousel from "./Carousel/Carousel";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import { Link, Router } from "react-router-dom";
import Register from "../Login/Register/Register";
import SideBar from "../SideBar/SideBar";

const Home = () => {
    

    return (
        <>
            <Header />
            <Carousel />
            <Content />
            <Footer />
        </>
    );
};

export default Home;