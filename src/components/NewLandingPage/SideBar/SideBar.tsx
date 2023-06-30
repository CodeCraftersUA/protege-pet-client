import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import  "./SideBar.styles.css";
import PetLogo from "../../assets/pet_logo.svg";
import Vader from "../../assets/vader.jpg";
import { Link } from "react-router-dom";

const SideBar = () => {
    return (
        <>
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <img src={PetLogo} alt="" className="pe-3"/><h4 className="fs-5 d-none d-sm-inline">AnimalSave</h4>
                    </a>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <a href="#" className="nav-link align-middle px-0 zoom">
                                <i className="bi bi-home"></i><p className="ms-1 d-none d-sm-inline text-white">Inicio</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link align-middle px-0 zoom">
                                <i className="bi bi-home"></i><p className="ms-1 d-none d-sm-inline text-white">Animais</p>
                            </a>
                        </li>
                        <li>
                            <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle zoom">
                                <i className="fs-4 bi-speedometer2"></i> <p className="ms-1 d-none d-sm-inline text-white dropdown-toggle">Usuários</p></a>
                            <ul className="collapse nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                <li className="w-100 zoom">
                                    <Link to="/associates"><a href="#" className="nav-link px-4"> <p className="d-none d-sm-inline text-white">Associados</p></a></Link>
                                </li>
                                <li className="zoom">
                                    <Link to="/protectors"><a href="" className="nav-link px-4"> <p className="d-none d-sm-inline text-white">Protetores</p></a></Link>
                                </li>
                                <li className="zoom">
                                    <Link to="/suppliers"><a className="nav-link  px-4"> <p className="d-none d-sm-inline text-white">Fornecedores</p></a></Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown pb-4">
                        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={Vader} alt="Teste" width="39" height="39" className="rounded-circle" />
                            <p className="d-none d-sm-inline mx-1">Vader</p>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                            <li><a className="dropdown-item" href="#">Perfil</a></li>
                            <li><a className="dropdown-item" href="#">Configurações</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li><a className="dropdown-item" href="#">Sair</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;