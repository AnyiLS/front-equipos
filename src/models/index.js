import useReducers from "./reducers";
import useSelectors from "./selectors";

const useModels = () => {
    return {
        useReducers,
        useSelectors
    };
}

export default useModels;