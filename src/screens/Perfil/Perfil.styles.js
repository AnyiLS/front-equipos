import { styled } from "styled-components";
import tw from "twin.macro";
import Slider from "react-slick";

export const HeaderContainer = styled.div`
  ${tw``}
  .container-cartas {
    ${tw`max-w-[40%] mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:w-[328px] w-full sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900`};
    @media(max-width: 600px) {
      ${tw`max-w-full`}
    }
  }

  .contenedor-perfil {
    ${tw`flex mt-[30px]`}; 
    @media(max-width: 1366px) {
      ${tw`block`}
    }

    .vector {
      @media (max-width: 1024px) {
        ${tw`mt-[70px]`}
      }
    }
  }

  .carrousel {
    ${tw`grid grid-cols-4 mt-[40px] gap-5`} @media(max-width: 1024 px) {
    ${tw`grid-cols-2`}
  }

    @media (max-width: 600px) {
      ${tw`grid-cols-1`}
    }


  }

  .buttom {
    ${tw`bg-white rounded-bl-[10px] rounded-br-[10px] h-[40px] flex justify-center items-center  z-[1]`}
    border-top: 1px solid #f2f2f2;


    &:hover {
      ${tw`bg-[#00427f] text-white font-semibold`}
      border-bottom: 5px solid #ecb202;
    }
  }
`;

export const StyledSlider = styled(Slider).attrs({
    slidesToScroll: 1,
    speed: 3000,
  arrows: false,
  dots: false
})`
  ${tw`w-full`};

  .slick-slide {
    height: auto !important;
  }
`;