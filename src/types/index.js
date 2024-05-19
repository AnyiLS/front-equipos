import useAuthTypes from "./auth";
import useCoursesTypes from "./courses";

const useTypes = () => {
    return {
        useAuthTypes,
        useCoursesTypes
    };
}

export default useTypes;