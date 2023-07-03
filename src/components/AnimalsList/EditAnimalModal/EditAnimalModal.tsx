import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./EditAnimalModal.styles.css";

const EditAnimalModal = () => {

    return (
        <>
            <section className="container-fluid px-0">
                <div className="modal fade" id="editAnimalModal" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Editar Animal</h1>
                            <button type="button" className="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                        <section className="container-md my-2 text-center col-12">
                            <form className="container-md">
                                <div className="form-outline my-0 mb-3 col d-flex">
                                    <input type="text" id="nameAnimalRegister" placeholder="Nome" className="form-control border border-1 border-warning shadow-none me-0" />
                                    <select name="genre" className="form-select form-select-sm border border-1 border-warning shadow-none ms-3 ps-2" aria-label=".form-select-sm example">
                                        <option selected>Gênero</option>
                                        <option value="femea">Fêmea</option>
                                        <option value="macho">Macho</option>
                                    </select>
                                </div>
                                <div className="form-outline my-0 mb-3 col d-flex">
                                    <input type="text" id="specieAnimalRegister" placeholder="Espécie" className="form-control border border-1 border-warning shadow-none me-1" />
                                    <input type="text" id="sicknessAnimalRegister" placeholder="Doença" className="form-control border border-1 border-warning shadow-none me-0" />
                                </div>
                                <div className="form-outline my-0 mb-3 col d-flex">
                                    <input type="text" id="descriptionAnimalRegister" placeholder="Descrição" className="form-control border border-1 border-warning shadow-none me-0" />
                                </div>
                                <div className="form-outline my-0 mb-3 col d-flex">
                                    <select name="protectorName" className="form-select form-select-sm border border-1 border-warning shadow-none ms-0 ps-2" aria-label=".form-select-sm example">
                                        <option selected>Protetores</option>
                                        <option value="tony">Tony</option>
                                        <option value="maria">Maria</option>
                                    </select>
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

export default EditAnimalModal;