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
                                    <input type="text" id="firstNameRegister" placeholder="Nome" className="form-control border border-1 border-warning shadow-none me-1" />
                                    <input type="text" id="lastNameRegister" placeholder="Sobrenome" className="form-control border border-1 border-warning shadow-none" />
                                </div>
                                <div className="form-outline my-0 mb-3 col d-flex">
                                    <input type="email" id="emailRegister" placeholder="E-mail" className="form-control border border-1 border-warning shadow-none me-1" />
                                    <input type="text" id="phoneRegister" placeholder="Celular" className="form-control border border-1 border-warning shadow-none" />
                                </div>
                                <div className="form-outline my-0 mb-3 col d-flex">
                                    <input type="text" id="cpfCNPJRegister" placeholder="CPF/CNPJ" className="form-control border border-1 border-warning shadow-none me-0" />
                                </div>
                                <div className="form-outline my-0 mb-3 col d-flex">
                                    <input type="password" id="passwordRegister" placeholder="Senha" className="form-control border border-1 border-warning shadow-none me-1" />
                                    <input type="password" id="confirmPasswordRegister" placeholder="Repita a senha" className="form-control border border-1 border-warning shadow-none" />
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