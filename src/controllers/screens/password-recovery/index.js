import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
/** Local Modules */
import useApi from "api";
import useModels from "models";
import Swal from "sweetalert2";

const usePasswordRecovery = () => {
    /** Variables */
    const history = useNavigate();

    /** Api */
    const { useActions } = useApi();
    const { dispatch, useAuthActions } = useActions();
    const { actPasswordRecovery } = useAuthActions();

    /** Models */
    const { useSelectors } = useModels();
    const { useSelector, useAuthSelectors } = useSelectors();
    const { loginSelector } = useAuthSelectors();
    const {
        login: { token },
    } = useSelector(loginSelector);

    /** Form */
    const {
        register,
        handleSubmit,
        setError,
        formState: { isValid, errors },
    } = useForm({ mode: "onChange" });

    const handleChangePassword = (data) => {
        if (data.password !== data.confirm_password) {
            setError("confirm_password", {
                type: "validate",
                message: "Las contrasenas no coinciden",
            });
        } else {
            dispatch(actPasswordRecovery({
                data,
                onError: (error) => {
                    Swal.fire({
                        icon: "error",
                        title: "Ocurrio un problema",
                        text: 'Ocurrio un problema al momento de cambiar la contrasena, verifica tus datos y vuelve a intentarlo.'
                    }).then();
    
                    console.error("CHANGE_PASSWORD: ", error);
                },
                onSuccess: () => {
                    Swal.fire({
                        icon: "success",
                        title: "Cambio de contrasena exitoso"
                    }).then()
    
                    history('/login')
                }
            }))
        }

        
    };

    React.useEffect(() => {
        if (token) {
            history("/");
        }
    }, [token]);

    return {
        isValid,
        errors,
        register,
        handleSubmit,
        handleChangePassword
    };
};

export default usePasswordRecovery;
