import { styled } from "styled-components";
import tw from "twin.macro";

export const HeaderContainer = styled.div`
    ${tw``}

    .container-home {
        ${tw` relative flex items-center`}
       
        img {
            ${tw`w-full`}
        }
    }

    h1 {
        ${tw`text-[#00427f] text-[40px] leading-[52px] max-w-[600px] font-bold`}

        @media (max-width: 999px){
            ${tw`text-2xl leading-[30px]`}
        }
    }

    .video {
        ${tw`grid grid-cols-2 mt-[40px]`}

        @media (max-width: 1024px){
            ${tw`grid-cols-1`}
        }

        iframe {
            ${tw`w-full h-auto min-h-[355px]`}
        }
    }

    .texto {
        ${tw`pl-[30px]`}

        @media (max-width: 1024px){
            ${tw`mt-[30px] pl-[0px]`}
        }

        h2{
            ${tw`text-[#00427f] text-[34px] leading-[42px] capitalize font-bold`}
            text-transform: inherit;
        }

        p {
            ${tw`text-lg text-[#333] leading-[26px] mt-[30px] text-justify`}
        }

        .buttom {
            background: #59b224;
            font-family: 'Poppins', sans-serif;
            ${tw`text-[white] mt-[20px] uppercase text-sm inline-block h-10 tracking-[1px] leading-10 min-h-[inherit] min-w-[inherit] px-[22px] py-0 rounded-[35px] border-[none]`}
        }
    }

    .courses {
        ${tw`bg-[#ffffff] py-[40px]`}

        h2 {
            ${tw`text-[34px] text-[#00427f] leading-[52px] font-bold`}
        }

        .carrousel {
            ${tw`grid grid-cols-4 mt-[40px]`}

            @media (max-width: 1024px){
            ${tw`grid-cols-2`}
        }

        @media (max-width: 600px){
            ${tw`grid-cols-1`}
        }

            .buttom {
                ${tw`bg-white rounded-bl-[10px] rounded-br-[10px] h-[40px] flex justify-center items-center  z-[1]`}
                border-top: 1px solid #f2f2f2;


                &:hover {
                    ${tw`bg-[#00427f] text-white font-semibold`}
                    border-bottom: 5px solid #ecb202;
                }
            }
        }
    }
`;