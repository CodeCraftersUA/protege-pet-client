import styles from "./index.module.css"
import background from "../../assets/icones-bakground.svg"
import logo from "../../assets/pets 1.svg"

import cao_amarelo from "../../assets/cao1.png"
import { Link } from "react-router-dom"

import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "../../config/api"

type Inputs = {
    name: string,
    email: string,
    celphone: string,
    cpf_cnpj: string,
    password: string,
};

const CommonUserRegister = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = data => api.post('http://localhost:3000', data)
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
                    <h3>Cadastro Associado</h3>

                    <form onSubmit={handleSubmit(onSubmit)} className={styles.form_container}>
                        
                        <input {...register("name", { required: true })} className={styles.input} type="text" placeholder="nome" />
                        {errors.name && <span>This field is required</span>}

                        <input {...register("email", { required: true })} className={styles.input} type="text" placeholder="email" />
                        {errors.email && <span>This field is required</span>}

                        <input {...register("celphone")} className={styles.input} type="text" placeholder="celular" />
                        <input {...register("cpf_cnpj")} className={styles.input} type="text" placeholder="cpf/cnpj" />
                    
                        <input {...register("password", { required: true })} className={styles.input} type="text" placeholder="senha" />
                        {errors.password && <p>This field is required</p>}
                        
                        <button type="submit" className={styles.login_btn}>
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