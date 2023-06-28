import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { IUser, dummyUserList } from "./User";
import { useState } from "react";
import  "./index.module.css";
import SideBar from "../SideBar";

type Props = {
    list: IUser[]
}

const UsersList = /*(props: Props)*/() => {
    //const {list} = props;
    //const [userList, setUserList] = useState(dummyUserList as IUser[]);

    return (
        <>
            <header>
                <h2>Usuários</h2>
            </header>

            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <SideBar />
                    <div className="col py-3">
                        <article>
                            <table className="table table-striped table-hover">
                                <tr>
                                    <th>ID</th>
                                    <th>Nome</th>
                                    <th>Sobrenome</th>
                                    <th>E-mail</th>
                                    <th>Município</th>
                                    <th>Estado</th>
                                    <th>Status</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Tony</td>
                                    <td>Stark</td>
                                    <td>stark@stark.com</td>
                                    <td>Foz do Iguaçu</td>
                                    <td>Paraná</td>
                                    <td>
                                        
                                            <button className="btn btn-outline-success btn-sm">Aprovar</button>
                                            <span></span>
                                            <button className="btn btn-outline-danger btn-sm">Reprovar</button>
                                        
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Bruce</td>
                                    <td>Wayne</td>
                                    <td>wayne@wayne.com</td>
                                    <td>Santa Terezinha de Itaipu</td>
                                    <td>Paraná</td>
                                    <td>
                                        
                                            <button className="btn btn-outline-success btn-sm">Aprovar</button>
                                            <span></span>
                                            <button className="btn btn-outline-danger btn-sm">Reprovar</button>
                                        
                                    </td>
                                </tr>
                                {/*{list.map((user) => {
                                    console.log(user);
                                    return (
                                        <tr key={user.id}>
                                            <td>{`${user.id}`}</td>
                                            <td>{`${user.firstName}`}</td>
                                            <td>{`${user.lastName}`}</td>
                                            <td>{`${user.email}`}</td>
                                            <td>{`${user.municipio}`}</td>
                                            <td>{`${user.estado}`}</td>
                                            <td>
                                                <div>
                                                    <button classNameName="button button1">Aprovar</button>
                                                    <button classNameName="button button2">Reprovar</button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}*/}
                            </table>
                        </article>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UsersList;