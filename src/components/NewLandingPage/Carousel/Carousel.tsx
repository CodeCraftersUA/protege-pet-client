import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Carousel.styles.css"
import BannerAssociado from "../../../assets/banner_associado.png"
import BannerAdote from "../../../assets/banner_adote_pet.png"

const Carousel = () => {

    return (
        <>
            <div className="justify-content-center">
                <div className="mt-5 pt-3">
                    <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active carouselImageSize">
                                <img src={BannerAssociado} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={BannerAdote} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carousel;