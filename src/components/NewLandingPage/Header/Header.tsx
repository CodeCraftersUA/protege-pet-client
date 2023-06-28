import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Header.styles.css";
import PetLogo from "../../../assets/pet_logo.svg";

const Header = () => {

    return (
        <>
            <header className="justify-content-center">
                <nav className="navbar fixed-top navbar-expand-lg">
                    <div className="container-md">
                        <a className="navbar-brand" href="#">
                            <img src={PetLogo} alt="Logo" width="39" height="39" className="d-inline-block align-text-top" />
                            AnimalSave
                        </a>
                        <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 header nav">
                                <li className="nav-item zoom">
                                    <a className="nav-link" aria-current="page" href="#">Início</a>
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
                                    <a className="nav-link">Login</a>
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