import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import CheckIcon from "bootstrap-icons/icons/check-lg.svg";
import IgnoreIcon from "bootstrap-icons/icons/x-lg.svg";
import "./AssociateList.styles.css";
import SideBar from "../SideBar/SideBar";
import NewAssociateModal from "./NewAssociateModal/NewAssociateModal";
import EditAssociateModal from "./EditAssociateModal/EditAssociateModal";

const AssociateList = () => {

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
                                                        <a className="nav-link " aria-current="page" href="#" data-bs-toggle="modal" data-bs-target="#newAssociateModal">Novo</a>
                                                    </li>
                                                    <li className="nav-item zoom">
                                                        <a className="nav-link " aria-current="page" href="#" data-bs-toggle="modal" data-bs-target="#editAssociateModal">Editar</a>
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
                                    <td>Maria</td>
                                    <td>Clara</td>
                                    <td>maria@gmail.com</td>
                                    <td>Foz do Iguaçu</td>
                                    <td>Paraná</td>
                                    <td>
                                        <a href="" className="bg-transparent"><img src={CheckIcon} className="zoom" alt="" /></a>
                                        <a href="" className="bg-transparent"><img src={IgnoreIcon} className="zoom" alt="" /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Rorschach</td>
                                    <td>Watchmen</td>
                                    <td>rorschach@live.com</td>
                                    <td>Curitiba</td>
                                    <td>Paraná</td>
                                    <td>
                                        
                                        <a href="" className="bg-transparent"><img src={CheckIcon} className="zoom" alt="" /></a>
                                        <a href="" className="bg-transparent"><img src={IgnoreIcon} className="zoom" alt="" /></a>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Bruce</td>
                                    <td>Wayne</td>
                                    <td>wayne@wayne.com</td>
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
                            <NewAssociateModal />
                            <EditAssociateModal />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AssociateList;