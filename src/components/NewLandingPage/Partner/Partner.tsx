import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Partner.styles.css";
import UALogo from "../../../assets/uniamerica_logo.jpg";
import MicrosoftLogo from "../../../assets/microsoft.jpg";
import GitHubLogo from "../../../assets/github.jpg";

const Partner = () => {

    return (
        <>
            <section className="justify-content-center backgroundImage">
                <div className="container-md">
                    <p className="fs-1 text-center pb-5 titlePet">
                        Conheça nossos parceiros
                    </p>
                    <div className="justify-content-center ps-5 text-center">
                        <img src={UALogo} className="rounded-circle border border-warning mb-3 me-5 imageSize zoom" />
                        <img src={MicrosoftLogo} className="rounded-circle border border-warning mb-3 me-5 imageSize zoom" />
                        <img src={GitHubLogo} className="rounded-circle border border-warning mb-3 me-5 imageSize zoom" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Partner;