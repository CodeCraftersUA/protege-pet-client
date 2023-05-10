import styles from './Title.module.css'

type TitleProps = {
    content: string,
    margin?: string,
    font?: string
}

export function Title({content, margin, font}: TitleProps){
    return (
        <h1 style={
            {
               margin: margin,
               fontSize: font
            }
        } className={styles.title}>{content}</h1>
    )
}