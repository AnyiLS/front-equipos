import axios from "axios"
import { trackPromise } from "react-promise-tracker"

const useAuthProviders = () => {
    const register = (data) => {
        const request = axios({
            url: "/auth/register",
            method: "post",
            data
        })

        return trackPromise(request)
    }

    const login = (data) => {
        const request = axios({
            url: "/auth/login",
            method: "post",
            data
        })

        return trackPromise(request)
    }

    const passwordRecovery = (data) => {
        const request = axios({
            url: "/auth/password-recovery",
            method: "post",
            data
        })

        return trackPromise(request)
    }

    const changeImageProfile = (data) => {
        const request = axios({
            url: "/auth/change-image",
            method: "post",
            data
        })

        return trackPromise(request)
    }

    const editInfo = (data) => {
        const request = axios({
            url: "/auth/change-info",
            method: "post",
            data
        })

        return trackPromise(request)
    }

    const getUserInfo = (id) => {
        const request = axios({
            url: `/auth/get-user-info/${id}`,
            method: "get"
        })

        return trackPromise(request)
    }

    return {
        register,
        login,
        passwordRecovery,
        changeImageProfile,
        editInfo,
        getUserInfo
    }
}

export default useAuthProviders;