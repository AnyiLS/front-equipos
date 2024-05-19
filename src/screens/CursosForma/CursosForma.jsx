import CarouselCourses from "components/CarouselCourses/CarouselCourses";
import Footer from "../../components/footer/footer";
import Header from "../../components/header";
import { HeaderContainer } from "./CursosForma.styles";
import React from "react";

const CursosForma = () => {
    return (
        <HeaderContainer>
            <Header></Header>
            <div className="container-home">
                <img src="/images/welcome1.png" alt="" />
            </div>

            <div className="courses">
                <div className="container">
                    <div>
                        <div className="bg-white py-4 flex items-center flex-wrap">
                            <ul className="flex items-center">
                                <li className="inline-flex items-center">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-blue-500"
                                    >
                                        <svg
                                            className="w-5 h-auto fill-current mx-2 text-gray-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="#000000"
                                        >
                                            <path
                                                d="M0 0h24v24H0V0z"
                                                fill="none"
                                            />
                                            <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
                                        </svg>
                                    </a>

                                    <svg
                                        className="w-5 h-auto fill-current mx-2 text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M0 0h24v24H0V0z" fill="none" />
                                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                                    </svg>
                                </li>

                                <li className="inline-flex items-center">
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-blue-500"
                                    >
                                        Cursos de Formación
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="courses">
                        <CarouselCourses />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </HeaderContainer>
    );
};

export default CursosForma;
