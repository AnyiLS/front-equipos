import useHelpers from "helpers";

const useCoursesSelectors = () => {
    /** Helpers */
    const { useCreateSelector } = useHelpers();
    const { createSelector } = useCreateSelector();

    /** Selectors */
    const coursesSelector = createSelector(
        (state) => state.courses,
        (courses) => courses.courses
    );

    const courseSelector = createSelector(
        (state) => state.course,
        (course) => course.course
    );

    const resourcesSelector = createSelector(
        (state) => state.resources,
        (resources) => resources.resources
    );

    return {
        coursesSelector,
        courseSelector,
        resourcesSelector
    };
}

export default useCoursesSelectors;