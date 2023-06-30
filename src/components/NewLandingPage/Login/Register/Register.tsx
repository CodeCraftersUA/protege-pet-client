import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Register.styles.css";
import PetLogo from "../../../assets/pet_logo.svg";
import Header from "../../Home/Header/Header";
import Footer from "./../Footer/Footer";

const Register = () => {

    return (
        <>
            <Header />
            <div className="justify-content-center py-3 backgroundImage">
                <div className="container-md text-center pt-3 mt-5 mb-0">
                    <p className="fs-1 titlePet">Formulário de Cadastro</p>
                </div>
            </div>
            <div className="justify-content-center my-0 py-3 backgroundImage">
                <section className="container-md my-0 text-center col-10">
                    <form className="container-md">

                        <div className="row mb-4">
                            <p>Selecione uma opção: </p>
                            <div className="col d-flex justify-content-center">
                                <div className="form-check pe-2">
                                    <input className="form-check-input shadow-none" type="radio" name="userType" value="PROTECTOR" id="checkProtector" />
                                    <label className="form-check-label"> Protetor</label>
                                </div>
                                <div className="form-check pe-2">
                                    <input className="form-check-input shadow-none" type="radio" name="userType" value="ASSOCIATE" id="checkAssociate" />
                                    <label className="form-check-label"> Associado</label>
                                </div>
                                <div className="form-check pe-2">
                                    <input className="form-check-input shadow-none" type="radio" name="userType" value="SUPPLIER" id="checkSupplier" />
                                    <label className="form-check-label"> Fornecedor</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-outline my-0 mb-3 col d-flex">
                            <input type="text" id="firstNameRegister" placeholder="Nome" className="form-control border border-1 border-warning shadow-none me-1" />
                            <input type="text" id="lastNameRegister" placeholder="Sobrenome" className="form-control border border-1 border-warning shadow-none" />
                        </div>
                        <div className="form-outline my-0 mb-3 col d-flex">
                            <input type="email" id="emailRegister" placeholder="E-mail" className="form-control border border-1 border-warning shadow-none me-1" />
                            <input type="text" id="phoneRegister" placeholder="Celular" className="form-control border border-1 border-warning shadow-none" />
                        </div>

                        <div className="form-outline my-0 mb-3 col d-flex">
                            <input type="text" id="cpfCNPJRegister" placeholder="CNPF/CNPJ" className="form-control border border-1 border-warning shadow-none pe-4 me-0" />
                            <select className="form-select form-select-sm border border-1 border-warning shadow-none ms-1" aria-label=".form-select-sm example">
                                <option selected>Sexo</option>
                                <option value="feminino">Feminino</option>
                                <option value="masculino">Masculino</option>
                            </select>
                        </div>

                        <div className="form-outline my-0 mb-3 col d-flex">
                            <input type="password" id="passwordRegister" placeholder="Senha" className="form-control border border-1 border-warning shadow-none me-1" />
                            <input type="password" id="confirmPasswordRegister" placeholder="Repita a senha" className="form-control border border-1 border-warning shadow-none" />
                        </div>

                        <div className="row mb-4">
                            <div className="col d-flex justify-content-center">
                                <div className="form-check">
                                    <input className="form-check-input shadow-none" type="checkbox" value="" id="form2Example31" checked />
                                    <label className="form-check-label"> Aceito os Termos de Privacidade </label>
                                </div>
                            </div>
                        </div>

                        <button type="button" className="btn btn-warning btn-block mb-4">Cadastrar</button>

                        <div className="text-center">
                            <p>Entrar com:</p>
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

export default Register;