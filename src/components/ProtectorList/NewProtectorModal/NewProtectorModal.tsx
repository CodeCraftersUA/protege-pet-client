import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./NewProtectorModal.styles.css";

const NewProtectorModal = () => {

    return (
        <>
            <section className="container-fluid px-0">
                <div className="modal fade" id="newProtectorModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Novo Protetor</h1>
                            <button type="button" className="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                        <section className="container-md my-2 text-center col-12">
                            <form className="container-md">
                                <div className="form-outline my-0 mb-3 col d-flex">
                                    <input type="text" id="firstNameProtectorRegister" placeholder="Nome" className="form-control border border-1 border-warning shadow-none me-1" />
                                    <input type="text" id="lastNamePRotectorRegister" placeholder="Sobrenome" className="form-control border border-1 border-warning shadow-none" />
                                </div>
                                <div className="form-outline my-0 mb-3 col d-flex">
                                    <input type="email" id="emailPRotectorRegister" placeholder="E-mail" className="form-control border border-1 border-warning shadow-none me-1" />
                                    <input type="text" id="phoneProtectorRegister" placeholder="Celular" className="form-control border border-1 border-warning shadow-none" />
                                </div>
                                <div className="form-outline my-0 mb-3 col d-flex">
                                    <input type="text" id="cpfCNPJProtectorRegister" placeholder="CPF/CNPJ" className="form-control border border-1 border-warning shadow-none me-0" />
                                </div>
                                <div className="form-outline my-0 mb-3 col d-flex">
                                    <input type="password" id="passwordProtectorRegister" placeholder="Senha" className="form-control border border-1 border-warning shadow-none me-1" />
                                    <input type="password" id="confirmPasswordPRotectorRegister" placeholder="Repita a senha" className="form-control border border-1 border-warning shadow-none" />
                                </div>

                                <div className="row mb-4">
                                    <p>Selecione uma opção: </p>
                                    <div className="col d-flex justify-content-center">
                                        <div className="form-check pe-2">
                                            <input className="form-check-input shadow-none" type="radio" name="userType" value="PROTECTOR" id="checkProtector" />
                                            <label className="form-check-label"> Protetor</label>
                                        </div>
                                        <div className="form-check pe-2">
                                            <input className="form-check-input shadow-none" type="radio" name="userType" value="ASSOCIATE" id="checkAssociate" />
                                            <label className="form-check-label"> Associado</label>
                                        </div>
                                        <div className="form-check pe-2">
                                            <input className="form-check-input shadow-none" type="radio" name="userType" value="SUPPLIER" id="checkSupplier" />
                                            <label className="form-check-label"> Fornecedor</label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </section>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Sair</button>
                            <button type="button" className="btn btn-outline-warning" data-bs-dismiss="modal">Salvar</button>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default NewProtectorModal;