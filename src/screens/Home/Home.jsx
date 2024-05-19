import React from "react";
import CarouselCourses from "components/CarouselCourses";
import Footer from "../../components/footer/footer";
import Header from "../../components/header";
import { HeaderContainer } from "./Home.styles";

const Home = () => {
    const product = {
        id: 1,
        name: "VITEK® 2",
        href: "#",
        imageSrc: "/images/vitek.jpeg",
        imageAlt: "Front of men's Basic Tee in black.",
        price: "$35",
        color: "7 modulos",
    };

    return (
        <React.Fragment>
            <HeaderContainer>
                <Header></Header>
                <div className="container-home">
                    <img src="/images/welcome.png" alt="" />
                </div>

                <div className="container">
                    <div className="video">
                        <iframe
                            title="bioMérieux in 1 minute"
                            width="660"
                            height="371"
                            src="https://www.youtube.com/embed/1NvfAhHUlBg?si=bbMf3PtdLWAOt06l"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""
                        ></iframe>

                        <div className="texto">
                            <h2>BIENVENIDO A BIOMÉRIEUX</h2>
                            <p>
                                Queremos darle una grata bienvenida a nuestra{" "}
                                <b className="text-[#00427f]">
                                    plataforma de formación online.
                                </b>{" "}
                                En ella encontrará cursos de formación dedicados
                                a nuestras soluciones para el laboratorio
                                clínico. A partir de ahora tendrá un punto de
                                acceso instantáneo en caso de tener cualquier
                                duda, necesitar guías detalladas o breves
                                recordatorios de su funcionamiento.
                            </p>
                            <button className="buttom" onClick={() => window.location.href = "/cursos"}>
                                Descubra los cursos
                            </button>
                        </div>
                    </div>
                </div>

                <div className="courses mt-[40px]">
                    <div className="container">
                        <CarouselCourses product={product} length={8} />
                    </div>
                </div>
                <Footer></Footer>
            </HeaderContainer>
        </React.Fragment>
    );
};

export default Home;
