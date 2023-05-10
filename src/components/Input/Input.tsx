import styles from './Input.module.css'

type InputProps = {
    title: string
}

export function Input({title}: InputProps){
    return (

        <div className={styles.div}>
            <p className={styles.p}>{title}</p>
            <input className={styles.input} type="text"/>
        </div>

    )

}
