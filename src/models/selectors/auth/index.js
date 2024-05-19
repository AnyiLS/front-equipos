import useHelpers from "helpers";

const useAuthSelectors = () => {
    /** Helpers */
    const { useCreateSelector } = useHelpers();
    const { createSelector } = useCreateSelector();

    /** Selectors */
    const loginSelector = createSelector(
        (state) => state.login,
        (login) => login
    );

    return {
        loginSelector
    };
}

export default useAuthSelectors;