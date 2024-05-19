import useHelpers from "helpers";
import useTypes from "types";

const useAuthReducers = () => {
    /** Helpers */
    const { useCreateReducer } = useHelpers();
    const { createReducer } = useCreateReducer();

    /** Types */
    const { useAuthTypes } = useTypes();
    const { LOGIN, GET_COUNTRIES } = useAuthTypes();

    /** Reducers */
    const login = createReducer({login: {}}, {
        [LOGIN](state, action) {


            return { ...state, login: action.payload };
        }
    });

    const countries = createReducer({countries: []}, {
        [GET_COUNTRIES]: (state, action) => ({ ...state, countries: action.payload })
    })

    return {
        login,
        countries
    }
}

export default useAuthReducers;