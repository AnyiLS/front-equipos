import React from "react";
/** Local Modules */
import useApi from "api";
import useModels from "models";

const useCarouselCourses = () => {
    /** Api */
    const { useActions } = useApi();
    const { dispatch, useCoursesActions } = useActions();
    const {actGetCourses} = useCoursesActions();

    /** Models */
    const {useSelectors} = useModels();
    const {useSelector, useCoursesSelectors} = useSelectors();
    const {coursesSelector} = useCoursesSelectors();
    const courses = useSelector(coursesSelector);

    React.useEffect(() => {
        dispatch(actGetCourses({
            onError: (error) => console.error("GET_COURSES: ", error)
        }))
    }, []);

    return {
        courses
    };
}

export default useCarouselCourses;