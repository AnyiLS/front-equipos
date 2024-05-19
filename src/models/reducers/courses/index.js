import useHelpers from "helpers";
import useTypes from "types";

const useCoursesReducers = () => {
    /** Helpers */
    const { useCreateReducer } = useHelpers();
    const { createReducer } = useCreateReducer();

    /** Types */
    const { useCoursesTypes } = useTypes();
    const { GET_COURSES, GET_COURSE, GET_RESOURCES } = useCoursesTypes();

    /** Reducers */
    const courses = createReducer({courses: []}, {
        [GET_COURSES](state, action) {
            return { ...state, courses: action.payload };
        }
    });

    const course = createReducer({course: []}, {
        [GET_COURSE](state, action) {
            return { ...state, course: action.payload };
        }
    });

    const resources = createReducer({resources: []}, {
        [GET_RESOURCES](state, action) {
            return { ...state, resources: action.payload };
        }
    });

    return {
        courses,
        course,
        resources
    }
}

export default useCoursesReducers;