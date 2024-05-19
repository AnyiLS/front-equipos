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

    const countriesSelector = createSelector(
        (state) => state.countries,
        (countries) => countries.countries
    )

    return {
        loginSelector,
        countriesSelector
    };
}

export default useAuthSelectors;