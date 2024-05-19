import useApi from "api";
import useTypes from "types";

const useCoursesActions = () => {
    /** Api */
    const { useProviders } = useApi();
    const { useCoursesProviders } = useProviders();
    const { getCourses, getCourse, sendQuiz, addCourse, addComment, getResources } = useCoursesProviders();

    /** Types */
    const { useCoursesTypes } = useTypes();
    const { GET_COURSES, GET_COURSE, GET_RESOURCES } = useCoursesTypes();

    const actGetCourses = (request) => async dispatch => {
        const {onError} = request;

        try {
            const res = await getCourses();

            dispatch({
                type: GET_COURSES,
                payload: res.data.data
            })
        } catch (error) {
            onError && onError(error);
        }
    }

    const actGetCourse = (request) => async dispatch => {
        const {onError, slug, id} = request;

        try {
            const res = await getCourse(slug, id);

            dispatch({
                type: GET_COURSE,
                payload: res.data.data
            })
        } catch (error) {
            onError && onError(error);
        }
    }

    const actSendQuiz = (request) => async dispatch => {
        const {onError, data, onSuccess} = request;

        try {
            const res = await sendQuiz(data);

            console.log(dispatch);

            onSuccess && onSuccess(res);
        } catch (error) {
            onError && onError(error);
        }
    }

    const actAddCourse = (request) => async dispatch => {
        const { onError, data, onSuccess } = request;

        try {
            const res = await addCourse(data);

            onSuccess && onSuccess(res, dispatch);
        } catch (error) {
            onError && onError(error);
        }
    };

    const actCommentCourse = (request) => async dispatch => {
        const { onError, data, onSuccess } = request;

        try {
            const res = await addComment(data);

            onSuccess && onSuccess(res, dispatch);
        } catch (error) {
            onError && onError(error);
        }
    };

    const actGetResources = (request) => async dispatch => {
        const {onError} = request;

        try {
            const res = await getResources();

            dispatch({
                type: GET_RESOURCES,
                payload: res.data.data
            })
        } catch (error) {
            onError && onError(error);
        }
    }


    return {
        actGetCourses,
        actGetCourse,
        actSendQuiz,
        actAddCourse,
        actCommentCourse,
        actGetResources
    };
};

export default useCoursesActions;
