import styles from './Button.module.css'

type ButtonProps = {
    content: string
    position?: string
}

export function Button({content, position}: ButtonProps){
    return (
        <button style={
            {left: position
            }
        } className={styles.button}>{content}</button>
    )
}