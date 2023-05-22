import logo from '../../assets/LogoHeader.svg'
import styles from './index.module.css'

export const Header = () => {

    return (
        <header className={styles.header}>
            <img className={styles.img} src={logo} alt="Logo principal do sistema" />
            <article className={styles.nav}>
                <div className={styles.elements}>
                    <a className={styles.link} href="">
                        Home
                    </a>
                    <a className={styles.link} href="">
                        Quem somos
                    </a>
                    <a className={styles.link} href="">
                        Nossos parceiros
                    </a>
                    <a className={styles.link} href="">
                        Formulário de resgistro
                    </a>
                    <a className={styles.link} href="">
                        Contato
                    </a>
                </div>
                <button className={styles.button_login}>
                    Entrar
                </button>
                <button className={styles.button_register}>
                    Registrar
                </button>
            </article>
        </header>
    )
}