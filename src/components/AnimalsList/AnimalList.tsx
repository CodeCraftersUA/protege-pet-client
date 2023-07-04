import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import CheckIcon from "bootstrap-icons/icons/check-lg.svg";
import IgnoreIcon from "bootstrap-icons/icons/x-lg.svg";
import "./AnimalList.styles.css";
import SideBar from "../SideBar/SideBar";

import NewAnimalModal from "./NewAnimalModal/NewAnimalModal";
import EditAnimalModal from "./EditAnimalModal/EditAnimalModal";

import Axios from "axios";
import { useEffect, useState } from "react";

const AnimalList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const acessToken = localStorage.getItem('token');
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        Axios.post('http://localhost:3000/accounts/login', 
            {email, password}
        ).then(response => {
            console.log('LOGIN SUCCESS');
        });
        //console.log(JSON.stringify(response?.data));
        //setAuth({email, password});

        Axios.get('http://localhost:3000/animals')
            .then(res => {
                console.log('GET ANIMALS SUCCESS', res.data)
                setData(res.data)
            }).catch(err => console.log(err));
    }, []);

    const dataKeys = Object.keys(data);
    const arr = dataKeys.map((data, index) => { 
        
        return (
            <>
                <tr key={index}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.gender}</td>
                    <td>{data.specie}</td>
                    <td></td>
                    <td>{data.description}</td>
                    <td></td>
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
                                                        <a className="nav-link " aria-current="page" href="#" data-bs-toggle="modal" data-bs-target="#newAnimalModal">Novo</a>
                                                    </li>
                                                    <li className="nav-item zoom">
                                                        <a className="nav-link " aria-current="page" href="#" data-bs-toggle="modal" data-bs-target="#editAnimalModal">Editar</a>
                                                    </li>
                                                    <li className="nav-item zoom">
                                                        <a className="nav-link" href="#">Deletar</a>
                                                    </li>
                                                </ul>
                                        </div>
                                    </nav>
                            </div>
                
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Nome</th>
                                        <th>Gênero</th>
                                        <th>Espécie</th>
                                        <th>Doença</th>
                                        <th>Descrição</th>
                                        <th>Protetor</th>
                                        <th>Ação</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {arr}
                                </tbody>
                            </table>
                        </article>
                        <div className="col py-0 px-0">
                            <NewAnimalModal />
                            <EditAnimalModal />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AnimalList;