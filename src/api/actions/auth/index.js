/** Local Modules */
import useApi from "api";
import useTypes from "types";

const useAuthActions = () => {
  /** Services */
  const { useProviders } = useApi();
  const { useAuthProviders } = useProviders();
  const { register, login, passwordRecovery, changeImageProfile, editInfo, getUserInfo, getCountries } = useAuthProviders();

  /** Types */
  const { useAuthTypes } = useTypes();
  const { LOGIN, GET_COUNTRIES } = useAuthTypes();

  const actGetCountries = ({ onError }) => {
    return async dispatch => {
      try {
        const res = await getCountries();
        dispatch({ type: GET_COUNTRIES, payload: res.data.data })
      } catch (error) {
        onError && onError(error)
      }
    }
  }

  const actLogin =
    ({ data, onSuccess, onError }) =>
    async dispatch => {
      try {
        const res = await login(data);

        await dispatch({
          type: LOGIN,
          payload: res.data.data,
        });

        onSuccess && onSuccess()
      } catch (error) {
        onError && onError(error);
      }
    };

  const actRegister =
    ({ data, onSuccess, onError }) => async dispatch => {
      try {
        const res = await register(data);
        
          onSuccess && onSuccess(res, dispatch);
          
      } catch (error) {
        onError && onError(error);
      }
    };

  const actPasswordRecovery =
    ({ data, onSuccess, onError }) => async dispatch => {
      try {
        const res = await passwordRecovery(data);
        if (res) {
          onSuccess && onSuccess(dispatch);
        }
      } catch (error) {
        onError && onError(error);
      }
    };

  const actChangeImageProfile = (request) => async dispatch => {
    const {data, login, onError} = request;

    try {
      const res = await changeImageProfile(data);

      dispatch({
        type: LOGIN,
        payload: {...login, user: res.data.data}
      })
    } catch (error) {
      onError && onError(error);
    }
  }

  const actEditInfo = (request) => async dispatch => {
    const {data, login, onError, onSuccess} = request;

    try {
      const res = await editInfo(data);

      dispatch({
        type: LOGIN,
        payload: {...login, user: res.data.data}
      })

      onSuccess && onSuccess();
    } catch (error) {
      onError && onError(error);
    }
  }

  const actLogout = (request) => async dispatch => {
    const {onError, onSuccess} = request;

    try {
      dispatch({
        type: LOGIN,
        payload: {login: {}}
      })

      onSuccess && onSuccess();
    } catch (error) {
      onError && onError(error);
    }
  }

  const actGetUserInfo = (request) => async dispatch => {
    const {id, login ,onError, onSuccess} = request;

    try {
      const res = await getUserInfo(id);

      dispatch({
        type: LOGIN,
        payload: {...login, user: res.data.data}
      })

      onSuccess && onSuccess();
    } catch (error) {
      onError && onError(error);
    }
  }

  return {
    actLogin,
    actRegister,
    actPasswordRecovery,
    actChangeImageProfile,
    actEditInfo,
    actLogout,
    actGetUserInfo,
    actGetCountries
  };
};

export default useAuthActions;
