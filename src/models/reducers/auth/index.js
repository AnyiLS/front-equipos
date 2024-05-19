import useHelpers from "helpers";
import useTypes from "types";

const useAuthReducers = () => {
    /** Helpers */
    const { useCreateReducer } = useHelpers();
    const { createReducer } = useCreateReducer();

    /** Types */
    const { useAuthTypes } = useTypes();
    const { LOGIN } = useAuthTypes();

    /** Reducers */
    const login = createReducer({login: {}}, {
        [LOGIN](state, action) {


            return { ...state, login: action.payload };
        }
    });

    return {
        login,
    }
}

export default useAuthReducers;