import styles from "./index.module.css"
import background from "../../assets/icones-bakground.svg"
import cao_amarelo from "../../assets/cao1.png"
import logo from "../../assets/pets 1.svg"

const Login = () => {
    return (
        <>

        <main className={styles.main_container} style={{ backgroundImage: `url(${background})` }}>

            <section className={styles.section_container}>

                <img src={logo} alt="" />
                <h2>Protege Pet</h2>
                <h1>Login</h1>

                <form action="" className={styles.form_container}>
                    <input type="text" placeholder="email"/>
                    <input type="text" placeholder="senha"/>
                    <button>
                        Entrar
                    </button>

                    <a href="">Registre-se</a>
                    <a href="">Saiba mais</a>
                </form>

                
            </section>

            <section className={styles.img_container}>
                <img className={styles.img} src={cao_amarelo} alt="" />
            </section>

        </main>
        
        </>
    )
}

export default Login;