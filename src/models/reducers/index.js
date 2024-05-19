import { combineReducers } from "@reduxjs/toolkit";
/** Reducers */
import useAuthReducers from "./auth";
import useCoursesReducers from "./courses";

const useReducers = () => {

    return combineReducers({
        ...useAuthReducers(),
        ...useCoursesReducers(),
    });
};

export default useReducers;