import React from "react";
/** Styles */
import FooterStyles from "./footer.styles";

const Footer = () => {
  return <FooterStyles.Container>Copyright © {new Date().getFullYear()} - Biomérieux Colombia. Todos los derechos reservados.</FooterStyles.Container>;
};

export default Footer;
