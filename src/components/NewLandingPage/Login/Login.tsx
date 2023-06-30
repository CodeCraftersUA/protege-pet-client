import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Login.styles.css";
import PetLogo from "../../assets/pet_logo.svg";
import Header from "../Home/Header/Header";
import Footer from "./Footer/Footer";

const Login = () => {

    return (
        <>
            <Header />
            <div className="justify-content-center py-5 backgroundImage">
                <div className="container-md text-center py-3 mt-5 mb-0">
                    <img src={PetLogo} alt="" width="99" />
                </div>
            </div>
            <div className="justify-content-center my-0 py-5 backgroundImage">
                <section className="container-md my-0 text-center col-8">
                    <form className="container-md">
                        <div className="form-outline my-0 mb-4">
                            <input type="email" id="form2Example1" placeholder="E-mail" className="form-control border border-1 border-warning shadow-none" />
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="form2Example2" placeholder="Senha" className="form-control border border-1 border-warning shadow-none" />
                        </div>

                        <div className="row mb-4">
                            <div className="col d-flex justify-content-center">
                            <div className="form-check">
                                <input className="form-check-input shadow-none" type="checkbox" value="" id="form2Example31" checked />
                                <label className="form-check-label"> Lembrar </label>
                            </div>
                            </div>

                            <div className="col">
                            <a href="#!">Esqueceu a senha?</a>
                            </div>
                        </div>

                        <button type="button" className="btn btn-warning btn-block mb-4">Entrar</button>

                        <div className="text-center">
                            <p>Ainda não é membro? <a href="#!">Registrar</a></p>
                            <p>ou entre com:</p>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-google"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-twitter"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-github"></i>
                            </button>
                        </div>
                    </form>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Login;