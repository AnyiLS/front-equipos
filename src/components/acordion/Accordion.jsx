import React from "react";
import PropTypes from "prop-types";

const MessageIcon = () => {
    return (
        <svg
            width={25}
            height={25}
            viewBox="0 0 218 209"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8 100.013V118.86C8 149.094 28.1562 169.25 58.3905 169.25H98.7029L143.55 199.081C150.202 203.516 159.172 198.779 159.172 190.717V169.25C189.406 169.25 209.562 149.094 209.562 118.86V58.3905C209.562 28.1562 189.406 8 159.172 8H58.3905C28.1562 8 8 28.1562 8 58.3905"
                stroke="#88B31D"
                strokeWidth="15.1172"
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M108.779 97.9981V95.8817C108.779 89.0286 113.012 85.4005 117.245 82.4779C121.377 79.6561 125.509 76.028 125.509 69.3765C125.509 60.1046 118.051 52.6465 108.779 52.6465C99.5076 52.6465 92.0498 60.1046 92.0498 69.3765"
                stroke="#88B31D"
                strokeWidth="15.1172"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M108.737 122.085H108.828"
                stroke="#88B31D"
                strokeWidth="15.1172"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

const Accordion = ({title, content}) => {
    const [isSelected, setIsSelected] = React.useState("");

    return (
        <React.Fragment>
            <div className="relative mb-3">
                <h6 className="mb-0">
                    <button
                        className="border-slate-100 text-slate-700 rounded-[20px] group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in justify-between"
                        onClick={() => isSelected === title ? setIsSelected("") : setIsSelected(title)}
                        style={{ background: isSelected === title ? "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(241,241,241,1) 50%)" : "#ffffff" }}
                    >
                        <div className="flex items-center gap-[10px] w-[90%]">
                            <MessageIcon/>
                            <span>{title}</span>
                        </div>
                        <svg
                            width={25}
                            height={25}
                            viewBox="0 0 49 49"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M24.5 0C11.0005 0 0 10.7899 0 24.0309C0 37.2719 11.0005 48.0618 24.5 48.0618C37.9995 48.0618 49 37.2719 49 24.0309C49 10.7899 37.9995 0 24.5 0ZM34.3 25.8332H26.3375V33.6432C26.3375 34.6285 25.5045 35.4456 24.5 35.4456C23.4955 35.4456 22.6625 34.6285 22.6625 33.6432V25.8332H14.7C13.6955 25.8332 12.8625 25.0162 12.8625 24.0309C12.8625 23.0456 13.6955 22.2286 14.7 22.2286H22.6625V14.4185C22.6625 13.4333 23.4955 12.6162 24.5 12.6162C25.5045 12.6162 26.3375 13.4333 26.3375 14.4185V22.2286H34.3C35.3045 22.2286 36.1375 23.0456 36.1375 24.0309C36.1375 25.0162 35.3045 25.8332 34.3 25.8332Z"
                                fill="#88B31D"
                            />
                        </svg>
                    </button>
                </h6>
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out`}
                    style={{height: isSelected === title ? "auto" : "0px"}}
                >
                    <div className="p-4 text-sm leading-normal text-blue-gray-500/80" dangerouslySetInnerHTML={{__html: content}}>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default Accordion;