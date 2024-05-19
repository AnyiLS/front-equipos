import axios from "axios";
import useAuthProviders from "./auth";
import useCoursesProviders from "./courses";

const useProviders = () => {
    // axios.defaults.baseURL = "https://api.elearningclinicalbmxsystems.com/api"
    axios.defaults.baseURL = "http://localhost:8000/api"

    return {
        useAuthProviders,
        useCoursesProviders
    }
}

export default useProviders;