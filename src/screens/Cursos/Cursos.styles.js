import styled from "styled-components";
import tw from "twin.macro";
import Slider from "react-slick";

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

        @media (max-width: 999px) {
            ${tw`text-2xl leading-[30px]`}
        }
    }

    .video {
        ${tw`grid grid-cols-2 mt-[40px]`}

        @media (max-width: 1024px) {
            ${tw`grid-cols-1`}
        }

        iframe {
            ${tw`w-full h-auto min-h-[355px]`}
        }
    }

    .texto {
        ${tw`pl-[30px]`}

        @media (max-width: 1024px) {
            ${tw`mt-[30px] pl-[0px]`}
        }

        h2 {
            ${tw`text-[#00427f] text-[34px] leading-[42px] uppercase font-bold`}
        }

        p {
            ${tw`text-lg text-[#333] leading-[26px] mt-[30px] text-justify`}
        }

        .buttom {
            background: #59b224;
            font-family: "Poppins", sans-serif;
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

            @media (max-width: 1024px) {
                ${tw`grid-cols-2`}
            }

            @media (max-width: 600px) {
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

    .active-tab {
        ${tw`border-t-[5px] font-medium border-[#ffdc00] border-x-[1px] border-x-[#77777750] border-b-[0px] text-[#00427f]`}

        path {
            fill: #00427f;
        }
    }

    .tab-normal {
        ${tw`border-b-[1px] border-b-[#77777750] border-solid text-[#777777]`}

        path {
            fill: #777777;
        }
    }
`;

export const StyledAddButton = styled.button`
    ${tw`max-w-[265px] mt-[30px] mb-4 bg-[#59b224] text-[white] uppercase text-sm font-[bold] font-[normal] inline-block h-10 tracking-[1px] leading-10 min-h-[inherit] min-w-[inherit] px-[22px] py-0 rounded-[35px] border-[none]`}
`;

export const StyledSendComment = styled.button`
  ${tw`max-w-[265px] mt-4 mb-4 bg-[#59b224] text-[white] uppercase text-sm font-[bold] font-[normal] inline-block h-10 tracking-[1px] leading-10 min-h-[inherit] min-w-[inherit] px-[22px] py-0 rounded-[35px] border-[none]`}
  font-family: 'Poppins', sans-serif;
`

export const StyledCommentInput = styled.textarea.attrs({
    name: "comment",
    id: "comment-input",
    placeholder: "Deja tu comentario"
})`
  ${tw`h-[81px] bg-[#D9D9D9] shadow-[inset_2px_2px_5px_1px_#e2e1e1] rounded-[10px] w-full mt-4 placeholder-gray-500 p-[10px]`}
`;

export const StyledStars = styled.img.attrs({
    src: "/images/start.png",
    alt: "Star",
    className: "star"
})`
  ${tw`opacity-[0.5]`}
`;

export const StyledSliderComments = styled(Slider).attrs({
    autoplay: true,
    slidesToScroll: 1,
    speed: 10000,
    dots: false,
    arrows: false,
})`
  ${tw`py-[20px]`}
`;