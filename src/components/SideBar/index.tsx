import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import  "./index.module.css";

const SideBar = () => {
    return (
        <>
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                    <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-5 d-none d-sm-inline">PetSave</span>
                    </a>
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-item">
                            <a href="#" className="nav-link align-middle px-0">
                                <i className="bi bi-home"></i><span className="ms-1 d-none d-sm-inline text-white">Inicio</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link align-middle px-0">
                                <i className="bi bi-home"></i><span className="ms-1 d-none d-sm-inline text-white">Animais</span>
                            </a>
                        </li>
                        <li>
                            <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline text-white">Usuários</span></a>
                            <ul className="collapse nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                                <li className="w-100">
                                    <a href="#" className="nav-link px-4"> <span className="d-none d-sm-inline text-white">Associados</span></a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-4"> <span className="d-none d-sm-inline text-white">Protetores</span></a>
                                </li>
                                <li>
                                    <a href="#" className="nav-link px-4"> <span className="d-none d-sm-inline text-white">Fornecedores</span></a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown pb-4">
                        <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="../../../assets/vader.jpg" alt="Teste" width="30" height="30" className="rounded-circle" />
                            <span className="d-none d-sm-inline mx-1">Vader</span>
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