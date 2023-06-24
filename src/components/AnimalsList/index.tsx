import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { IAnimal, dummyUserList } from "./Animal";
import { useState } from "react";
import  "./index.module.css";
import SideBar from "../SideBar";

type Props = {
    list: IAnimal[]
}

const AnimalsList = /*(props: Props)*/() => {
    //const {list} = props;
    //const [animalList, setAnimalList] = useState(dummyAnimalList as IAnimal[]);

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
                                    <th>Cor</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Cérbero</td>
                                    <td>Branco</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Patricia</td>
                                    <td>Azul</td>
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

export default AnimalsList;