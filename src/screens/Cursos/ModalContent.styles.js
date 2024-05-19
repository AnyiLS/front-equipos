import { styled } from "styled-components";
import tw from "twin.macro";

export const CardStyle = styled.div`
    ${tw`relative flex flex-col min-w-0 h-[var(--bs-card-height)] text-[#212529] bg-white bg-clip-border border rounded-md border-solid border-[rgba(0,0,0,0.175)]`}
    word-wrap: break-word;

    .card-entry {
        ${tw`flex relative`}

        @media (max-width: 1024px) {
            ${tw`flex-col h-full`}
        }

        .card-left {
            ${tw`w-full flex max-w-[50%] h-[500px] flex-col justify-center items-center`}

            @media (max-width: 1024px) {
                ${tw`max-w-full h-[300px]`}
            }

            h2 {
                ${tw`text-[#00427F] w-[70%] mt-[30px] text-center`}
            }
        }

        .card-right {
            ${tw`w-full relative flex max-w-[50%] h-[500px] flex-col justify-center items-start bg-[#00427F] rounded-[14px 14px 14px 100px] px-[20px]`};

            .radio {
                ${tw`rounded-[50%] h-[20px] w-[20px] bg-white flex justify-center items-center`}

                .radio-center {
                    ${tw`rounded-[50%] h-[10px] w-[10px] bg-[#379531]`}
                }
            }

            label {
                ${tw`w-[80%] text-white text-[13px]`}
            }

            button {
                ${tw`mt-[30px] bg-[#379531] text-white w-[150px] h-[40px] rounded-[10px] shadow-md`}
            }

            @media (max-width: 1024px) {
                ${tw`max-w-full rounded-[100px 15px 15px 15px] h-[300px] mx-auto h-full py-[50px]`}
            }
        }
    }
`;
