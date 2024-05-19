import React from "react";
import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";
import { CardStyle } from "./ModalContent.styles";
import useControllers from "controllers";
import ModalCharlaIcon from "icons/ModalCharlaIcon";
import VideoIcon from "../../icons/VideoIcon";
import QuizIcon from "../../icons/QuizIcon";
import { getPdfs } from "./pdfs";

const QuizComponent = ({ data, id, content, onClose, module, course }) => {
    const [question, setQuestion] = React.useState(0);
    const [responses, setResponses] = React.useState({});

    /** Controllers */
    const { useComponentsHooks } = useControllers();
    const { useModalContent } = useComponentsHooks();
    const { validateQuiz } = useModalContent();

    return (
        <CardStyle>
            <div className="card-entry">
                {data.complete_quizzes && data.complete_quizzes.id && (
                    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(255,255,255,.9)] z-[1] flex justify-center items-center flex-col">
                        <h2 className="text-[#00427F] font-bold text-[24px]">
                            Felicidades
                        </h2>
                        <h4 className="text-[#379531] text-[20px]">
                            Completaste este módulo con éxito
                        </h4>
                        <h4 className="text-[#379531] text-[20px]">
                            Tu calificación fue de{" "}
                            <b>{data.complete_quizzes.calification}%</b>
                        </h4>
                    </div>
                )}

                <div className="card-left">
                    <img src="/images/logo.svg" alt="Logo" width={250} />
                    <h2>
                        {data.questions && data.questions[question].question}
                    </h2>
                </div>
                <div className="card-right">
                    <div
                        className="flex gap-[10px] items-center"
                        onClick={() =>
                            setResponses({ ...responses, [question]: "a" })
                        }
                    >
                        <div>
                            <div className="radio">
                                {responses[question] === "a" && (
                                    <div className="radio-center"></div>
                                )}
                            </div>
                        </div>
                        <label>
                            {data.questions && data.questions[question].a}
                        </label>
                    </div>
                    <div
                        className="flex gap-[10px] mt-[10px] items-center"
                        onClick={() =>
                            setResponses({ ...responses, [question]: "b" })
                        }
                    >
                        <div>
                            <div className="radio">
                                {responses[question] === "b" && (
                                    <div className="radio-center"></div>
                                )}
                            </div>
                        </div>
                        <label>
                            {data.questions && data.questions[question].b}
                        </label>
                    </div>

                    {data.questions && data.questions[question].c && (
                        <div
                            className="flex gap-[10px] mt-[10px] items-center"
                            onClick={() =>
                                setResponses({ ...responses, [question]: "c" })
                            }
                        >
                            <div>
                                <div className="radio">
                                    {responses[question] === "c" && (
                                        <div className="radio-center"></div>
                                    )}
                                </div>
                            </div>
                            <label>
                                {data.questions && data.questions[question].c}
                            </label>
                        </div>
                    )}
                    {data.questions && data.questions[question].d && (
                        <div
                            className="flex gap-[10px] mt-[10px] items-center"
                            onClick={() =>
                                setResponses({ ...responses, [question]: "d" })
                            }
                        >
                            <div>
                                <div className="radio">
                                    {responses[question] === "d" && (
                                        <div className="radio-center"></div>
                                    )}
                                </div>
                            </div>
                            <label>
                                {data.questions && data.questions[question].d}
                            </label>
                        </div>
                    )}
                    {data.questions && data.questions[question].e && (
                        <div
                            className="flex gap-[10px] mt-[10px] items-center"
                            onClick={() =>
                                setResponses({ ...responses, [question]: "e" })
                            }
                        >
                            <div>
                                <div className="radio">
                                    {responses[question] === "e" && (
                                        <div className="radio-center"></div>
                                    )}
                                </div>
                            </div>
                            <label>
                                {data.questions && data.questions[question].e}
                            </label>
                        </div>
                    )}
                    {data.questions && data.questions[question].f && (
                        <div
                            className="flex gap-[10px] mt-[10px] items-center"
                            onClick={() =>
                                setResponses({ ...responses, [question]: "f" })
                            }
                        >
                            <div>
                                <div className="radio">
                                    {responses[question] === "f" && (
                                        <div className="radio-center"></div>
                                    )}
                                </div>
                            </div>
                            <label>
                                {data.questions && data.questions[question].f}
                            </label>
                        </div>
                    )}
                    <div className="flex justify-end w-full">
                        <button
                            onClick={() => {
                                if (
                                    data.questions &&
                                    question === data.questions.length - 1
                                ) {
                                    validateQuiz({
                                        questions: data.questions,
                                        responses,
                                        content,
                                        id,
                                        onClose,
                                        module,
                                        step: setQuestion,
                                        course,
                                    });
                                } else {
                                    if (responses[question]) {
                                        setQuestion(question + 1);
                                    }
                                }
                            }}
                        >
                            {data.questions &&
                            data.questions.length - 1 === question
                                ? "Enviar"
                                : "Siguiente"}
                        </button>
                    </div>
                </div>
            </div>
        </CardStyle>
    );
};

QuizComponent.propTypes = {
    data: PropTypes.array,
    content: PropTypes.number,
    id: PropTypes.number,
    onClose: PropTypes.func,
    module: PropTypes.number,
    course: PropTypes.number,
};

const ModalContent = ({ open, onClose, data, user, course }) => {
    const cancelButtonRef = React.useRef(null);

    return (
        <Transition.Root show={open} as={React.Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={onClose}
            >
                <Transition.Child
                    as={React.Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={React.Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-[90%] sm:max-w-[1024px]">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:block sm:items-start">
                                        {data.name &&
                                        data?.name.split(" ")[0] === "Video" ? (
                                            <React.Fragment>
                                                <div className="flex gap-4 items-center mb-[20px]">
                                                    <ModalCharlaIcon />
                                                    <div className="text-lg not-italic font-bold leading-[normal] text-[14px]">
                                                        <h2>Charla</h2>
                                                    </div>
                                                </div>
                                                <video
                                                    src={data?.content}
                                                    controls
                                                ></video>
                                                <button
                                                    className="bg-[#00427F] mt-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-xl text-white w-[200px] h-[45px] flex gap-2 justify-center items-center"
                                                    onClick={() => {
                                                        window.open(
                                                            getPdfs(
                                                                data.moduleSelected,
                                                                course
                                                            ),
                                                            "_blank"
                                                        );
                                                    }}
                                                >
                                                    <svg
                                                        width={25}
                                                        height={25}
                                                        viewBox="0 0 43 41"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M42.7093 20.5347C42.8229 9.43971 33.3943 0.337658 21.6633 0.217572C9.93233 0.0974852 0.319367 9.00461 0.205791 20.0996C0.0922152 31.1945 9.52082 40.2966 21.2518 40.4166C32.9828 40.5367 42.5957 31.6296 42.7093 20.5347ZM20.2483 28.4057L13.9345 22.3106C13.6188 22.0058 13.4739 21.6224 13.4778 21.2405C13.4818 20.8586 13.6344 20.4782 13.9563 20.18C14.5786 19.6034 15.5986 19.6139 16.209 20.2031L19.8289 23.6976L19.9357 13.266C19.9441 12.4419 20.6737 11.7659 21.545 11.7748C22.4163 11.7837 23.1319 12.4745 23.1234 13.2986L23.0166 23.7302L26.7073 20.3105C27.3296 19.734 28.3497 19.7444 28.96 20.3336C29.5704 20.9228 29.5605 21.8876 28.9382 22.4642L22.501 28.4287C21.8787 29.0053 20.8586 28.9949 20.2483 28.4057Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                    Download pdf
                                                </button>
                                            </React.Fragment>
                                        ) : (data.name &&
                                              data?.name.split(" ")[0] ===
                                                  "Youtube") ||
                                          (data.name &&
                                              data?.name.split(" ")[0] ===
                                                  "youtube") ? (
                                            <React.Fragment>
                                                <div className="flex gap-4 items-center mb-[20px]">
                                                    <VideoIcon />
                                                    <div className="text-lg not-italic font-bold leading-[normal] text-[14px]">
                                                        <h2>Video</h2>
                                                    </div>
                                                </div>
                                                <iframe
                                                    className="w-full"
                                                    height={600}
                                                    title="bioMérieux in 1 minute"
                                                    src={
                                                        data.content &&
                                                        data.content
                                                    }
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen={true}
                                                ></iframe>
                                                {data.name
                                                    .split(" ")
                                                    .includes("charla") && (
                                                    <button
                                                        className="bg-[#00427F] mt-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-xl text-white w-[200px] h-[45px] flex gap-2 justify-center items-center"
                                                        onClick={() => {
                                                            window.open(
                                                                getPdfs(
                                                                    data.moduleSelected,
                                                                    course
                                                                ),
                                                                "_blank"
                                                            );
                                                        }}
                                                    >
                                                        <svg
                                                            width={25}
                                                            height={25}
                                                            viewBox="0 0 43 41"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M42.7093 20.5347C42.8229 9.43971 33.3943 0.337658 21.6633 0.217572C9.93233 0.0974852 0.319367 9.00461 0.205791 20.0996C0.0922152 31.1945 9.52082 40.2966 21.2518 40.4166C32.9828 40.5367 42.5957 31.6296 42.7093 20.5347ZM20.2483 28.4057L13.9345 22.3106C13.6188 22.0058 13.4739 21.6224 13.4778 21.2405C13.4818 20.8586 13.6344 20.4782 13.9563 20.18C14.5786 19.6034 15.5986 19.6139 16.209 20.2031L19.8289 23.6976L19.9357 13.266C19.9441 12.4419 20.6737 11.7659 21.545 11.7748C22.4163 11.7837 23.1319 12.4745 23.1234 13.2986L23.0166 23.7302L26.7073 20.3105C27.3296 19.734 28.3497 19.7444 28.96 20.3336C29.5704 20.9228 29.5605 21.8876 28.9382 22.4642L22.501 28.4287C21.8787 29.0053 20.8586 28.9949 20.2483 28.4057Z"
                                                                fill="white"
                                                            />
                                                        </svg>
                                                        Download pdf
                                                    </button>
                                                )}
                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment>
                                                <div className="flex gap-4 items-center mb-[20px]">
                                                    <QuizIcon />
                                                    <div className="text-lg not-italic font-bold leading-[normal] text-[14px]">
                                                        <h2>Quiz</h2>
                                                    </div>
                                                </div>
                                                <QuizComponent
                                                    data={data}
                                                    content={data.id}
                                                    id={user}
                                                    onClose={onClose}
                                                    module={data.module_id}
                                                    course={course}
                                                />
                                            </React.Fragment>
                                        )}
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={onClose}
                                        ref={cancelButtonRef}
                                    >
                                        Cerrar
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

ModalContent.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    data: PropTypes.object,
    user: PropTypes.number,
    course: PropTypes.number,
};

export default ModalContent;
