import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Content.styles.css";
import Dog from "../../../assets/dog-content.png";
import Card from "../Card/Card";

const Content = () => {

    return (
        <>
            <section className="justify-content-center backgroundImage">
                <hr className="mt-0" />
                <div className="container-md">
                    <img src={Dog} className="rounded-circle border border-warning float-start my-5 mx-4 imageSize zoom" />
                    <h4 className="pt-5 px-2 pb-5">
                        O projeto Animal Save foi idealizado por professores e alunos - em parceria 
                        com a Faculdade Uniamérica - com o objetivo de elaborar uma solução tecnologica 
                        na busca por resolver a problematica de animais em situação de abandono.<br /><br />
                        Dessa forma, foram filtradas as ideias e optamos por desenvolver uma aplicação 
                        que desse suporte tanto para alertas de animais abandonados, quanto para o armazenamento 
                        de informações - o que possibilita analisar os dados e gerar estatisticas.
                    </h4>
                </div>
                <hr className="mb-0 mt-0" />
                <Card />
            </section>
        </>
    );
};

export default Content;