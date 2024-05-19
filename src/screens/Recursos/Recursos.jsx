import React from "react";

import Footer from "../../components/footer/footer";
import Header from "../../components/header";
import { HeaderContainer } from "./Recursos.styles";
import useControllers from "controllers";

const Recursos = () => {
  /** Controllers */
  const {useScreenHooks} = useControllers();
  const {useResources} = useScreenHooks();
  const {fillmaray, bactalec, vitek, vidas} = useResources();
  console.log("vitek", vitek)
  const product = {
    id: 1,
    name: "Guía ráPida ingreso al resource center",
    href: "#",
    imageSrc: "/images/iconPdf.svg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "7 modulos",
  };

  return (
    <HeaderContainer>
      <Header></Header>
      <div className="container-home">
        <img src="/images/welcome2.png" alt="" />
      </div>

      <div className="courses">
        <div className="container">
          <nav className="flex bg-white shadow-md text-gray-700 border border-gray-200 py-3 px-5 rounded-lg dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a href="#" className="text-sm text-gray-700 hover:text-gray-900 inline-flex items-center dark:text-gray-400 dark:hover:text-white">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                  Recursos
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                  <a href="#" className="text-[#003d7c] hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium dark:text-gray-400 dark:hover:text-white">Todos los equipos..</a>
                </div>
              </li>
            </ol>
          </nav>
          <h2 className="mt-4">Descarga guía de acceso a insertos y manuales de todos los equipos</h2>
          <div className="carrousel">
            <div className="group relative shadow-lg max-w-[250px] w-full">
              <div className="aspect-h-1 aspect-w-1 w-[100px] mx-auto py-[30px] overflow-hidden rounded-tl-[10px] rounded-tr-[10px] bg-white lg:aspect-none group-hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full object-cover object-center lg:w-full"
                />
              </div>
              <div className="h-[1px] bg-gray-200"></div>
              <div className="p-4  flex justify-between bg-white">
                <div>
                  <h3 className="text-xl text-[#00427f]">
                    <a href="https://api.elearningclinicalbmxsystems.com/pdf/GUIA RÁPIDA INGRESO AL RESOURCE CENTER.pdf" target="_blank" rel="noreferrer">{product.name}</a>
                  </h3>
                  
                </div>
              </div>

              <div className="buttom ">
                <a href="https://api.elearningclinicalbmxsystems.com/pdf/GUIA RÁPIDA INGRESO AL RESOURCE CENTER.pdf" target="_blank" rel="noreferrer">Descargar</a>
              </div>
            </div>
          </div>

          <h2 className="my-4">Descarga nuestras guias de usuario {vitek.length > 0 && vitek[0].course.name}</h2>
          <div className="grid grid-cols-4 max-1024:grid-cols-2 max-500:grid-cols-1">
            {
                vitek.map((item, index) => (
                    <div key={index} className="group relative shadow-lg  max-w-[250px] mb-[20px]">
                      <div className="aspect-h-1 aspect-w-1 w-[100px] mx-auto py-[30px] overflow-hidden rounded-tl-[10px] rounded-tr-[10px] bg-white lg:aspect-none group-hover:opacity-75">
                        <img
                            src="/images/iconPdf.svg"
                            alt="Card"
                            className="w-full object-cover object-center lg:w-full"
                        />
                      </div>
                      <div className="h-[1px] bg-gray-200"></div>
                      <div className="p-4 flex justify-between bg-white  h-[116px]">
                        <div>
                          <h3 className="text-xl text-[#00427f]">
                            <div className="cursor-pointer">{item.title}</div>
                          </h3>

                        </div>
                      </div>

                      <div className="buttom" onClick={() => window.open(item.content, "_blank")}>Descargar</div>
                    </div>
                ))
            }

          </div>
          <h2 className="mt-4">Descarga nuestras guias de usuario {fillmaray.length > 0 && fillmaray[0].course.name}</h2>
          <div className="grid grid-cols-4 max-1024:grid-cols-2 max-500:grid-cols-1">
            {
              fillmaray.map((item, index) => (
                  <div key={index} className="group relative shadow-lg max-w-[250px] mb-[20px]">
                    <div className="aspect-h-[100px] aspect-w-1 w-[100px] mx-auto py-[30px] overflow-hidden rounded-tl-[10px] rounded-tr-[10px] bg-white lg:aspect-none group-hover:opacity-75">
                      <img
                          src="/images/iconPdf.svg"
                          alt="Card"
                          className="w-full object-cover object-center lg:w-full"
                      />
                    </div>
                    <div className="h-[1px] bg-gray-200"></div>
                    <div className="p-4 flex justify-between bg-white  h-[116px]">
                      <div>
                        <h3 className="text-xl text-[#00427f]">
                          <div className="cursor-pointer">{item.title}</div>
                        </h3>

                      </div>
                    </div>

                    <div className="buttom" onClick={() => window.open(item.content, "_blank")}>Descargar</div>
                  </div>
              ))
            }

          </div>
          <h2 className="mt-4">Descarga nuestras guias de usuario {bactalec.length > 0 && bactalec[0].course.name}</h2>
          <div className="grid grid-cols-4  max-1024:grid-cols-2 max-500:grid-cols-1">
            {
              bactalec.map((item, index) => (
                  <div key={index} className="group relative shadow-lg max-w-[250px] mb-[20px]">
                    <div className="aspect-h-1 aspect-w-1 w-[100px] mx-auto py-[30px] overflow-hidden rounded-tl-[10px] rounded-tr-[10px] bg-white lg:aspect-none group-hover:opacity-75">
                      <img
                          src="/images/iconPdf.svg"
                          alt="Card"
                          className="w-full object-cover object-center lg:w-full"
                      />
                    </div>
                    <div className="h-[1px] bg-gray-200"></div>
                    <div className="p-4 flex justify-between bg-white h-[116px]">
                      <div>
                        <h3 className="text-xl text-[#00427f]">
                          <div className="cursor-pointer">{item.title}</div>
                        </h3>

                      </div>
                    </div>

                    <div className="buttom" onClick={() => window.open(item.content, "_blank")}>Descargar</div>
                  </div>
              ))
            }

          </div>

          <h2 className="mt-4">Descarga nuestras guias de usuario {vidas.length > 0 && vidas[0].course.name}</h2>
          <div className="grid grid-cols-4  max-1024:grid-cols-2 max-500:grid-cols-1">
            {
              vidas.map((item, index) => (
                  <div key={index} className="group relative shadow-lg max-w-[250px] mb-[20px]">
                    <div className="aspect-h-1 aspect-w-1 w-[100px] mx-auto py-[30px] overflow-hidden rounded-tl-[10px] rounded-tr-[10px] bg-white lg:aspect-none group-hover:opacity-75">
                      <img
                          src="/images/iconPdf.svg"
                          alt="Card"
                          className="w-full object-cover object-center lg:w-full"
                      />
                    </div>
                    <div className="h-[1px] bg-gray-200"></div>
                    <div className="p-4 flex justify-between bg-white h-[116px]">
                      <div>
                        <h3 className="text-xl text-[#00427f]">
                          <div className="cursor-pointer">{item.title}</div>
                        </h3>

                      </div>
                    </div>

                    <div className="buttom" onClick={() => window.open(item.content, "_blank")}>Descargar</div>
                  </div>
              ))
            }

          </div>
        </div>
      </div>
      <Footer></Footer>
    </HeaderContainer>
  );
};

export default Recursos;
