import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const MapFrame = () => {

    return (
        <>
            <section className="justify-content-center backgroundImage">
                <div className="container-md">
                    <p className="fs-1 text-center pb-5 titlePet">
                        Onde nós estamos?
                    </p>
                </div>
                <hr className="mb-0 mt-0" />
                <div className="my-0 py-0">
                    <iframe className="border border-0 mb-0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14398.195885522955!2d-54.5696979!3d-25.5533966!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f69afc71e870fd%3A0x623f0025b8943e6f!2sDescomplica%20UniAm%C3%A9rica%20Centro%20Universit%C3%A1rio!5e0!3m2!1spt-BR!2sbr!4v1687927140666!5m2!1spt-BR!2sbr" width="100%" height="369" loading="lazy"></iframe>
                </div>
            </section>
        </>
    );
};

export default MapFrame;