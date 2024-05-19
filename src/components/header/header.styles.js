import { styled } from "styled-components";
import tw from "twin.macro";

const HeaderStyles = {};

HeaderStyles.Container = styled.div.attrs({
  className: "container",
})`
  ${tw`max-w-[1280px] w-[90%] mx-auto my-0 p-[10px]`}

  .header {
    ${tw`flex justify-between items-center`}

    .logo {
      ${tw`w-[250px]`}

      @media(max-width: 767px) {
        ${tw`w-[130px]`}
      }
    }

    .menu {
      ${tw`flex items-center`}

      a {
        &:hover {
            ${tw`text-[#003d7c] underline`};
        }

        ${tw`pr-[27px] uppercase text-lg text-[#333] leading-[22px] hidden`};

        @media(min-width: 1120px){
            ${tw`block`};
        }
      }

      .navbar {
        @media(min-width: 1120px){
            ${tw`hidden`};
        }
      }
    }
  }
`;

export default HeaderStyles;
