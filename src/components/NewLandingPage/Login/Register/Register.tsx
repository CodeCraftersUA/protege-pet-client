import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Register.styles.css";
import Header from "../../Home/Header/Header";
import Footer from "./../Footer/Footer";
import { useEffect, useState } from "react";
import { default as Axios } from "axios";

const Register = () => {

    const [data, setDate] = useState([]);
    const [name, setName] = useState('');
    const [userType, setUserType] = useState('');
    const [email, setEmail] = useState('');
    const [passAccount, setPassAccount] = useState('');
    const [cpfCNPJ, setCpfCnpj] = useState('');

    useEffect(() => {
        Axios.get('http://localhost:3000').then(res => {
            console.log('Getting ::::', res.data)
            setDate(res.data)
        }).catch(err => console.log(err))
    }, [])

    const postData = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        Axios.post('http://localhost:3000/account', {
            name, userType, email, passAccount, cpfCNPJ
        }).then(res => console.log('Posting data', res)).catch(err => console.log(err));
    }

    return (
        <>
            <Header />
            <div className="justify-content-center py-3 backgroundImage">
                <div className="container-md text-center pt-3 mt-5 mb-0">
                    <p className="fs-1 titlePet">Formulário de Cadastro</p>
                </div>
            </div>
            <div className="justify-content-center my-0 py-3 backgroundImage">
                <section className="container-md my-0 text-center col-10">
                    <form className="container-md">

                        <div className="row mb-4">
                            <p>Selecione uma opção: </p>
                            <div className="col d-flex justify-content-center">
                                <div className="form-check pe-2">
                                    <input className="form-check-input shadow-none" 
                                        type="radio" 
                                        name="userType" 
                                        value="PROTECTOR" 
                                        id="checkProtector"
                                        checked={userType === "PROTECTOR"}
                                        onChange={(e) => setUserType(e.target.value)} />
                                    <label className="form-check-label"> Protetor</label>
                                </div>
                                <div className="form-check pe-2">
                                    <input className="form-check-input shadow-none" 
                                        type="radio" 
                                        name="userType" 
                                        value="ASSOCIATE" 
                                        id="checkAssociate"
                                        checked={userType === "ASSOCIATE"}
                                        onChange={(e) => setUserType(e.target.value)} />
                                    <label className="form-check-label"> Associado</label>
                                </div>
                                <div className="form-check pe-2">
                                    <input className="form-check-input shadow-none" 
                                        type="radio" 
                                        name="userType" 
                                        value="SUPPLIER" 
                                        id="checkSupplier"
                                        checked={userType === "SUPPLIER"}
                                        onChange={(e) => setUserType(e.target.value)} />
                                    <label className="form-check-label"> Fornecedor</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-outline my-0 mb-3 col d-flex">
                            <input 
                                type="text" 
                                id="firstNameRegister" 
                                placeholder="Nome" 
                                className="form-control border border-1 border-warning shadow-none me-1"
                                value={name} 
                                onChange={(e) => setName(e.target.value)} />
                            <input type="text" id="lastNameRegister" placeholder="Sobrenome" className="form-control border border-1 border-warning shadow-none" />
                        </div>
                        <div className="form-outline my-0 mb-3 col d-flex">
                            <input 
                                type="email" 
                                id="emailRegister" 
                                placeholder="E-mail" 
                                className="form-control border border-1 border-warning shadow-none me-1" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} />
                            <input type="text" id="phoneRegister" placeholder="Celular" className="form-control border border-1 border-warning shadow-none" />
                        </div>

                        <div className="form-outline my-0 mb-3 col d-flex">
                            <input 
                                type="text" 
                                id="cpfCNPJRegister" 
                                placeholder="CNPF/CNPJ" 
                                className="form-control border border-1 border-warning shadow-none pe-4 me-0" 
                                value={cpfCNPJ} 
                                onChange={(e) => setCpfCnpj(e.target.value)} />
                            <select className="form-select form-select-sm border border-1 border-warning shadow-none ms-1" aria-label=".form-select-sm example">
                                <option selected>Gênero</option>
                                <option value="feminino">Feminino</option>
                                <option value="masculino">Masculino</option>
                            </select>
                        </div>

                        <div className="form-outline my-0 mb-3 col d-flex">
                            <input 
                                type="password" 
                                id="passwordRegister" 
                                placeholder="Senha" 
                                className="form-control border border-1 border-warning shadow-none me-1"
                                value={passAccount}
                                onChange={(e) => setPassAccount(e.target.value)} />
                            <input type="password" id="confirmPasswordRegister" placeholder="Repita a senha" className="form-control border border-1 border-warning shadow-none" />
                        </div>

                        <div className="row mb-4">
                            <div className="col d-flex justify-content-center">
                                <div className="form-check">
                                    <input className="form-check-input shadow-none" type="checkbox" value="" id="form2Example31" checked />
                                    <label className="form-check-label"> Aceito os Termos de Privacidade </label>
                                </div>
                            </div>
                        </div>

                        <button type="button" className="btn btn-warning btn-block mb-4" onClick={postData}>Cadastrar</button>

                        <div className="text-center">
                            <p>Entrar com:</p>
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

export default Register;