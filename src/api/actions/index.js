import { useDispatch } from "react-redux";
/** Actions */
import useAuthActions from "./auth";
import useCoursesActions from "./courses";

const useActions = () => {
  /** Variables */
  const dispatch = useDispatch();

  return {
    dispatch,
    useAuthActions,
    useCoursesActions
  };
};

export default useActions;
