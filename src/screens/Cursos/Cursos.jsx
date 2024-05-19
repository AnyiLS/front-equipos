import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header";
import {
    HeaderContainer,
    StyledAddButton,
    StyledCommentInput,
    StyledSendComment,
    StyledSliderComments,
    StyledStars
} from "./Cursos.styles";
/** Local Modules */
import useControllers from "controllers";
import CharlaIcon from "icons/CharlaIcon";
import QuizIcon from "icons/QuizIcon";
import PlusIcon from "icons/PlusIcon";
import VideoIcon from "icons/VideoIcon";
import ModalContent from "./ModalContent";
import { format } from "date-fns";
import MessagesIcon from "../../icons/MessagesIcon";
import Accordion from "../../components/acordion";
// import Accordion from "../../components/acordion";

const Cursos = () => {
    /** Controllers */
    const { useScreenHooks } = useControllers();
    const { useCourse } = useScreenHooks();
    const { course, width, user, comment, addCourse, overStar, changeStars, changeComment, addComment } = useCourse();

    /** States */
    const [selectedItem, setSelectedItem] = React.useState({});
    const [openModal, setOpenModal] = React.useState(false);

    const changeTab = (value) => {
        switch (value) {
            case 1:
                document.getElementById("tab-2").classList.remove("active-tab");
                document.getElementById("tab-3").classList.remove("active-tab");
                document.getElementById("tab-1").classList.remove("tab-normal");
                document.getElementById("tab-1").classList.add("active-tab");
                document.getElementById("tab-2").classList.add("tab-normal");
                document.getElementById("tab-3").classList.add("tab-normal");
                document.getElementById("panel-1").classList.add("active");
                document.getElementById("panel-2").classList.remove("active");
                document.getElementById("panel-3").classList.remove("active");
                break;
            case 2:
                document.getElementById("tab-1").classList.remove("active-tab");
                document.getElementById("tab-3").classList.remove("active-tab");
                document.getElementById("tab-2").classList.remove("tab-normal");
                document.getElementById("tab-2").classList.add("active-tab");
                document.getElementById("tab-1").classList.add("tab-normal");
                document.getElementById("tab-3").classList.add("tab-normal");
                document.getElementById("panel-1").classList.remove("active");
                document.getElementById("panel-2").classList.add("active");
                document.getElementById("panel-3").classList.remove("active");
                break;
            case 3:
                document.getElementById("tab-1").classList.remove("active-tab");
                document.getElementById("tab-2").classList.remove("active-tab");
                document.getElementById("tab-3").classList.remove("tab-normal");
                document.getElementById("tab-3").classList.add("active-tab");
                document.getElementById("tab-1").classList.add("tab-normal");
                document.getElementById("tab-2").classList.add("tab-normal");
                document.getElementById("panel-1").classList.remove("active");
                document.getElementById("panel-2").classList.remove("active");
                document.getElementById("panel-3").classList.add("active");
                break;

            default:
                break;
        }
    };

    return (
        <React.Fragment>
            {
                course ? (
                    <HeaderContainer>
                    <Header></Header>
                    <div className="container-home">
                        <div
                            className="relative h-full py-[40px] w-full bg-no-repeat bg-right"
                            style={{
                                backgroundSize: "auto 100%",
                                backgroundImage:
                                    width > 767
                                        ? `linear-gradient(90deg, rgba(242,242,242,1) 70%, rgba(253,187,45,0) 100%), url(${course.image_reference})`
                                        : `linear-gradient(90deg, rgba(242,242,242,1) 100%, rgba(253,187,45,0) 100%)`,
                            }}
                        >
                            <div className="container flex flex-col justify-center h-full">
                                <h1>{course.name}</h1>
                                <p className="max-w-[70%] max-767:max-w-full text-[16px] mt-[20px] text-[#777777]">
                                    {course.description}
                                </p>
                                {!course.have_course && (
                                    <StyledAddButton onClick={() => addCourse(course.id, user.id)}>
                                        Adquiere este curso
                                    </StyledAddButton>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* header text */}
        
                    {/* Progreso del usuario */}
                    <div className="container">
                        <div className="mt-10">
                            <div className="bg-white  flex items-center flex-wrap">
                                <ul className="flex items-center">
                                    <li className="inline-flex items-center">
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-blue-500"
                                        >
                                            <svg
                                                className="w-5 h-auto fill-current mx-2 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="#000000"
                                            >
                                                <path d="M0 0h24v24H0V0z" fill="none" />
                                                <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
                                            </svg>
                                        </a>
        
                                        <svg
                                            className="w-5 h-auto fill-current mx-2 text-gray-400"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                                        </svg>
                                    </li>
        
                                    <li className="inline-flex items-center">
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-blue-500"
                                        >
                                            Cursos de Formación
                                        </a>
                                    </li>
                                    <svg
                                        className="w-5 h-auto fill-current mx-2 text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M0 0h24v24H0V0z" fill="none" />
                                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                                    </svg>
        
                                    <li className="inline-flex items-center">
                                        <a
                                            href="#"
                                            className="text-gray-600 hover:text-blue-500"
                                        >
                                            {course.name}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center gap-10">
                            <img
                                src={user ? user.image_profile : "/images/user.png"}
                                alt=""
                                className="rounded-[100%] w-[70px] mt-4"
                            />
                            <div className="w-full bg-gray-200 max-w-[210px] h-[32px] rounded-lg overflow-hidden border border-gray-300 mt-5">
                                <div
                                    className={`bg-green-500 text-xs leading-none h-[32px] py-1 flex items-center`}
                                    style={{ width: `${course.progress}%` }}
                                >
                                    <p className="pl-4">{course.progress}%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Progreso del usuario */}
        
                    {/* tag menu */}
                    <div className="container">
                        <div className="bg-white">
                            <nav className="tabs flex flex-col sm:flex-row">
                                <button
                                    data-target="panel-1"
                                    onClick={() => changeTab(1)}
                                    id="tab-1"
                                    className="tab active text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none text-blue-500 active-tab"
                                >
                                    <div className="flex gap-[10px]">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 85 90"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M63.9288 61.2146C66.9348 59.2406 70.8829 61.3941 70.8829 64.9833V70.7709C70.8829 76.4688 66.4413 82.5705 61.1023 84.3651L46.7903 89.1208C44.2778 89.9733 40.1951 89.9733 37.7275 89.1208L23.4154 84.3651C18.0316 82.5705 13.6348 76.4688 13.6348 70.7709V64.9384C13.6348 61.3941 17.583 59.2406 20.5441 61.1698L29.7863 67.1817C33.3307 69.5596 37.8172 70.7261 42.3038 70.7261C46.7903 70.7261 51.2768 69.5596 54.8212 67.1817L63.9288 61.2146Z"
                                                fill="#777777"
                                            />
                                            <path
                                                d="M78.0542 20.0211L51.1799 2.38907C46.3344 -0.796358 38.3484 -0.796358 33.503 2.38907L6.49424 20.0211C-2.16475 25.6293 -2.16475 38.3262 6.49424 43.9792L13.6727 48.6452L33.503 61.5664C38.3484 64.7518 46.3344 64.7518 51.1799 61.5664L70.8757 48.6452L77.0223 44.6073V58.3361C77.0223 60.1756 78.5477 61.701 80.3872 61.701C82.2266 61.701 83.7521 60.1756 83.7521 58.3361V36.2624C85.5467 30.4747 83.7072 23.7449 78.0542 20.0211Z"
                                                fill="#777777"
                                            />
                                        </svg>
                                        Introduccion
                                    </div>
                                </button>
                                <button
                                    data-target="panel-2"
                                    onClick={() => changeTab(2)}
                                    id="tab-2"
                                    className="tab ext-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none tab-normal"
                                >
                                    <div className="flex gap-[10px]">
                                        <svg
                                            width={20}
                                            height={20}
                                            viewBox="0 0 85 87"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M81.5491 42.649L80.8543 41.6936C79.6382 40.2169 78.205 39.0443 76.5547 38.1757C74.3397 36.9162 71.8207 36.2648 69.2149 36.2648H15.1441C12.5383 36.2648 10.0628 36.9162 7.80441 38.1757C6.11062 39.0877 4.59056 40.3472 3.33108 41.9107C0.855552 45.0811 -0.317067 48.9899 0.0738058 52.8986L1.68073 73.1806C2.24532 79.3042 2.98364 86.8611 16.7511 86.8611H67.6514C81.4189 86.8611 82.1137 79.3042 82.7218 73.1371L84.3287 52.942C84.7196 49.2939 83.7641 45.6457 81.5491 42.649ZM52.5811 66.6226H31.778C30.0842 66.6226 28.7378 65.2328 28.7378 63.5825C28.7378 61.9321 30.0842 60.5423 31.778 60.5423H52.5811C54.2749 60.5423 55.6212 61.9321 55.6212 63.5825C55.6212 65.2762 54.2749 66.6226 52.5811 66.6226Z"
                                                fill="#777777"
                                            />
                                            <path
                                                opacity="0.4"
                                                d="M4.76716 40.4337C5.72263 39.5651 6.67809 38.7833 7.80728 38.1753C10.0222 36.9158 12.5412 36.2643 15.147 36.2643H69.2614C71.8672 36.2643 74.3428 36.9158 76.6011 38.1753C77.7303 38.7833 78.7292 39.565 79.6413 40.4771V38.1753V33.9625C79.6413 18.4579 74.9073 13.724 59.4027 13.724H49.0663C47.1554 13.724 47.1119 13.6806 45.9827 12.2039L40.7711 5.21164C38.2956 1.9978 36.3412 0 30.1305 0H25.0057C9.50107 0 4.76716 4.73391 4.76716 20.2385V38.2187V40.4337Z"
                                                fill="#777777"
                                            />
                                        </svg>
                                        Módulos
                                    </div>
                                </button>
                                {
                                    course.name && !course.name.toLowerCase().includes('vidas') && (
                                        <button
                                            data-target="panel-3"
                                            className="tab text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none tab-normal"
                                            id="tab-3"
                                            onClick={() => changeTab(3)}
                                        >
                                            <div className="flex gap-[10px]">
                                                <svg
                                                    width={20}
                                                    height={20}
                                                    viewBox="0 0 85 81"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M63.3105 0H21.1035C8.44141 0 0 8.44141 0 21.1035V46.4278C0 59.0899 8.44141 67.5313 21.1035 67.5313V76.5214C21.1035 79.8979 24.8599 81.9239 27.6456 80.0246L46.4277 67.5313H63.3105C75.9726 67.5313 84.4141 59.0899 84.4141 46.4278V21.1035C84.4141 8.44141 75.9726 0 63.3105 0ZM42.207 51.366C40.4343 51.366 39.0415 49.931 39.0415 48.2005C39.0415 46.47 40.4343 45.0349 42.207 45.0349C43.9797 45.0349 45.3726 46.47 45.3726 48.2005C45.3726 49.931 43.9797 51.366 42.207 51.366ZM47.5251 33.8501C45.879 34.9475 45.3726 35.665 45.3726 36.8468V37.7331C45.3726 39.4636 43.9375 40.8987 42.207 40.8987C40.4765 40.8987 39.0415 39.4636 39.0415 37.7331V36.8468C39.0415 31.9507 42.6291 29.5449 43.9797 28.6164C45.5414 27.5612 46.0479 26.8437 46.0479 25.7463C46.0479 23.6359 44.3174 21.9054 42.207 21.9054C40.0967 21.9054 38.3662 23.6359 38.3662 25.7463C38.3662 27.4768 36.9311 28.9118 35.2007 28.9118C33.4702 28.9118 32.0351 27.4768 32.0351 25.7463C32.0351 20.1328 36.5935 15.5744 42.207 15.5744C47.8206 15.5744 52.3789 20.1328 52.3789 25.7463C52.3789 30.5579 48.8335 32.9637 47.5251 33.8501Z"
                                                        fill="#777777"
                                                    />
                                                </svg>
                                                Faqs
                                            </div>
                                        </button>
                                    )
                                }
                            </nav>
                        </div>
        
                        <div id="panels">
                            <div
                                className="panel-1 tab-content active py-5"
                                id="panel-1"
                            >
                                <p className="text-[#777777]">{course.introduction}</p>
        
                                <h2 className="border-b-2 mt-10 border-b-[#6184ad] border-solid max-w-[200px] text-[20px] text-[#00427f] font-bold">
                                    Reviews
                                </h2>
                                <StyledSliderComments
                                    slidesToShow={course.comments && course.comments.length === 1 ? 1 : course.comments && course.comments.length === 2 ? 2 : 3}
                                    responsive={
                                        [
                                            {
                                                breakpoint: 767,
                                                settings: {
                                                    slidesToShow: 1
                                                }
                                            }
                                        ]
                                    }
                                >
                                    {
                                        course.comments && course.comments.length > 0 && course.comments.map((item, index) => (
                                            <div
                                                key={index}
                                                className="bg-[#D9D9D9] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-2xl p-[30px] my-4 max-w-[380px] max-h-[210px]">
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center gap-4">
                                                        <img
                                                            src={item.user.image_profile ?? "/images/user.png"}
                                                            alt="Image Profile"
                                                            className="border rounded-[30px] border-solid border-[rgba(0,0,0,0.48)] w-[50px]"
                                                        />
                                                        <div className="text-sm not-italic font-bold leading-[normal]">
                                                            <h2>{item.user.name}</h2>
                                                            <p className="text-[#777777]">
                                                                {format(new Date(item.created_at), "dd-MM-yyyy")}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <MessagesIcon />
                                                    </div>
                                                </div>
                                                <p className="text-[11px] mt-4 text-justify">
                                                    {item.comments}
                                                </p>
                                                <div className="flex gap-1 justify-end mt-4">
                                                    {new Array(parseInt(item.stars)).fill(null).map((_, index) => (
                                                        <img src="/images/start.png" alt="star" key={index} />
                                                    ))}
                                                </div>
                                            </div>
                                        ))
                                    }
                                </StyledSliderComments>
        
                                {/* formulario */}
                                <div className="flex items-center gap-4 mt-10">
                                    <svg
                                        width={20}
                                        height={20}
                                        viewBox="0 0 85 85"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M53.3603 84.4158H30.0758C9.00334 84.4158 0 75.4124 0 54.34V31.0555C0 9.98301 9.00334 0.979675 30.0758 0.979675H37.8373C39.4284 0.979675 40.7479 2.29913 40.7479 3.89024C40.7479 5.48134 39.4284 6.8008 37.8373 6.8008H30.0758C12.1855 6.8008 5.82112 13.1652 5.82112 31.0555V54.34C5.82112 72.2302 12.1855 78.5946 30.0758 78.5946H53.3603C71.2505 78.5946 77.615 72.2302 77.615 54.34V46.5785C77.615 44.9874 78.9344 43.6679 80.5255 43.6679C82.1166 43.6679 83.4361 44.9874 83.4361 46.5785V54.34C83.4361 75.4124 74.4327 84.4158 53.3603 84.4158Z"
                                            fill="#292D32"
                                        />
                                        <path
                                            d="M28.1329 64.7795C25.7656 64.7795 23.5924 63.9258 22.0013 62.3735C20.0997 60.4719 19.2848 57.7166 19.7117 54.806L21.3804 43.125C21.6908 40.8741 23.1655 37.9636 24.7566 36.3725L55.3367 5.79202C63.0594 -1.93067 70.8985 -1.93067 78.6212 5.79202C82.8512 10.022 84.7528 14.3297 84.3647 18.6373C84.0155 22.13 82.1527 25.545 78.6212 29.0377L48.0409 59.6181C46.4498 61.2093 43.5393 62.6839 41.2884 62.9944L29.6076 64.6631C29.1031 64.7795 28.5986 64.7795 28.1329 64.7795ZM59.4503 9.90561L28.8702 40.4861C28.1329 41.2234 27.2791 42.9309 27.1239 43.9399L25.4552 55.621C25.2999 56.7464 25.5328 57.6778 26.1149 58.2599C26.697 58.842 27.6284 59.0748 28.7538 58.9196L40.4347 57.2509C41.4437 57.0957 43.19 56.2419 43.8885 55.5046L74.4688 24.9241C76.9913 22.4016 78.3108 20.1508 78.5048 18.0552C78.7376 15.5327 77.4182 12.855 74.4688 9.8668C68.2596 3.65761 63.9908 5.40394 59.4503 9.90561Z"
                                            fill="#292D32"
                                        />
                                        <path
                                            d="M72.1804 34.2756C71.9087 34.2756 71.637 34.2368 71.4042 34.1592C61.1978 31.2875 53.0871 23.1767 50.2153 12.9703C49.7884 11.418 50.681 9.82692 52.2333 9.36123C53.7856 8.93435 55.3767 9.82692 55.8036 11.3792C58.132 19.6452 64.6905 26.2037 72.9565 28.5321C74.5088 28.959 75.4014 30.5889 74.9745 32.1412C74.6252 33.4607 73.461 34.2756 72.1804 34.2756Z"
                                            fill="#292D32"
                                        />
                                    </svg>
                                    <h2 className=" border-solid max-w-[200px] text-[20px] text-[#292D32] font-bold">
                                        Deja tu calificacion
                                    </h2>
                                    <div className="flex gap-1">
                                        <StyledStars
                                            id="star-1"
                                            onMouseOver={() => overStar("over", 1)}
                                            onMouseLeave={() => overStar("leave", 1)}
                                            onClick={() => changeStars(1)}
                                        />
                                        <StyledStars
                                            id="star-2"
                                            onMouseOver={() => overStar("over", 2)}
                                            onMouseLeave={() => overStar("leave", 2)}
                                            onClick={() => changeStars(2)}
                                        />
                                        <StyledStars
                                            id="star-3"
                                            onMouseOver={() => overStar("over", 3)}
                                            onMouseLeave={() => overStar("leave", 3)}
                                            onClick={() => changeStars(3)}
                                        />
                                        <StyledStars
                                            id="star-4"
                                            onMouseOver={() => overStar("over", 4)}
                                            onMouseLeave={() => overStar("leave", 4)}
                                            onClick={() => changeStars(4)}
                                        />
                                        <StyledStars
                                            id="star-5"
                                            onMouseOver={() => overStar("over", 5)}
                                            onMouseLeave={() => overStar("leave", 5)}
                                            onClick={() => changeStars(5)}
                                        />
                                    </div>
                                </div>
                                <StyledCommentInput onChange={changeComment} value={comment} />
                                <StyledSendComment onClick={addComment}>
                                    Enviar comentario
                                </StyledSendComment>
                            </div>
        
                            {/* Module's Tab  */}
                            <div className="panel-2 tab-content py-5" id="panel-2">
                                {course.modules && course.modules.map((item, index) => (
                                    <div className="mt-[20px]" key={index}>
                                        <h2 className="underline mt-10  max-w-full text-[20px] text-[#00427f] font-medium">
                                            {item.name}
                                        </h2>
                                        {item.module_contents.map((content, key) => (
                                            <div className="mt-[30px]" key={key} onClick={() => {
                                                if (course.have_course) {
                                                    setOpenModal(true);
                                                    setSelectedItem({ ...content, moduleSelected: item.name.split(" ")[1] });
                                                }
                                            }}>
                                                <div className="bg-[#ffffff] mt-6 shadow-[inset_2px_2px_5px_1px_#e2e1e1] rounded-2xl my-4 max-w-[1024px] h-[50px] flex items-center">
                                                    <div className="flex justify-between items-center w-full px-[30px]">
                                                        <div className="flex items-center gap-4">
                                                            {content.name.split(
                                                                " "
                                                            )[0] === "Video" ? (
                                                                <CharlaIcon />
                                                            ) : content.name.split(
                                                                " "
                                                            )[0] === "Youtube" ||
                                                                content.name.split(
                                                                    " "
                                                                )[0] === "youtube" ? (
                                                                <VideoIcon />
                                                            ) : (
                                                                <QuizIcon />
                                                            )}
                                                            <div className="text-sm not-italic font-bold leading-[normal]">
                                                                <h2>{content.name}</h2>
                                                            </div>
                                                        </div>
                                                        <PlusIcon />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
        
                                <ModalContent open={openModal} onClose={() => { setOpenModal(false); setSelectedItem({}) }} user={user ? user.id : 0} data={selectedItem} course={course.id} />
                            </div>
                            {/* tab modulos  */}
        
                            {/* Faqs */}
                            <div className="panel-3 tab-content py-5" id="panel-3">
                                {
                                    course.faqs && course.faqs.map((item, key) => (
                                        <React.Fragment key={key}>
                                            <h2 className="underline mt-[40px] mb-[30px] max-w-full text-[20px] text-[#00427f] font-medium">
                                                {item.name}
                                            </h2>
                                            {
                                                item.items && item.items.map((items, indx) => (
                                                    <Accordion title={items.title} key={indx} content={items.content} />
                                                ))
                                            }
                                        </React.Fragment>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    {/* tag menu */}
                    <Footer></Footer>
                </HeaderContainer>
                ): (<span>Cargando...</span>)
            }
        </React.Fragment>
    );
};

export default Cursos;
