import mainImage from '../../../assets/main-image.svg'
import styles from './index.module.css'
// import { motion } from 'framer-motion'
// import image1 from '../../assets/main-image.svg'
// import image2 from '../../assets/main-image.svg'
// import image3 from '../../assets/main-image.svg'

// const images = [image1, image2, image3]

export const Carousel  = () => {
    return (
        <section>
            <article className={styles.main_image}>
                <img src={mainImage} alt="gato e cachorro deitados na grama" />
            </article>
            {/* <motion.div className={styles.carousel}>
                <motion.div className={styles.inner}>
                    {images.map(image => (
                        <motion.div className={styles.item} key={image}>
                            <img src={image} alt="gato e cachorro deitados na grama" />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div> */}
        </section>
    )

}