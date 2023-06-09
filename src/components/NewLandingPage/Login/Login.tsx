import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Login.styles.css";
import PetLogo from "../../../assets/pet_logo.svg";
import Header from "../Home/Header/Header";
import Footer from "./Footer/Footer";

//import { AuthContext } from "../../../contexts/Auth/AuthProvider.jsx";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LOGIN_URL = 'http://localhost:3000/account/login';

const Login = () => {

    const navigate = useNavigate();
    const routeChange = () => {
        navigate('/dashboard');
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const { setAuth } = useContext(AuthContext);

    const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(email, password);
        try {
            const response = await axios.post(LOGIN_URL, 
                {email, password}
            );
            console.log(JSON.stringify(response?.data));
            //setAuth({email, password});

            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            setEmail('');
            setPassword('');
            routeChange();
        } catch (err) {
            console.log('ERRO');
        }
    }

    return (
        <>
            <Header />
            <div className="justify-content-center py-5 backgroundImage">
                <div className="container-md text-center py-3 mt-5 mb-0">
                    <img src={PetLogo} alt="" width="99" />
                </div>
            </div>

            <div className="justify-content-center my-0 py-5 backgroundImage">
                <section className="container-md my-0 text-center col-8">
                    <form className="container-md" method="post">
                        <div className="form-outline my-0 mb-4">
                            <input 
                                type="email" 
                                id="email" 
                                placeholder="E-mail" 
                                className="form-control border border-1 border-warning shadow-none"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>

                        <div className="form-outline mb-4">
                            <input 
                                type="password" 
                                id="password" 
                                placeholder="Senha" 
                                className="form-control border border-1 border-warning shadow-none"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                        </div>

                        <div className="row mb-4">
                            <div className="col d-flex justify-content-center">
                                <div className="form-check">
                                    <input className="form-check-input shadow-none" type="checkbox" value="" id="form2Example31" checked />
                                    <label className="form-check-label"> Lembrar </label>
                                </div>
                            </div>

                            <div className="col">
                                <a href="#!">Esqueceu a senha?</a>
                            </div>
                        </div>

                        <button type="button" className="btn btn-warning btn-block mb-4" onClick={handleSubmit}>Entrar</button>

                        <div className="text-center">
                            <p>Ainda não é membro? <a href="#!">Registrar</a></p>
                            <p>ou entre com:</p>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-google"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-twitter"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-github"></i>
                            </button>
                        </div>
                    </form>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Login;