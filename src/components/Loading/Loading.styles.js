import { styled } from "styled-components";
import tw from "twin.macro";

const LoadingStyles = {};

LoadingStyles.Container = styled.div`
  ${tw`w-screen h-screen flex items-center justify-center flex-col fixed top-0 left-0 bg-[rgba(255,255,255,.5)]`}
  
  img {
    ${tw`absolute w-[140px] m-auto inset-0`}
  }
`;

export default LoadingStyles;