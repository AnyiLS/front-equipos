import React from "react";

import Footer from "../../components/footer/footer";
import Header from "../../components/header";
import { HeaderContainer } from "./QuienesSomos.styles";

const QuienesSomos = () => {

  return (
    <HeaderContainer>
      <Header></Header>
      <div className="container-home">
        <img src="/images/quienes-somos.png" alt="" />
      </div>

      <div className="container">
        <div className="video">
          <iframe
            title="BioMerieux - Pioneering Diagnostics - Introducción"
            width="660"
            height="371"
            src="https://www.youtube.com/embed/NMpkXBvGeoc?feature=oembed"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
          ></iframe>

          <div className="texto">
            <h2>
              Pioneering diagnostics: mejorando la salud pública del mundo
            </h2>
            <p>
              Llevamos más de 20 años en Colombia trabajando para brindar
              accesibilidad a las últimas tecnologías en el diagnóstico de
              enfermedades infecciosas con un alto impacto en la salud de
              nuestro país.
              <br /><br />
              Te invitamos a conocernos en este video.
            </p>
          </div>
        </div>
      </div>

      <div className="courses mt-[60px]">
        
      </div>
      <Footer></Footer>
    </HeaderContainer>
  );
};

export default QuienesSomos;
