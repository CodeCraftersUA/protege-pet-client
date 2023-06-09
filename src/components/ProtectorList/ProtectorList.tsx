import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import CheckIcon from "bootstrap-icons/icons/check-lg.svg";
import IgnoreIcon from "bootstrap-icons/icons/x-lg.svg";
import "./ProtectorList.styles.css";
import SideBar from "../SideBar/SideBar";

import NewProtectorModal from "./NewProtectorModal/NewProtectorModal";
import EditProtectorModal from "./EditProtectorModal/EditProtectorModal";

import Axios from "axios";
import { useEffect, useState } from "react";

const ProtectorList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const acessToken = localStorage.getItem('token');
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        Axios.post('http://localhost:3000/account/login', 
            {email, password}
        ).then(response => {
            console.log('LOGIN SUCCESS');
        });
        //console.log(JSON.stringify(response?.data));
        //setAuth({email, password});
        console.log(acessToken);

        Axios.get('http://localhost:3000/admin/accounts', {
            headers: {"Authorization": `bearer ${acessToken}`}
        })
            .then(res => {
                console.log('GET PROTECTORS SUCCESS', res.data)
                setData(res.data)
            }).catch(err => console.log(err));
    }, []);

    const arr = data.map((data) => {

        return (
            <>
                <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td></td>
                    <td>{data.email}</td>
                    <td></td>
                    <td>{data.cnpj}</td>
                    <td>{data.type}</td>
                    <td>
                        <a href="" className="bg-transparent"><img src={CheckIcon} className="zoom" alt="" /></a>
                        <a href="" className="bg-transparent"><img src={IgnoreIcon} className="zoom" alt="" /></a>
                    </td>
                </tr>
            </>
        );
    });

    return (
        <>  
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <SideBar />
                    <div className="col py-0 px-0">
                        <article className="container-fluid px-0">
                            
                            <div className="container-fluid px-0">
                                
                                    <nav className="navbar navbar-expand-lg">
                                        
                                        <div className="container-md">
                                                <ul className="navbar-nav mb-2 mb-lg-0 headerList nav">
                                                    <li className="nav-item zoom">
                                                        <a className="nav-link " aria-current="page" href="#" data-bs-toggle="modal" data-bs-target="#newProtectorModal">Novo</a>
                                                    </li>
                                                    <li className="nav-item zoom">
                                                        <a className="nav-link " aria-current="page" href="#" data-bs-toggle="modal" data-bs-target="#editProtectorModal">Editar</a>
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
                                        <th>Celular</th>
                                        <th>CPF/CNPJ</th>
                                        <th>Ação</th>
                                    </tr>
                                    {arr}
                            </table>
                        </article>
                        <div className="col py-0 px-0">
                            <NewProtectorModal />
                            <EditProtectorModal />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProtectorList;