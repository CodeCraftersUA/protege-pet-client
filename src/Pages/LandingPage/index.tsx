import { Footer } from "../../components/LandingPage/Footer";
import { Header } from "../../components/LandingPage/Header";
import { Carousel } from "../../components/LandingPage/Carousel";
import { Content } from "../../components/LandingPage/Content";
import UsersList from "../UsersList";
import AnimalsList from "../../components/AnimalsList";

const LandingPage = () => {
    return (
        <>
            <Header />
            <Carousel />
            <Content />
            <Footer />
        </>
    )
}

export default LandingPage;