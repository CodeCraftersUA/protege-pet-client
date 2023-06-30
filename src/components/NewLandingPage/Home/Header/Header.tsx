import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Header.styles.css";
import PetLogo from "../../../assets/pet_logo.svg";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <>
            <header className="justify-content-center">
                <nav className="navbar fixed-top navbar-expand-lg">
                    <div className="container-md">
                        <a className="navbar-brand">
                            <img src={PetLogo} alt="Logo" width="39" height="39" className="d-inline-block align-text-top" />
                            AnimalSave
                        </a>
                        <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 header nav">
                                <li className="nav-item zoom">
                                    <Link to="/"><a className="nav-link" aria-current="page" href="#">Início</a></Link>
                                </li>
                                <li className="nav-item zoom">
                                    <a className="nav-link" href="#">Adoção</a>
                                </li>
                                <li className="nav-item zoom">
                                    <a className="nav-link" href="#">Fornecedores</a>
                                </li>
                                <li className="nav-item zoom">
                                    <a className="nav-link" href="#">Eventos</a>
                                </li>
                                <li className="nav-item zoom">
                                    <a className="nav-link">Blog</a>
                                </li>
                                <li className="nav-item zoom">
                                    <Link to={"/login"}><a className="nav-link btn btn-outline rounded-1 border border-1 px-2 active">Entrar</a></Link>
                                </li>
                                <li className="nav-item zoom">
                                    <Link to="/register"><a className="nav-link">Cadastrar</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;