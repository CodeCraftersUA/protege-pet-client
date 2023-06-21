import { useState } from "react";
import { IUser, dummyUserList } from "../../components/UsersList/User";

import "./Home.style.css"
import UserList from "../../components/UsersList";

const UsersList = () => {
    const [userList, setUserList] = useState(dummyUserList as IUser[]);

    return (
        <>
            <article className="article-header">
                <header>
                    <h1>Usuários</h1>
                </header>
            </article>

            <section className="section-content">
                <UserList list={userList}/>
            </section>
        </>
    );
};

export default UsersList;