import styles from "./index.module.css"
import background from "../../assets/icones-bakground.svg"
import { Link } from "react-router-dom";

const UsersRegister = () => {
    return (

        <main className={styles.main_container} style={{ backgroundImage: `url(${background})` }}>

            <section className={styles.section_container}>

                <h2>Protetora</h2>

                <form action="" className={styles.form_container}>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis dapibus est sit amet porttitor molestie. Phasellus
                        elementum erat quis nunc ultricies, sit amet vulputate
                        est scelerisque. Curabitur congue nisl vitae fermentum
                        convallis. Duis ac tortor varius, posuere risus non,
                        feugiat ligula. In eu massa egestas, posuere nunc eu,
                        luctus massa. Sed sollicitudin varius purus, ut aliquet
                        nibh gravida quis.
                    </p>

                    <button className={styles.login_btn_protector}>
                        <Link className={styles.link} to="/register_protector">Registrar-se</Link>
                    </button>

                </form>

            </section>

            <section className={styles.section_container}>

                <h2>Associado</h2>

                <form action="" className={styles.form_container}>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis dapibus est sit amet porttitor molestie. Phasellus
                        elementum erat quis nunc ultricies, sit amet vulputate
                        est scelerisque. Curabitur congue nisl vitae fermentum
                        convallis. Duis ac tortor varius, posuere risus non,
                        feugiat ligula. In eu massa egestas, posuere nunc eu,
                        luctus massa. Sed sollicitudin varius purus, ut aliquet
                        nibh gravida quis.
                    </p>

                    <button className={styles.login_btn_user}>
                        <Link className={styles.link} to="/register_common_user">Registrar-se</Link>
                    </button>

                </form>

            </section>

            <section className={styles.section_container}>

                <h2>Fornecedor</h2>

                <form action="" className={styles.form_container}>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis dapibus est sit amet porttitor molestie. Phasellus
                        elementum erat quis nunc ultricies, sit amet vulputate
                        est scelerisque. Curabitur congue nisl vitae fermentum
                        convallis. Duis ac tortor varius, posuere risus non,
                        feugiat ligula. In eu massa egestas, posuere nunc eu,
                        luctus massa. Sed sollicitudin varius purus, ut aliquet
                        nibh gravida quis.
                    </p>

                    <button className={styles.login_btn_supplier}>
                        <Link className={styles.link} to="/register_supplier">Registrar-se</Link>
                    </button>

                </form>

            </section>

        </main>
    )
}

export default UsersRegister;