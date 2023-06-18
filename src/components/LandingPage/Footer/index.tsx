import styles from './index.module.css'
import footer_image from '../../../assets/footer-image.svg'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.contact}>
                <h1 className={styles.title}>
                    Contato
                </h1>
                <p className={styles.text}>
                    loren ipson loren loren loren loren ipson loren loren loren loren ipson loren loren loren
                </p>
                <div className={styles.buttons}>
                    <button className={styles.button_message}>
                        Mandar mensagem
                    </button>
                    <button className={styles.button_register}>
                        Registre-se
                    </button>
                </div>
                <div className={styles.image}>
                    <img className={styles.footer_image} src={footer_image}/>
                </div>

            </div>
        </footer>
    )
}