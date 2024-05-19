import useComponentsHooks from "./components";
import useScreenHooks from "./screens";

const useControllers = () => {
    return {
        useScreenHooks,
        useComponentsHooks
    };
}

export default useControllers;