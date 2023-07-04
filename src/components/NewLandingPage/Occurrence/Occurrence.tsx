import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Occurrence.styles.css";
import Header from "../Home/Header/Header";
import Footer from "../Home/Footer/Footer";
import { useEffect, useState } from "react";
import { default as Axios } from "axios";

const Occurrence = () => {

    const [data, setDate] = useState([]);
    const [address, setAddress] = useState('');
    const [occurrenceType, setOccurrenceType] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cnpj, setCnpj] = useState('');

    // POST NAO ELABORADO
    useEffect(() => {
        Axios.get('http://localhost:3000/admin/complaints').then(res => {
            console.log('Getting ::::', res.data)
            setDate(res.data)
        }).catch(err => console.log(err))
    }, [])

    const postData = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        Axios.post('http://localhost:3000/accounts', {
            name, occurrenceType, email, password, cnpj
        }).then(res => console.log('Posting data', res)).catch(err => console.log(err));
    }

    return (
        <>
            <Header />
            <div className="justify-content-center py-3 backgroundImage">
                <div className="container-md text-center pt-3 mt-5 mb-0">
                    <p className="fs-1 titlePet">Formulário para Resgate</p>
                </div>
            </div>
            <div className="justify-content-center my-0 py-3 backgroundImage">
                <section className="container-md my-0 text-center col-10">
                    <form className="container-md">

                        <div className="row mb-4">
                            <p>Selecione uma situação: </p>
                            <div className="col d-flex justify-content-center">
                                <div className="form-check pe-2">
                                    <input className="form-check-input shadow-none" 
                                        type="radio" 
                                        name="occurrenceType" 
                                        value="LOST" 
                                        id="checkLost"
                                        checked={occurrenceType === "LOST"}
                                        onChange={(e) => setOccurrenceType(e.target.value)} />
                                    <label className="form-check-label"> Perdido</label>
                                </div>
                                <div className="form-check pe-2">
                                    <input className="form-check-input shadow-none" 
                                        type="radio" 
                                        name="occurrenceType" 
                                        value="INCIDENT" 
                                        id="checkIncident"
                                        checked={occurrenceType === "INCIDENT"}
                                        onChange={(e) => setOccurrenceType(e.target.value)} />
                                    <label className="form-check-label"> Acidentado</label>
                                </div>
                                <div className="form-check pe-2">
                                    <input className="form-check-input shadow-none" 
                                        type="radio" 
                                        name="occurrenceType" 
                                        value="OTHER" 
                                        id="checkOther"
                                        checked={occurrenceType === "OTHER"}
                                        onChange={(e) => setOccurrenceType(e.target.value)} />
                                    <label className="form-check-label"> Outro</label>
                                </div>
                            </div>
                        </div>

                        <div className="form-outline my-0 mb-3 col d-flex">
                            <input 
                                type="text" 
                                id="addressOccurrence" 
                                placeholder="Endereço" 
                                className="form-control border border-1 border-warning shadow-none me-1"
                                value={address} 
                                onChange={(e) => setAddress(e.target.value)} />
                        </div>

                        <div className="form-outline my-0 mb-3 col d-flex">
                                <textarea id="descriptionOccurrence" placeholder="Descreva" class="form-control border border-1 border-warning shadow-none me-1" rows="5"></textarea>
                        </div>

                        <button type="button" className="btn btn-warning btn-block mb-4" onClick={postData}>Enviar</button>

                    </form>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Occurrence;