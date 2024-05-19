import React from "react";
/** Styles */
import LoadingStyles from "./Loading.styles";

const Loading = () => {
    return (
        <LoadingStyles.Container>
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    style={{
                        margin: "auto",
                        display: "block",
                        shapeRendering: "auto"
                    }}
                    width="200px"
                    height="200px"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="xMidYMid"
                >
                    <path
                        d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50"
                        fill="#369530"
                        stroke="none"
                    >
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            dur="1s"
                            repeatCount="indefinite"
                            keyTimes="0;1"
                            values="0 50 51;360 50 51"
                        />
                    </path>
                </svg>
                <img src="/images/logo.svg" alt="logo" width="300" height="107" className="mt-[50px]"/>
            </div>
        </LoadingStyles.Container>
    );
}

export default Loading;