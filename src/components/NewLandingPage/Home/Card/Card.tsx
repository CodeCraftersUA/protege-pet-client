import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Card.styles.css";
import BannerAdote from "../../../assets/adote_pet.jpg";
import BannerDog from "../../../assets/dog_content.jpg";
import BannerDogFunny from "../../../assets/dog_banner_rounded.jpg";

const Card = () => {

    return (
        <>
            <div className="container-md">
                <p className="fs-1 text-center my-5 titlePet">
                    Como você pode nos ajudar?
                </p>
                <div className="card-group">
                    <div className="card mx-2 border border-2 border-warning zoom">
                        <img src={BannerAdote} className="card-img-top" alt="Cadastre-se" />
                        <div className="card-body shadow-lg">
                            <h5 className="card-title text-center">ADOTE</h5>
                            <p className="card-text">
                                Se você deseja ter um pet, cadastre-se e verifique como proceder para uma adoção responsável. 
                            </p>
                            <div className="container-md text-center my-3"><button type="button" className="btn btn-outline-warning">Saiba mais</button></div>
                        </div>
                    </div>
                    <div className="card mx-2 border border-2 border-warning zoom">
                        <img src={BannerDogFunny} className="card-img-top" alt="Palm Springs Road" />
                        <div className="card-body shadow-lg">
                            <h5 className="card-title text-center">SEJA UM ASSOCIADO</h5>
                            <p className="card-text">
                                Ao se tornar um associado, você nos ajuda a manter a ideia materializada ao fornecer doações.
                            </p>
                            <div className="container-md text-center my-3"><button type="button" className="btn btn-outline-warning">Saiba mais</button></div>
                        </div>
                    </div>
                    <div className="card mx-2 border border-2 border-warning zoom">
                        <img src={BannerDog} className="card-img-top" alt="Palm Springs Road" />
                        <div className="card-body">
                            <h5 className="card-title text-center">PROTEJA</h5>
                            <p className="card-text">
                                Ao observar a existência de algum pet perdido, reporte para nós. Vamos verificar a possibilidade de 
                                resgata-lo o quanto antes.
                            </p>
                            <div className="container-md text-center my-3"><button type="button" className="btn btn-outline-warning">Saiba mais</button></div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mb-0 mt-5 pt-5" />
        </>
    );
};

export default Card;