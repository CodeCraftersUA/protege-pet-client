import styles from "./index.module.css"
import background from "../../assets/icones-bakground.svg"
import logo from "../../assets/pets 1.svg"

import cao_amarelo from "../../assets/cao1.png"
import { Link } from "react-router-dom"

const CommonUserRegister = () => {
    return (
        <>

        <main className={styles.main_container} style={{ backgroundImage: `url(${background})` }}>

            <section className={styles.section_container}>

                <img src={logo} alt="" />
                <h2>Protege Pet</h2>
                <h3>Cadastro Associado</h3>

                <form action="" className={styles.form_container}>
                    <input className={styles.input} type="text" placeholder="nome"/>
                    <input className={styles.input} type="text" placeholder="email"/>
                    <input className={styles.input} type="text" placeholder="celular"/>
                    <input className={styles.input} type="text" placeholder="cpf/cnpj"/>
                    <input className={styles.input} type="text" placeholder="senha"/>
                    

                    <button className={styles.login_btn}>
                        Finalizar
                    </button>

                    <footer className={styles.form_footer}>
                    <Link to="/register_users">Registre-se</Link>
                    
                    
                    <Link to="/login">Voltar</Link>
                    
                    </footer>
                    
                </form>

                
            </section>

            <section className={styles.img_container}>
                <img className={styles.img} src={cao_amarelo} alt="" />
            </section>

        </main>
        
        </>
    )
}

export default CommonUserRegister;