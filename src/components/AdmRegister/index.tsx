import styles from "./index.module.css"
import background from "../../assets/icones-bakground.svg"
import logo from "../../assets/pets 1.svg"

import { Link } from "react-router-dom"

import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "../../config/api"

type Inputs = {
    name: string,
    email: string,
    celphone: string,
    cnpj: string,
    password: string,
    type: string
};

const AdmRegister = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => api.post('http://localhost:3000/account', data)
    .then(() => {
        console.log("Deu Certo")
    })
    .catch(() => {
        console.log("Deu Errado")
    }) 

    return (
        <>
            <main className={styles.main_container} style={{ backgroundImage: `url(${background})` }}>

                <section className={styles.section_container}>

                    <img src={logo} alt="" />
                    <h2>Protege Pet</h2>
                    <h3>Acesso do Administrador</h3>

                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form_container}>
                        
                        <input {...register("name", { required: true })} className={styles.input} type="text" placeholder="nome" />
                        {errors.name && <span>This field is required</span>}

                        <input {...register("email", { required: true })} className={styles.input} type="text" placeholder="email" />
                        {errors.email && <span>This field is required</span>}

                        
                        <input {...register("cnpj")} className={styles.input} type="text" placeholder="cnpj" />
                    
                        <input {...register("password", { required: true })} className={styles.input} type="text" placeholder="senha" />
                        {errors.password && <p>This field is required</p>}

                        <input {...register("type", { required: true })} className={styles.input} type="text" placeholder="typeof" />
                        {errors.password && <p>This field is required</p>}
                        
                        <button type="submit" className={styles.login_btn}>
                            Finalizar
                        </button>

                        <footer className={styles.form_footer}>
                            <Link to="/login">Entrar</Link>
                        </footer>

                    </form>

                </section>

            </main>

        </>
    )
}

export default AdmRegister;