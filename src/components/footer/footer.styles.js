import { styled } from "styled-components";
import tw from "twin.macro";

const FooterStyles = {};

FooterStyles.Container = styled.div.attrs({})`
  ${tw`bg-[#00427f] text-white flex justify-center items-center h-[60px] text-center`}
`;

export default FooterStyles;
