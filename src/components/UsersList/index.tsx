import { IUser } from "./User";
import "./UserList.style.css"

type Props = {
    list: IUser[]
}

const UserList = (props: Props) => {
    const {list} = props;

    return (
        <>
            <div>User List Page
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>E-mail</th>
                        <th>Município</th>
                        <th>Estado</th>
                        <th>Status</th>
                    </tr>
                    {list.map((user) => {
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
                                        <button className="button button1">Aprovar</button>
                                        <button className="button button2">Reprovar</button>                                        
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </>
    );
};

export default UserList;