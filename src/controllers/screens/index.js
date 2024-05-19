import useRegister from "./register";
import useLogin from "./login";
import usePasswordRecovery from "./password-recovery";
import useProfile from "./profile";
import useCourse from "./course";
import useResources from "./resources";

const useScreenHooks = () => {
    return {
        useRegister,
        useLogin,
        usePasswordRecovery,
        useProfile,
        useCourse,
        useResources
    };
}

export default useScreenHooks;