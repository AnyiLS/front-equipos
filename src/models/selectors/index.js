import { useSelector } from "react-redux";
/** Selectors */
import useAuthSelectors from "./auth";
import useCoursesSelectors from "./courses";

const useSelectors = () => {
    return {
        useSelector,
        useAuthSelectors,
        useCoursesSelectors
    };
};

export default useSelectors;