import axios from "axios";
import { trackPromise } from "react-promise-tracker";

const useCoursesProviders = () => {
    const getCourses = () => { 
        const request = axios({
            url: "/courses/get-courses",
            method: "GET"
        });

        return trackPromise(request);
    }

    const getCourse = (slug, id) => { 
        const request = axios({
            url: `/courses/get-course/${slug}/${id}`,
            method: "GET"
        });

        return trackPromise(request);
    }

    const sendQuiz = (data) => { 
        const request = axios({
            url: `/courses/save-quiz`,
            method: "POST",
            data
        });

        return trackPromise(request);
    }

    const addCourse = (data) => {
        const request = axios({
            url: `/courses/add-course`,
            method: "POST",
            data
        });

        return trackPromise(request);
    }

    const addComment = (data) => {
        const request = axios({
            url: `/courses/comment-course`,
            method: "POST",
            data
        });

        return trackPromise(request);
    }

    const getResources = () => {
        const request = axios({
            url: `/courses/get-resources`,
            method: "GET"
        });

        return trackPromise(request);
    }

    return {
        getCourses,
        getCourse,
        sendQuiz,
        addCourse,
        addComment,
        getResources
    }
}

export default useCoursesProviders;