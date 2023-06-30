import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Footer.styles.css";
import Instagram from "../../../assets/insta.png";
import Twitter from "../../../assets/twitter.png";
import PetLogo from "../../../assets/pet_logo.png";

const Footer = () => {

    return (
        <>
            <footer className="text-center text-lg-start text-muted backgroundImage mt-0">
                <hr className="mb-0 mt-0" />
                <section className="d-flex justify-content-center justify-content-lg-between p-4">
                    <div className="container-md ms-5 me-5 d-none d-lg-block">
                        <p>Nos siga em nossas redes sociais:</p>
                    </div>
                    <div className="container-md ms-5">
                        <a href="" className="me-4 text-reset">
                            <img src={Instagram} className="float-start my-0 mx-3 imageSizeFooter zoom" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <img src={Twitter} className="float-start my-0 mx-3 imageSizeFooter zoom" />
                        </a>
                        <a href="" className="me-4 text-reset">
                            <img src={Instagram} className="float-start my-0 mx-3 imageSizeFooter zoom" />
                        </a>
                    </div>
                </section>
                <section className="container-md">
                    <div className="container text-center text-md-start mt-0">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h5 className="text-uppercase fw-bold mb-3">
                                    <img src={PetLogo} className="rounded" />Animal Save
                                </h5>
                                <p>
                                    Somos uma entidade que se preocupa com os animais e deseja erradicar os indices de abandono.
                                </p>
                            </div>
                            <div className="col-md-2 col-lg-4 col-xl-2 mx-auto mb-0">
                            <h5 className="text-uppercase fw-bold mb-3">Contato</h5>
                                <p><i className="fas fa-home me-0"></i>Avenida Pets, 199 - Foz do Iguaçu</p>
                                <p>
                                    <i className="fas fa-envelope me-0"></i>
                                    contato@animalsave.com
                                </p>
                                <p><i className="fas fa-phone me-0"></i> +554599999999</p>
                                <p><i className="fas fa-print me-0"></i> +554599999999</p>
                            </div>
                            
                        </div>
                    </div>
                </section>
                <div className="text-center p-1">
                    <p>Copyright © 2023 | <a className="text-reset fw-bold" href="">animalsave.com</a> <span className="heartFooter">♡</span></p>
                </div>
            </footer>
        </>
    );
};

export default Footer;