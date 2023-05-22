import styles from './index.module.css'
import bg1 from '../../assets/back_ground_1.svg'
import bg2 from '../../assets/back_ground_2.svg'
import bg3 from '../../assets/back_ground_3.svg'
import husky from '../../assets/Rectangle 12.svg'
import catdog from '../../assets/Rectangle 11.svg'
import center from '../../assets/center.svg'
import left from '../../assets/left.svg'
import right from '../../assets/right.svg'


export const Content = () => {

    return (
        <section>
            <article className={styles.help}>
                <img className={styles.bg1} src={bg1}/>
                <div className={styles.help_us1}>
                    <img className={styles.husky} src={husky} />
                    <h1 className={styles.title1}>Como nos ajudar?</h1>
                    <p className={styles.text1}>loren ipson loren loren loren loren ipson loren loren loren loren ipson loren loren loren</p>
                    <div className={styles.buttons1}>
                        <button className={styles.button_help1}>
                            Nos ajude
                        </button>
                        <button className={styles.button_register1}>
                            Registre-se
                        </button>
                    </div>
                </div>
                <img className={styles.bg2} src={bg2}/>
                <div className={styles.help_us2}>
                    <img className={styles.catdog} src={catdog} />
                    <h1 className={styles.title2}>Quem somos?</h1>
                    <p className={styles.text2}>loren ipson loren loren loren loren ipson loren loren loren loren ipson loren loren loren</p>
                    <div className={styles.buttons2}>
                    <button className={styles.button_help2}>
                        Nos ajude
                    </button>
                    <button className={styles.button_register2}>
                        Registre-se
                    </button>
                    </div>
                </div>
                <h1 className={styles.parceiros}>
                    Nossos parceiros
                </h1>
                <article className={styles.all}>
                    <img className={styles.bg3} src={bg3}/>
                    <div className={styles.left}>
                        <img className={styles.left_dogs} src={left} />
                    </div>
                    <div className={styles.center}>
                        <img className={styles.center_dogs} src={center} />
                    </div>
                    <div className={styles.right}>
                        <img className={styles.right_dogs} src={right} />
                    </div>
                </article>
            </article>
        </section>
    )
}