import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import CheckIcon from "bootstrap-icons/icons/check-lg.svg";
import IgnoreIcon from "bootstrap-icons/icons/x-lg.svg";
import "./SupplierList.styles.css";
import SideBar from "../SideBar/SideBar";
import NewSupplierModal from "./NewSupplierModal/NewSupplierModal";
import EditSupplierModal from "./EditSupplierModal/EditSupplierModal";

const SupplierList = () => {

    return (
        <>  
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <SideBar />
                    <div className="col py-0 px-0">
                        <article className="container-fluid px-0">
                            
                            <div className="container-lg px-0">
                                
                                    <nav className="navbar navbar-expand-lg">
                                        
                                        <div className="container-md">
                                                <ul className="navbar-nav mb-2 mb-lg-0 headerList nav">
                                                    <li className="nav-item zoom">
                                                        <a className="nav-link " aria-current="page" href="#" data-bs-toggle="modal" data-bs-target="#newSupplierModal">Novo</a>
                                                    </li>
                                                    <li className="nav-item zoom">
                                                        <a className="nav-link " aria-current="page" href="#" data-bs-toggle="modal" data-bs-target="#editSupplierModal">Editar</a>
                                                    </li>
                                                    <li className="nav-item zoom">
                                                        <a className="nav-link" href="#">Deletar</a>
                                                    </li>
                                                </ul>
                                        </div>
                                    </nav>
                            </div>
                
                            <table className="table table-striped table-hover">
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Sobrenome</th>
                                    <th>E-mail</th>
                                    <th>Município</th>
                                    <th>Estado</th>
                                    <th>Ação</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Faculdade</td>
                                    <td>Uniamérica</td>
                                    <td>contato@uniamerica.com</td>
                                    <td>Foz do Iguaçu</td>
                                    <td>Paraná</td>
                                    <td>
                                        <a href="" className="bg-transparent"><img src={CheckIcon} className="zoom" alt="" /></a>
                                        <a href="" className="bg-transparent"><img src={IgnoreIcon} className="zoom" alt="" /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Microsoft</td>
                                    <td>Hub</td>
                                    <td>contato@microsoft.com</td>
                                    <td>Santa Terezinha de Itaipu</td>
                                    <td>Paraná</td>
                                    <td>
                                        
                                        <a href="" className="bg-transparent"><img src={CheckIcon} className="zoom" alt="" /></a>
                                        <a href="" className="bg-transparent"><img src={IgnoreIcon} className="zoom" alt="" /></a>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Git</td>
                                    <td>Hub</td>
                                    <td>contato@github.com</td>
                                    <td>Santa Terezinha de Itaipu</td>
                                    <td>Paraná</td>
                                    <td>
                                        <a href="" className="bg-transparent"><img src={CheckIcon} className="zoom" alt="" /></a>
                                        <a href="" className="bg-transparent"><img src={IgnoreIcon} className="zoom" alt="" /></a>
                                    </td>
                                </tr>
                            </table>
                        </article>
                        <div className="col py-0 px-0">
                            <NewSupplierModal />
                            <EditSupplierModal />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SupplierList;