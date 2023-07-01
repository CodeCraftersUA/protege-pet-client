import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Login.styles.css";
import PetLogo from "../../../assets/pet_logo.svg";
import Header from "../Home/Header/Header";
import Footer from "./Footer/Footer";
import { useEffect, useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";

import AuthContex from '../../../contexts/Auth/AuthProvider.jsx';
import {AuthProvider} from '../../../contexts/Auth/AuthProvide.jsx';

import Axios from "axios";

const LOGIN_URL = 'http://localhost:3000/account/login';

const Login = () => {
    const {setAuth} = useContext(AuthContex);

    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrorMessage('');
    }, [email, password]);

    const handleSubmit = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        try {
            const response = await Axios.post(LOGIN_URL,
                JSON.stringify({email, password}),
                {
                    headers: { 'Content-Type': 'application/json'},
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));

            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({email, password, roles, accessToken});
            setEmail('');
            setPassword('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrorMessage('No server response');
            } else if (err.response?.status === 400) {
                setErrorMessage('E-mail ou senha necessário');
            } else if (err.response?.status === 401) {
                setErrorMessage('Não autorizado');
            } else {
                setErrorMessage('Falha ao entrar');
            }

            errRef.current.focus();
        }
    }

    return (
        <>
            <Header />
            {success ? (
                <section className="justify-content-center">
                    <p>Você está logado!</p>
                    <Link to="/dashboard"><button type="button" className="btn btn-warning btn-block mb-4">Início</button></Link>
                </section>
            ) : (<>

                <div className="justify-content-center py-5 backgroundImage">
                    <div className="container-md text-center py-3 mt-5 mb-0">
                        <img src={PetLogo} alt="" width="99" />
                    </div>
                </div>

                <div className="justify-content-center my-0 py-5 backgroundImage">
                    <section className="container-md my-0 text-center col-8">
                        <form className="container-md" onSubmit={handleSubmit}>
                            <div className="form-outline my-0 mb-4">
                                <input 
                                    type="email" 
                                    id="email" 
                                    placeholder="E-mail" 
                                    className="form-control border border-1 border-warning shadow-none"
                                    ref={userRef}
                                    autoComplete="off"
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
                                    autoComplete="off"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required />
                            </div>

                            <p ref={errRef} className={errRef ? "E-mail ou senha incorreta" : 
                                "offScreen"} aria-live="assertive">{errorMessage}</p>

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

                            <button type="button" className="btn btn-warning btn-block mb-4">Entrar</button>

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
            </>)}
            <Footer />
        </>
    );
};

export default Login;