import styled from "styled-components";
import tw from "twin.macro";

export const LoginContainer = styled.div`
  ${tw`w-screen h-screen relative bg-cover bg-center flex justify-center items-center pb-[50px]`};
  background-image: url("/images/fondo.jpg");

  @media(max-width: 767px) and (max-height: 800px) {
    ${tw`h-[auto]`}
  }

  @media(min-width: 1024px) and (max-height: 767px) {
    ${tw`h-[auto]`}
  }

  .form-input {
    ${tw`flex flex-col w-full mt-[40px] max-w-[500px]`}

    input {
      ${tw`block flex-1 border-0 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 rounded-md shadow-lg h-[45px] px-[10px]`}
    }

    p {
      ${tw`text-base text-[#666666] text-center mt-[20px]`}

      a {
        text-decoration: underline; 
      }
    }
  }
`;

export const Container = styled.div`
  ${tw`max-w-[900px] relative mx-auto flex justify-center items-center flex-col`}

  @media(max-width: 920px) {
    ${tw`w-[90%]`}
  }
`;

export const TitleLogin = styled.h1`
  ${tw`text-[#00427f] text-[50px] leading-[52px] text-center capitalize max-w-[500px] mt-[100px] font-bold`}

  @media(max-width: 920px) {
    ${tw`text-[40px] leading-[42px]`}
  }
`;
